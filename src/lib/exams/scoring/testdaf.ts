// TestDaF scoring — the network's FIFTH philosophy.
//
// VERIFIED (docs/AlmiGoethe_TestDaF_telc_Verified_Scoring_Specs.md §1, sources:
// testdaf.de TDN levels + digital-TestDaF evaluation):
//   • 4 sections graded INDEPENDENTLY, each on a uniform 0–20 point scale.
//   • 0–20 maps to a TestDaF-Niveaustufe (TDN):
//        16–20 → TDN 5 | 10–15 → TDN 4 | 5–9 → TDN 3 | 0–4 → unter TDN 3
//   • NO aggregate score. NO overall pass/fail. Each section stands alone.
//   • TDN 3–5 span CEFR B2–C1 (state only "B2–C1"; no finer public mapping quoted).
//
// HARD RULE (product doctrine): this module exposes NO function that sums sections
// and NO pass/fail. A full mock returns an ARRAY of section results, never a total.

import type { Range, TestDafSection, TestDafSectionResult, Tdn } from "@/lib/exams/types";

export const TESTDAF_MAX_POINTS = 20 as const;

// Practice band: a practice run is not the calibrated exam, so widen the point
// estimate by ±2 points on the 0–20 scale (same ±8%-of-max spirit as the Goethe engine).
const BAND_POINTS = 2;

function clamp(n: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, n));
}

/** Map a 0–20 section point score to its TDN band (verified table). */
export function pointsToTdn(points: number): Tdn {
  const p = clamp(Math.round(points), 0, TESTDAF_MAX_POINTS);
  if (p >= 16) return "5";
  if (p >= 10) return "4";
  if (p >= 5) return "3";
  return "under";
}

export const TDN_LABEL: Record<Tdn, string> = {
  "5": "TDN 5",
  "4": "TDN 4",
  "3": "TDN 3",
  under: "unter TDN 3", // shown honestly — NOT "failed"
};

// TestDaF's own CEFR statement: TDN 3–5 sit in the B2–C1 band.
const TESTDAF_CEFR = "B2–C1";

/** Score one TestDaF section from a 0..1 performance fraction (pointsEarned /
 *  pointsMax for objective sections, or the AI trait fraction for productive
 *  sections). Returns an independent per-section TDN estimate. NEVER aggregated. */
export function fractionToTestDafSection(
  section: TestDafSection,
  fraction: number,
): TestDafSectionResult {
  const f = clamp(fraction, 0, 1);
  const center = Math.round(f * TESTDAF_MAX_POINTS);
  const lo = Math.round(clamp(center - BAND_POINTS, 0, TESTDAF_MAX_POINTS));
  const hi = Math.round(clamp(center + BAND_POINTS, 0, TESTDAF_MAX_POINTS));
  const pointsEst: Range = [lo, hi];
  const tdn = pointsToTdn(center);
  return {
    section,
    pointsEst,
    centerPoints: center,
    maxPoints: TESTDAF_MAX_POINTS,
    tdn,
    tdnLabel: TDN_LABEL[tdn],
    cefr: TESTDAF_CEFR,
  };
}

/** Format a section result, e.g. "TDN 4 (12–16 / 20)". No total is ever formatted. */
export function formatTestDafSection(r: TestDafSectionResult): string {
  return `${r.tdnLabel} (${r.pointsEst[0]}–${r.pointsEst[1]} / ${r.maxPoints})`;
}

// The admissions-vs-exam distinction the engine copy must preserve: universities
// commonly require "TDN 4 in all four sections" (4×4), but that is an ADMISSIONS
// rule, not a TestDaF pass mark — the exam itself never says pass/fail.
export const TESTDAF_ADMISSIONS_NOTE =
  "Many universities ask for TDN 4 in all four sections (“4×4”). That is an admissions requirement set by the university — TestDaF itself reports four independent section results and never a pass or fail. Confirm the exact TDN your programme needs.";
