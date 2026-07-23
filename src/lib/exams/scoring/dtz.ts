// DTZ scoring — Deutsch-Test für Zuwanderer. The engines' THIRD philosophy.
//
// VERIFIED (official DTZ Prüfungshandbuch, goethe.de):
//   • ONE fixed total out of 100 = Hören 25 + Lesen 25 + Schreiben 20 + Sprechen 30.
//   • Written and oral simply SUM into that 100 — no extra weighting beyond those
//     point allocations, and NO per-section minimums.
//   • The aggregate is banded into a DUAL OUTCOME:
//        ≥ 60 → B1 · 33–59 → A2 · < 33 → nicht bestanden (unter A2).
//
// This is distinct from TestDaF (per-section TDN, no total) and telc (%-per-part,
// 60% gate). Here there IS a single total and a single verdict, but it is a LEVEL
// (A2 vs B1), never a bare pass/fail — a candidate who scores 40 has not "failed",
// they have reached A2. The UI must say that.

import type {
  DtzBand,
  DtzSection,
  DtzSectionResult,
  DtzExamResult,
  GermanExam,
  Range,
} from "@/lib/exams/types";
import { DTZ_SECTION_MAX } from "@/lib/exams/types";

export const DTZ_EXAM_MAX = 100 as const;
export const DTZ_B1_THRESHOLD = 60 as const;
export const DTZ_A2_THRESHOLD = 33 as const;

// Practice band: ±8% of a section's own max (same spirit as the sibling engines).
function bandPoints(sectionMax: number): number {
  return Math.max(1, Math.round(sectionMax * 0.08));
}

function clamp(n: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, n));
}

const SECTION_LABEL: Record<DtzSection, string> = {
  HOERVERSTEHEN: "Hören",
  LESEVERSTEHEN: "Lesen",
  SCHRIFTLICHER_AUSDRUCK: "Schreiben",
  SPRECHEN: "Sprechen",
};

/** Band a 0–100 aggregate. The one place the dual outcome is decided. */
export function pointsToDtzBand(totalPoints: number): DtzBand {
  const p = clamp(Math.round(totalPoints), 0, DTZ_EXAM_MAX);
  if (p >= DTZ_B1_THRESHOLD) return "B1";
  if (p >= DTZ_A2_THRESHOLD) return "A2";
  return "nicht-bestanden";
}

export const DTZ_BAND_LABEL: Record<DtzBand, string> = {
  B1: "B1",
  A2: "A2",
  "nicht-bestanden": "nicht bestanden (unter A2)",
};

/** Score one DTZ section from a 0..1 performance fraction. Returns the points it
 *  contributes toward the fixed 100 total — NEVER a band, because DTZ bands only
 *  the aggregate (no per-section minimums). */
export function scoreDtzSection(section: DtzSection, fraction: number): DtzSectionResult {
  const f = clamp(fraction, 0, 1);
  const sectionMax = DTZ_SECTION_MAX[section];
  const center = Math.round(f * sectionMax);
  const bp = bandPoints(sectionMax);
  const pointsEst: Range = [
    Math.round(clamp(center - bp, 0, sectionMax)),
    Math.round(clamp(center + bp, 0, sectionMax)),
  ];
  return {
    section,
    label: SECTION_LABEL[section],
    pointsEst,
    centerPoints: center,
    sectionMax,
    examMax: DTZ_EXAM_MAX,
    percentOfSection: Math.round(f * 100),
  };
}

/** Aggregate a full DTZ mock: SUM the section points into one /100 total, then band
 *  it. This is the only function that produces a DTZ verdict, and it is a LEVEL. */
export function aggregateDtz(
  exam: GermanExam,
  displayName: string,
  sections: DtzSectionResult[],
): DtzExamResult {
  const totalPoints = clamp(
    sections.reduce((sum, s) => sum + s.centerPoints, 0),
    0,
    DTZ_EXAM_MAX,
  );
  const band = pointsToDtzBand(totalPoints);
  return {
    exam,
    displayName,
    sections,
    totalPoints,
    maxPoints: DTZ_EXAM_MAX,
    band,
    bandLabel: DTZ_BAND_LABEL[band],
    b1Threshold: DTZ_B1_THRESHOLD,
    a2Threshold: DTZ_A2_THRESHOLD,
    noSectionMinimums: true,
    thresholdVerified: true, // sourced from the DTZ Prüfungshandbuch
  };
}

/** Format one section contribution, e.g. "18–22 / 25". No band is shown per section. */
export function formatDtzSection(r: DtzSectionResult): string {
  return `${r.pointsEst[0]}–${r.pointsEst[1]} / ${r.sectionMax}`;
}
