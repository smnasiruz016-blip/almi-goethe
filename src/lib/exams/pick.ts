// Server helpers for the exam practice UI: pick a random active ExamItem for an
// (exam, section) and redact its answer key before it is sent to the client. The
// answer key NEVER leaves the server — the submit route re-loads the item by id.

// ── STATE-SCOPED SECTIONS ───────────────────────────────────────────────────
// The Einbürgerungstest BUNDESLAND section is the one section where drawing at
// random across the section is a WRONG ANSWER, not merely a dull one: it would
// serve a Berliner Bavaria's capital on the test that decides their naturalisation.
// The civic-sourcing gate cannot catch this — it checks AUTHORED items, and every
// one of the 32 is correctly tagged. Only the draw can mix them. So the draw is
// gated here: a state-scoped section refuses to serve anything until a Land is
// chosen, rather than defaulting to one or falling back to "any".

import { prisma } from "@/lib/prisma";
import type { GermanExam } from "@prisma/client";
import { objectivePayloadSchema, redactObjectivePayload } from "@/lib/exams/tasks";
import { sectionDefFor } from "@/lib/exams/registry";
import { aufgabeCountFor } from "@/lib/exams/exam-structure";
import { isBundeslandCode, type BundeslandCode } from "@/lib/exams/civic-factbase";

/** Sections whose items are true of exactly one Bundesland. */
export const STATE_SCOPED_SECTIONS: readonly string[] = ["BUNDESLAND"];

export function isStateScoped(section: string): boolean {
  return STATE_SCOPED_SECTIONS.includes(section);
}

// ── 1-OF-2 WRITING (Schriftlicher Ausdruck: "ein Brief / eine Stellungnahme aus zwei
// Themen") ──────────────────────────────────────────────────────────────────
// telc B2 and telc C1 Hochschule give the candidate TWO themes and ask for ONE text.
// The choice IS part of the task — serving a single prompt silently halves it (you
// remove the decision of which topic you can best argue). So for these sections the
// draw PAIRS two distinct items and the learner picks one. The themes are two real
// bank items, not a second prompt smuggled into one payload.
const ONE_OF_TWO_WRITING: ReadonlySet<string> = new Set([
  "TELC_B2::SCHRIFTLICHER_AUSDRUCK",
  "TELC_C1_HOCHSCHULE::SCHRIFTLICHER_AUSDRUCK",
]);

export function isOneOfTwoWriting(exam: string, section: string): boolean {
  return ONE_OF_TWO_WRITING.has(`${exam}::${section}`);
}

export type StateDraw<T> = {
  items: T[];
  /** What the sourced envelope asks for (the real test's count). */
  requested: number;
  /** What we can honestly serve for this Land. */
  served: number;
  /** requested − served. Reported, never padded away. */
  shortfall: number;
};

/**
 * THE DRAW, as a pure function so it can be exercised without a database.
 *
 * Three properties, all of which a naive implementation gets wrong:
 *   1. it filters to the requested Land — never "any state" and never a default,
 *   2. it serves min(requested, available) — it does NOT top up from another Land
 *      to reach the envelope, which is the failure mode the envelope invites,
 *   3. it reports the shortfall instead of hiding it.
 */
export function planStateDraw<T extends { payload: unknown }>(
  all: T[],
  code: BundeslandCode,
  requested: number,
): StateDraw<T> {
  const mine = all.filter((it) => (it.payload as any)?.bundesland === code);
  const items = mine.slice(0, requested);
  return { items, requested, served: items.length, shortfall: Math.max(0, requested - items.length) };
}

/** How many items the sourced structure says this section asks for (fallback 1). */
export function requestedCountFor(exam: GermanExam, section: string): number {
  return aufgabeCountFor(exam, section) ?? 1;
}

export type ClientItem = {
  id: string;
  exam: GermanExam;
  section: string;
  taskType: string;
  title: string;
  prompt: string;
  guidanceNote: string | null;
  timeLimitSeconds: number;
  kind: "objective" | "writing" | "speaking";
  // Redacted payload (objective answer keys stripped); productive payloads carry no key.
  payload: unknown;
};

/**
 * Why this is a discriminated result and not `ClientItem | null`: "no Land chosen
 * yet" and "nothing seeded" are different states that must render differently. As
 * one nullable they collapse, and the tempting fix for a blank page is to draw
 * something — which is precisely the cross-state bug.
 */
export type PickResult =
  | { kind: "item"; item: ClientItem }
  // A 1-of-2 writing task: two themes, the learner writes on ONE. Exactly two items.
  | { kind: "choice"; items: ClientItem[] }
  | { kind: "needs-bundesland" }
  | { kind: "empty" };

/** Pick one random active item for (exam, section), with its answer key stripped. */
export async function pickClientItem(
  exam: GermanExam,
  section: string,
  opts: { bundesland?: string } = {},
): Promise<PickResult> {
  const def = sectionDefFor(exam, section);
  if (!def) return { kind: "empty" };

  // A state-scoped section serves NOTHING until a Land is chosen. No default, no
  // "any state" fallback — an unchosen Land is a question to ask, not a gap to fill.
  const stateScoped = isStateScoped(def.key);
  if (stateScoped && !isBundeslandCode(opts.bundesland)) return { kind: "needs-bundesland" };

  const items = await prisma.examItem.findMany({
    where: { exam, section: def.key, active: true },
    select: {
      id: true,
      exam: true,
      section: true,
      taskType: true,
      title: true,
      prompt: true,
      guidanceNote: true,
      timeLimitSeconds: true,
      payload: true,
    },
  });

  const pool = stateScoped
    ? items.filter((it) => (it.payload as any)?.bundesland === opts.bundesland)
    : items;
  if (pool.length === 0) return { kind: "empty" };

  // 1-of-2 writing: pair two DISTINCT themes and let the learner pick one. Only when
  // at least two exist — with a single theme there is no choice to offer, so serve it.
  if (isOneOfTwoWriting(exam, def.key) && pool.length >= 2) {
    const first = Math.floor(Math.random() * pool.length);
    let second = Math.floor(Math.random() * (pool.length - 1));
    if (second >= first) second += 1; // pick a distinct second index, uniformly
    return { kind: "choice", items: [toClientItem(pool[first], def.kind), toClientItem(pool[second], def.kind)] };
  }

  const chosen = pool[Math.floor(Math.random() * pool.length)];
  return { kind: "item", item: toClientItem(chosen, def.kind) };
}

/** Shape a database row into a client item, stripping the answer key for objective
 *  sections. Productive (writing/speaking) payloads carry no key, so they pass through. */
function toClientItem(
  row: {
    id: string;
    exam: GermanExam;
    section: string;
    taskType: string;
    title: string;
    prompt: string;
    guidanceNote: string | null;
    timeLimitSeconds: number;
    payload: unknown;
  },
  kind: ClientItem["kind"],
): ClientItem {
  let payload: unknown = row.payload;
  if (kind === "objective") {
    const parsed = objectivePayloadSchema.safeParse(row.payload);
    payload = parsed.success ? redactObjectivePayload(parsed.data) : row.payload;
  }
  return {
    id: row.id,
    exam: row.exam,
    section: row.section,
    taskType: row.taskType,
    title: row.title,
    prompt: row.prompt,
    guidanceNote: row.guidanceNote,
    timeLimitSeconds: row.timeLimitSeconds,
    kind,
    payload,
  };
}
