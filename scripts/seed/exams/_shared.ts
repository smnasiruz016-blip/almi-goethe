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
  // The Einbürgerungstest is CIVIC, not a language level — its `level` is a stable
  // non-CEFR vocabulary token, not a band.
  EINBUERGERUNGSTEST: "civic",
  // DSH certifies B2–C2 across its three grades (DSH-1/2/3).
  DSH: "B2–C2",
  // ÖSD ZDÖ B1 — Austrian B1.
  OESD_B1: "B1",
} as const;

// Section keys — MUST match SECTION_META in src/lib/exams/registry.ts.
export const SECTION = {
  LESEVERSTEHEN: "LESEVERSTEHEN",
  HOERVERSTEHEN: "HOERVERSTEHEN",
  SPRACHBAUSTEINE: "SPRACHBAUSTEINE",
  SCHRIFTLICHER_AUSDRUCK: "SCHRIFTLICHER_AUSDRUCK",
  MUENDLICHER_AUSDRUCK: "MUENDLICHER_AUSDRUCK",
  SPRECHEN: "SPRECHEN",
  // Einbürgerungstest civic domains.
  GRUNDGESETZ: "GRUNDGESETZ",
  INSTITUTIONEN: "INSTITUTIONEN",
  GESCHICHTE: "GESCHICHTE",
  GESELLSCHAFT: "GESELLSCHAFT",
  // Einbürgerungstest Domäne E — the per-state questions. Every item here is true
  // of exactly ONE Land and is tagged with it; see civic-factbase BUNDESLAND_FACTS.
  BUNDESLAND: "BUNDESLAND",
  // DSH.
  WISS_STRUKTUREN: "WISS_STRUKTUREN",
  TEXTPRODUKTION: "TEXTPRODUKTION",
} as const;
