// Einbürgerungstest — Domäne E, the per-state questions (16 Länder × 2 anchors).
//
// ORIGINALITY (doctrine #1): the official 300-question federal catalog and the
// per-state question sets are NEVER copied. Every question here is ORIGINAL; only
// the FACTS are anchored, to BUNDESLAND_FACTS in src/lib/exams/civic-factbase.ts.
//
// ── WHY THIS FILE IS GENERATED FROM THE FACT-BASE, NOT HAND-TYPED ───────────
// 32 near-identical items differing only by a place name is precisely the shape
// that produces a transposition nobody notices — Schwerin filed under Sachsen,
// Magdeburg under Mecklenburg-Vorpommern. Hand-typing them would mean 32 chances
// to introduce a fact the fact-base does not contain. So the correct option, the
// keyed answer and the state tag are all READ from BUNDESLAND_FACTS; only the
// question wording is authored. A wrong fact cannot be typed in here — it would
// have to be wrong in the fact-base, where the citation sits.
//
// ── DISTRACTORS ARE OTHER REAL LÄNDER, NEVER AN INVENTED PLACE ─────────────
// Each distractor is another real state's capital (or another real state's
// parliament), pulled from the same sourced table. Three properties are asserted
// at build time rather than trusted:
//   1. no distractor equals the correct answer (would create a double key),
//   2. the three distractors are distinct from each other,
//   3. for the parliament items, no distractor is this state's own parliament.
// A violation throws at seed time — the seeder refuses to emit a broken item
// rather than shipping one and hoping a gate downstream notices.
//
// ── NEVER MIX STATES ────────────────────────────────────────────────────────
// Every item carries payload.bundesland. The civic-sourcing gate then enforces
// that its factId belongs to THAT Land — an item tagged BE referencing BY_CAP is
// refused even though the fact is real and cited. See the cross-state cases in
// civic-sourcing-gate.test.mts.
//
// ⚠️ HONEST SHORTFALL: the real test asks THREE state questions; this sources TWO
// anchors per Land (capital + parliament). A third per-state fact was not sourced
// in this pass and is NOT invented — see BUNDESLAND_ITEMS_PER_STATE.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";
import { deGame } from "./_permute";
import {
  BUNDESLAENDER,
  BUNDESLAND_CODES,
  BUNDESLAND_FACTS,
  type BundeslandCode,
} from "../../../src/lib/exams/civic-factbase";

const LETTERS = ["a", "b", "c", "d"];
const L = EXAM_LEVEL.EINBUERGERUNGSTEST;

/**
 * Which three other Länder supply the distractors for a given state. Fixed offsets
 * across the 16, so the set is reproducible (the seeder compares payloads, and a
 * shuffle here would churn every row on every deploy) and spread rather than always
 * neighbouring. 1, 5 and 9 are non-zero and pairwise distinct mod 16, so a state can
 * never draw itself and the three are always different Länder. Correctness does not
 * rest on that reasoning, though — assertDistractors checks it on every item.
 */
const OFFSETS = [1, 5, 9] as const;

function othersFor(code: BundeslandCode): BundeslandCode[] {
  const i = BUNDESLAND_CODES.indexOf(code);
  return OFFSETS.map((o) => BUNDESLAND_CODES[(i + o) % BUNDESLAND_CODES.length]);
}

function assertDistractors(kind: string, code: BundeslandCode, correct: string, distractors: string[]) {
  const where = `${kind} / ${code}`;
  if (distractors.length !== 3) throw new Error(`${where}: expected 3 distractors, got ${distractors.length}`);
  if (distractors.includes(correct)) throw new Error(`${where}: a distractor equals the correct answer "${correct}"`);
  if (new Set(distractors).size !== 3) throw new Error(`${where}: distractors are not distinct — ${distractors.join(" | ")}`);
}

function item(
  code: BundeslandCode,
  factIndex: 0 | 1,
  taskSuffix: "HAUPTSTADT" | "PARLAMENT",
  titleFor: (name: string) => string,
  stemFor: (name: string) => string,
  distractors: string[],
): ExamItemInput {
  const b = BUNDESLAENDER[code];
  const fact = BUNDESLAND_FACTS[code][factIndex];
  assertDistractors(taskSuffix, code, fact.answer, distractors);
  // Correct option first; deGame permutes positions deterministically afterwards.
  const optionTexts = [fact.answer, ...distractors];
  return {
    exam: "EINBUERGERUNGSTEST" as const,
    level: L,
    section: SECTION.BUNDESLAND,
    difficulty: "CORE" as const,
    taskType: "EINB_BUNDESLAND",
    title: titleFor(b.name),
    prompt: "Wählen Sie die richtige Antwort. Nur eine Antwort ist richtig.",
    topicTag: taskSuffix === "HAUPTSTADT" ? "bundesland-hauptstadt" : "bundesland-parlament",
    timeLimitSeconds: 60,
    payload: {
      // For the civic-sourcing gate (key ↔ world) …
      factId: fact.factId,
      answer: fact.answer,
      // … and the state tag that makes a cross-state leak detectable.
      bundesland: code,
      instructions: "Nur eine Antwort ist richtig.",
      questions: [
        {
          id: "q1",
          stem: stemFor(b.name),
          options: optionTexts.map((text, i) => ({ id: LETTERS[i], text })),
          answer: "a", // correct is first here; deGame re-points it after permuting
        },
      ],
    },
    guidanceNote: `Quelle: ${fact.citation}`,
  };
}

const RAW_ITEMS: ExamItemInput[] = BUNDESLAND_CODES.flatMap((code) => {
  const others = othersFor(code);
  return [
    // ── Anchor 1: die Landeshauptstadt ──
    item(
      code,
      0,
      "HAUPTSTADT",
      (name) => `Landeshauptstadt von ${name}`,
      (name) => `Wie heißt die Landeshauptstadt von ${name}?`,
      others.map((o) => BUNDESLAENDER[o].capital),
    ),
    // ── Anchor 2: das Landesparlament ──
    item(
      code,
      1,
      "PARLAMENT",
      (name) => `Landesparlament von ${name}`,
      (name) => `Wie heißt das Landesparlament von ${name}?`,
      others.map((o) => BUNDESLAENDER[o].parliamentAnswer),
    ),
  ];
});

// Permute the 4-option MC keys deterministically (see ./_permute.ts and the
// answer-distribution gate). Correctness untouched — only the letter under which
// the correct TEXT sits changes.
export const ITEMS: ExamItemInput[] = deGame(RAW_ITEMS, {
  permuteMC: new Set(["EINB_BUNDESLAND"]),
});
