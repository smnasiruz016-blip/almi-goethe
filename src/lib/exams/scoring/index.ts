// Scoring dispatch for the four new German-exam engines. Each engine is scored on
// its OWN philosophy — never blended, never given a fabricated cross-exam total.
//
//   TESTDAF            → per-section 0–20 → TDN, NO total, NO pass/fail
//   TELC_B1/B2/C1H     → percentage-first, 60% per-part pass (C1H also overall)
//   DTZ                → one fixed total /100, summed, banded A2/B1/nicht bestanden
//   EINBUERGERUNGSTEST → 33 civic MCQs, count-based pass/fail (≥17/33)
//   DSH                → weighted % (2:2:1:2) banded into DSH-1/2/3
//   OESD_B1            → telc-style %-per-part, but TWO separately-certifiable modules

import type { GermanExam } from "@/lib/exams/types";

export * from "./testdaf";
export * from "./telc";
export * from "./dtz";
export * from "./einbuergerung";
export * from "./dsh";
export * from "./oesd";

/** True for the TestDaF engine, whose UI must never render a total or pass/fail. */
export function isTestDaf(exam: GermanExam): boolean {
  return exam === "TESTDAF";
}

/** True for the three telc engines (which do have a 60% pass mark). */
export function isTelc(exam: GermanExam): boolean {
  return exam === "TELC_B1" || exam === "TELC_B2" || exam === "TELC_C1_HOCHSCHULE";
}

/** True for DTZ, whose result is a single /100 total banded into A2/B1. */
export function isDtz(exam: GermanExam): boolean {
  return exam === "DTZ";
}

/** True for the Einbürgerungstest, whose result is a count-based pass/fail (≥17/33). */
export function isEinb(exam: GermanExam): boolean {
  return exam === "EINBUERGERUNGSTEST";
}

/** True for DSH, whose result is a weighted % (2:2:1:2) banded into DSH-1/2/3. */
export function isDsh(exam: GermanExam): boolean {
  return exam === "DSH";
}

/** True for ÖSD ZDÖ B1 — telc-style %, but two separately-certifiable modules. */
export function isOesd(exam: GermanExam): boolean {
  return exam === "OESD_B1";
}
