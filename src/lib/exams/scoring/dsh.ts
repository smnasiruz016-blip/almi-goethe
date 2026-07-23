// DSH scoring — the engines' FIFTH philosophy: a WEIGHTED PERCENTAGE banded into
// three grades.
//
// ⚠️ DSH IS A FRAMEWORK. The HRK Rahmenordnung fixes the four written sections, the
// weighting 2:2:1:2, and the grade bands — but each university writes its own tasks
// and sets its own counts. So this module hard-scores what is SOURCED (weighting +
// bands) and is silent on counts (they live, un-enforced, in the structure file).
//
// VERIFIED (HRK RO-DT + Musterprüfungsordnung):
//   • Written weighting: HV 2 · LV 2 · WS 1 · TP 2 (sum 7). The ORAL is separate and
//     does NOT enter this total.
//   • Grade bands on the weighted %: DSH-1 57–66 (≈B2) · DSH-2 67–81 (≈C1) ·
//     DSH-3 82–100 (≈C2) · below 57 = nicht bestanden.
//   • A per-part minimum exists at SOME universities but is university-variable — it
//     is carried as a NOTE, never hard-coded into the national verdict.
//
// Distinct from TestDaF (per-section TDN), telc (%-per-part gate), DTZ (fixed /100
// A2/B1) and the Einbürgerungstest (count pass/fail).

import type {
  DshGrade,
  DshSectionResult,
  DshExamResult,
  GermanExam,
} from "@/lib/exams/types";
import { DSH_WRITTEN_WEIGHTS } from "@/lib/exams/types";

export const DSH_DSH1 = 57 as const;
export const DSH_DSH2 = 67 as const;
export const DSH_DSH3 = 82 as const;

const SECTION_LABEL: Record<string, string> = {
  HOERVERSTEHEN: "Hörverstehen",
  LESEVERSTEHEN: "Leseverstehen",
  WISS_STRUKTUREN: "Wissenschaftssprachliche Strukturen",
  TEXTPRODUKTION: "Textproduktion",
  SPRECHEN: "Mündliche Prüfung",
};

const PER_PART_NOTE =
  "Some universities also require a minimum in each part (often ~57%). That per-part rule is university-specific and is NOT applied here — confirm it with your target university.";

/** Band a 0–100 weighted percentage into a DSH grade. The one place the grade is set. */
export function percentToDshGrade(percent: number): DshGrade {
  const p = Math.min(100, Math.max(0, percent));
  if (p >= DSH_DSH3) return "DSH-3";
  if (p >= DSH_DSH2) return "DSH-2";
  if (p >= DSH_DSH1) return "DSH-1";
  return "nicht-bestanden";
}

export const DSH_GRADE_LABEL: Record<DshGrade, string> = {
  "DSH-3": "DSH-3",
  "DSH-2": "DSH-2",
  "DSH-1": "DSH-1",
  "nicht-bestanden": "nicht bestanden",
};

const DSH_CEFR_APPROX: Record<DshGrade, string> = {
  "DSH-3": "≈ C2",
  "DSH-2": "≈ C1",
  "DSH-1": "≈ B2",
  "nicht-bestanden": "unter B2",
};

/** Score one DSH section from a 0..1 fraction → a percent, carrying its weight.
 *  The oral (SPRECHEN) has weight 0 and does not count toward the grade. */
export function scoreDshSection(section: string, fraction: number): DshSectionResult {
  const percent = Math.round(Math.min(1, Math.max(0, fraction)) * 100);
  const weight = DSH_WRITTEN_WEIGHTS[section] ?? 0;
  return {
    section,
    label: SECTION_LABEL[section] ?? section,
    percent,
    weight,
    countsTowardGrade: weight > 0,
  };
}

/** Aggregate a full DSH mock: weight the four written sections 2:2:1:2 into one %,
 *  then band it. The oral is reported but excluded from the weighted total. */
export function aggregateDsh(
  exam: GermanExam,
  displayName: string,
  sections: DshSectionResult[],
): DshExamResult {
  const written = sections.filter((s) => s.weight > 0);
  const totalWeight = written.reduce((sum, s) => sum + s.weight, 0);
  const weightedPercent =
    totalWeight === 0
      ? 0
      : Math.round(written.reduce((sum, s) => sum + s.percent * s.weight, 0) / totalWeight);
  const grade = percentToDshGrade(weightedPercent);
  return {
    exam,
    displayName,
    sections,
    weightedPercent,
    grade,
    gradeLabel: DSH_GRADE_LABEL[grade],
    cefrApprox: DSH_CEFR_APPROX[grade],
    bands: { dsh1: DSH_DSH1, dsh2: DSH_DSH2, dsh3: DSH_DSH3 },
    perPartMinimumNote: PER_PART_NOTE,
    thresholdVerified: true, // bands + weighting sourced (counts are convention, elsewhere)
  };
}
