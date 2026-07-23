// Shared types + helpers for the NEW German-exam engine seed data (TestDaF + telc
// B1/B2/C1 Hochschule). These items populate ExamItem (parallel to GoetheItem);
// the Goethe seed files are untouched.
//
// ORIGINALITY (doctrine #1): every item authored here is ORIGINAL to AlmiGoethe —
// never copied or derived from telc / g.a.s.t. / TestDaF-Institut materials, past
// papers, Modelltests, or Übungstests. Same IP rule as DET vs. Duolingo.

import type { Prisma } from "@prisma/client";

export type ExamItemInput = Prisma.ExamItemCreateManyInput;

// Human CEFR band carried on the item's `level` (the engine vocabulary).
export const EXAM_LEVEL = {
  TESTDAF: "B2–C1",
  TELC_C1_HOCHSCHULE: "C1",
  TELC_B1: "B1",
  TELC_B2: "B2",
  DTZ: "A2–B1",
} as const;

// Section keys — MUST match SECTION_META in src/lib/exams/registry.ts.
export const SECTION = {
  LESEVERSTEHEN: "LESEVERSTEHEN",
  HOERVERSTEHEN: "HOERVERSTEHEN",
  SPRACHBAUSTEINE: "SPRACHBAUSTEINE",
  SCHRIFTLICHER_AUSDRUCK: "SCHRIFTLICHER_AUSDRUCK",
  MUENDLICHER_AUSDRUCK: "MUENDLICHER_AUSDRUCK",
  SPRECHEN: "SPRECHEN",
} as const;
