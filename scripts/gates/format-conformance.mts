// FORMAT-CONFORMANCE GATE — does each item's ANSWER FORMAT match the format its
// Teil is actually answered in?
//
// Run: npm run gate:format          (report over the staged B2 target)
//      npm run gate:format:proof    (RED-first fixture proof)
//
// ── THE HOLE THIS CLOSES ────────────────────────────────────────────────────
// conformance checks that an item's taskType is a real Aufgabe of its exam. It does
// NOT look at how the item is answered. The answer-distribution gate IS type-aware,
// but it infers the type from the PAYLOAD — so an item authored in the wrong format
// is de-gamed on the wrong axis and reports clean. telc B2's entire Hörverstehen is
// MC-3 in our bank and richtig/falsch in the real exam: 16 items, three Teile, and
// every existing gate green.
//
// So the exam's own envelope now declares the format per Teil (Aufgabe.answerFormat),
// and this checks the payload against THAT rather than against itself.
//
// ── ZUORDNUNG IS THE ONE THAT CANNOT BE FAKED PER-QUESTION ──────────────────
// A Zuordnung has ONE shared option bank across the Teil (a–j, a–l+x, a–o) and each
// question is an assignment into it. Authored as per-question option arrays it would
// render wrong AND point the distribution gate's assignment-spread axis at nothing.
// So the shape is checked, not just the count: a ZUORDNUNG item must carry
// payload.bank, and its questions must key into it.

import type { AnswerFormat, SectionStructure } from "../../src/lib/exams/exam-structure";

export type FmtItem = { exam?: string; section?: string; taskType?: string; title?: string; payload?: any };

export type FmtViolation = {
  title: string;
  taskType: string;
  kind: "wrong-format" | "no-bank" | "bank-size" | "bad-assignment" | "unknown-aufgabe";
  detail: string;
};

const RF = new Set(["richtig", "falsch", "r", "f"]);

/** What format an item is ACTUALLY authored in, read from its payload. */
export function observedFormat(payload: any): AnswerFormat | "UNKNOWN" {
  const qs = payload?.questions ?? [];
  if (qs.length === 0) return "PRODUCTIVE";
  if (payload?.bank) return "ZUORDNUNG";
  const sizes = new Set<number>();
  let rf = 0, rfn = 0;
  for (const q of qs) {
    const opts = q.options ?? [];
    sizes.add(opts.length);
    const texts = opts.map((o: any) => String(o.text ?? "").trim().toLowerCase());
    if (opts.length === 2 && texts.every((t: string) => RF.has(t))) rf++;
    if (opts.length === 3 && texts.some((t: string) => t.includes("nicht im text"))) rfn++;
  }
  if (rf === qs.length) return "RICHTIG_FALSCH";
  if (rfn === qs.length) return "RFN";
  if (sizes.size === 1) {
    const n = [...sizes][0];
    if (n === 3) return "MC-3";
    if (n === 4) return "MC-4";
  }
  return "UNKNOWN";
}

/** THE CHECK. Pure: items + one exam's structure → violations. */
export function checkFormats(
  items: FmtItem[],
  structure: Record<string, SectionStructure>,
): { violations: FmtViolation[]; scanned: number } {
  const violations: FmtViolation[] = [];
  let scanned = 0;

  const aufgabeByKey = new Map<string, { a: any; section: string }>();
  for (const [section, s] of Object.entries(structure)) {
    for (const a of s.aufgaben) aufgabeByKey.set(a.key, { a, section });
  }

  for (const it of items) {
    scanned++;
    const title = it.title ?? "(untitled)";
    const taskType = it.taskType ?? "(none)";
    const hit = aufgabeByKey.get(taskType);
    if (!hit) {
      violations.push({ title, taskType, kind: "unknown-aufgabe", detail: `taskType is not an Aufgabe of this structure` });
      continue;
    }
    const want = hit.a.answerFormat as AnswerFormat | undefined;
    if (!want) continue; // format not sourced for this Aufgabe — skip, do not guess

    const got = observedFormat(it.payload);
    if (want === "ZUORDNUNG") {
      const bank = it.payload?.bank;
      if (!Array.isArray(bank)) {
        violations.push({ title, taskType, kind: "no-bank", detail: `ZUORDNUNG needs a shared payload.bank; per-question options cannot express it` });
        continue;
      }
      if (typeof hit.a.bankSize === "number" && bank.length !== hit.a.bankSize) {
        violations.push({ title, taskType, kind: "bank-size", detail: `bank has ${bank.length} options, the Teil's is ${hit.a.bankSize}` });
      }
      const ids = new Set(bank.map((b: any) => b.id));
      for (const q of it.payload?.questions ?? []) {
        if (!ids.has(q.answer)) {
          violations.push({ title, taskType, kind: "bad-assignment", detail: `question "${q.id}" keys "${q.answer}", which is not in the bank` });
        }
      }
      continue;
    }
    if (got !== want) {
      violations.push({ title, taskType, kind: "wrong-format", detail: `authored as ${got}, the Teil is answered in ${want}` });
    }
  }
  return { violations, scanned };
}
