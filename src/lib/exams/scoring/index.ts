// Scoring dispatch for the four new German-exam engines. Each engine is scored on
// its OWN philosophy — never blended, never given a fabricated cross-exam total.
//
//   TESTDAF            → per-section 0–20 → TDN, NO total, NO pass/fail
//   TELC_B1/B2/C1H     → percentage-first, 60% per-part pass (C1H also overall)

import type { GermanExam } from "@/lib/exams/types";

export * from "./testdaf";
export * from "./telc";

/** True for the TestDaF engine, whose UI must never render a total or pass/fail. */
export function isTestDaf(exam: GermanExam): boolean {
  return exam === "TESTDAF";
}

/** True for the three telc engines (which do have a 60% pass mark). */
export function isTelc(exam: GermanExam): boolean {
  return exam === "TELC_B1" || exam === "TELC_B2" || exam === "TELC_C1_HOCHSCHULE";
}
