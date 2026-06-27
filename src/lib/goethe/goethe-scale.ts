// The single source of truth for Goethe scoring in AlmiGoethe.
//
// The Goethe-Zertifikat scores each MODULE (Lesen, Hören, Schreiben, Sprechen) to
// a points maximum, and a result of 60% is the pass mark. The pass MODEL differs
// by level:
//   • A1 / A2   — more holistic (historically a single overall result).
//   • B1–C2     — MODULAR: each module is passed independently at 60%, and can be
//                 booked / retaken on its own.
// AlmiGoethe scores per module either way and reports an honest practice estimate;
// it never invents a single "total" pass that the real exam does not use.
//
// ⚠️ EXACT per-level maximum points and thresholds must be VERIFIED against the
// official Goethe Durchführungsbestimmungen for each Zertifikat before launch.
// Until each level is verified, `verified: false` flags it and we use the
// documented practice convention below (max 100 / module, pass 60%) — which is the
// standard 60% rule, clearly labelled as a practice estimate, not an official score.

import type { GoetheLevel } from "@prisma/client";
import type { ModuleScore, Range, Verdict } from "@/lib/goethe/types";

export const PASS_PERCENT = 60; // a Goethe module is passed at 60%

export type LevelScale = {
  maxPointsPerModule: number;
  passPercent: number; // 60
  model: "holistic" | "modular";
  verified: boolean; // true once checked against the official Durchführungsbestimmungen
};

// Practice convention until per-level official verification: 100 points/module,
// 60% pass. A1/A2 flagged holistic, B1–C2 modular (real-exam pass rule).
export const GOETHE_SCALE: Record<GoetheLevel, LevelScale> = {
  A1: { maxPointsPerModule: 100, passPercent: PASS_PERCENT, model: "holistic", verified: false },
  A2: { maxPointsPerModule: 100, passPercent: PASS_PERCENT, model: "holistic", verified: false },
  B1: { maxPointsPerModule: 100, passPercent: PASS_PERCENT, model: "modular", verified: false },
  B2: { maxPointsPerModule: 100, passPercent: PASS_PERCENT, model: "modular", verified: false },
  C1: { maxPointsPerModule: 100, passPercent: PASS_PERCENT, model: "modular", verified: false },
  C2: { maxPointsPerModule: 100, passPercent: PASS_PERCENT, model: "modular", verified: false },
};

// Practice-estimate band: a practice run is not the calibrated exam, so we widen
// the point estimate by ±8% of the module max in each direction.
const BAND_FRACTION = 0.08;

function clamp(n: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, n));
}

export function passThresholdFor(level: GoetheLevel): number {
  const s = GOETHE_SCALE[level];
  return Math.round((s.passPercent / 100) * s.maxPointsPerModule);
}

/** Map a 0..1 performance fraction (pointsEarned/pointsMax, or the AI trait
 *  fraction) to an honest practice module score: a points RANGE, the percent, a
 *  pass/borderline/not-yet verdict, and the module's pass threshold. */
export function fractionToModuleScore(level: GoetheLevel, fraction: number): ModuleScore {
  const s = GOETHE_SCALE[level];
  const f = clamp(fraction, 0, 1);
  const max = s.maxPointsPerModule;
  const center = f * max;
  const band = Math.round(BAND_FRACTION * max);
  const lo = Math.round(clamp(center - band, 0, max));
  const hi = Math.round(clamp(center + band, 0, max));
  const pointsEst: Range = [lo, hi];
  const passThreshold = passThresholdFor(level);

  let verdict: Verdict;
  if (lo >= passThreshold) verdict = "passed";
  else if (hi >= passThreshold) verdict = "borderline";
  else verdict = "not-yet";

  return { pointsEst, percent: Math.round(f * 100), verdict, passThreshold, maxPoints: max };
}

export const VERDICT_LABEL: Record<Verdict, string> = {
  passed: "On track to pass",
  borderline: "Borderline — close to the 60% pass mark",
  "not-yet": "Not yet at the 60% pass mark",
};

/** Format a module score, e.g. "55–71 / 100 (pass 60)". */
export function formatModuleScore(score: NonNullable<ModuleScore>): string {
  return `${score.pointsEst[0]}–${score.pointsEst[1]} / ${score.maxPoints} (pass ${score.passThreshold})`;
}

export const ESTIMATE_DISCLAIMER =
  "This is a practice estimate shown as a points range, not an official Goethe result. The real exam is calibrated by the Goethe-Institut. Confirm the level and result you need with the Goethe-Institut, your university, or the relevant German authority.";
