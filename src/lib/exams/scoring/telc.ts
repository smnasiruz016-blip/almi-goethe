// telc scoring — B1 (Zertifikat Deutsch), B2, and C1 Hochschule.
//
// All numbers verified in docs/AlmiGoethe_TestDaF_telc_Verified_Scoring_Specs.md
// (§2 C1H, §3 B1, §4 B2), each sourced from telc.net Handbücher / Übungstests.
//
// Shared telc facts:
//   • Pass mark = 60%. Model is PER-PART (each part gated independently at 60%).
//   • C1 Hochschule ADDITIONALLY requires ≥60% overall (verbatim Handbuch).
//   • B1 is per-part ONLY (founder-confirmed: written ≥60% AND oral ≥60%; the
//     booklet's "180" is just 135+45, the two minima summed — NOT the gate).
//   • All are MODULAR: a failed part can be retaken alone within the exam year.
//
// The engine is PERCENTAGE-FIRST (spec design note): per-section scoring needs no
// official subtest max. Official maxes/weights are attached ONLY where verified;
// where a section's individual weight is NOT verified, part aggregation falls back
// to an unweighted mean rather than fabricating a weight.

import type {
  GermanExam,
  Range,
  TelcExamResult,
  TelcPart,
  TelcPartResult,
  TelcSkillResult,
  Verdict,
} from "@/lib/exams/types";

const PASS_PERCENT = 60;
const BORDERLINE_BAND = 8; // within 8 points below the pass mark = "borderline"
const ESTIMATE_BAND_FRACTION = 0.08; // ±8% of a section's max for the points estimate

function clamp(n: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, n));
}

function verdictFromPercent(percent: number): Verdict {
  if (percent >= PASS_PERCENT) return "passed";
  if (percent >= PASS_PERCENT - BORDERLINE_BAND) return "borderline";
  return "not-yet";
}

// ---- Per-exam configuration (verified numbers only) ------------------------

type TelcSectionDef = {
  key: string;
  label: string;
  part: TelcPart;
  // Official subtest max IN POINTS, only where verbatim-verified. Drives the
  // per-section points estimate AND weighted part aggregation. null = not verified
  // individually (part aggregation falls back to an unweighted mean).
  maxPoints: number | null;
};

type TelcPartDef = {
  weightPercent: number; // this part's share of the overall result (verified)
  maxPoints: number | null; // official part max in points, where verified
  passPoints: number | null; // official 60% part pass mark in points, where verified
};

export type TelcExamConfig = {
  exam: GermanExam;
  displayName: string;
  sections: TelcSectionDef[];
  parts: Record<TelcPart, TelcPartDef>;
  requireOverallPass: boolean;
  thresholdVerified: boolean;
  passRuleNote: string;
};

// telc Deutsch C1 Hochschule — every subtest max verified from the Handbuch.
// Written = LV48 + SB22 + HV48 + SA48 = 166; Oral = 48; total = 214.
const C1_HOCHSCHULE: TelcExamConfig = {
  exam: "TELC_C1_HOCHSCHULE",
  displayName: "telc Deutsch C1 Hochschule",
  sections: [
    { key: "LESEVERSTEHEN", label: "Leseverstehen (Reading)", part: "written", maxPoints: 48 },
    { key: "SPRACHBAUSTEINE", label: "Sprachbausteine (Language elements)", part: "written", maxPoints: 22 },
    { key: "HOERVERSTEHEN", label: "Hörverstehen (Listening)", part: "written", maxPoints: 48 },
    { key: "SCHRIFTLICHER_AUSDRUCK", label: "Schriftlicher Ausdruck (Writing)", part: "written", maxPoints: 48 },
    { key: "MUENDLICHER_AUSDRUCK", label: "Mündlicher Ausdruck (Speaking)", part: "oral", maxPoints: 48 },
  ],
  parts: {
    written: { weightPercent: 78, maxPoints: 166, passPoints: 100 }, // 166/214 ≈ 77.6%; 60% of 166 ≈ 100
    oral: { weightPercent: 22, maxPoints: 48, passPoints: 29 }, // 48/214 ≈ 22.4%; 60% of 48 ≈ 29
  },
  requireOverallPass: true,
  thresholdVerified: true,
  passRuleNote:
    "Pass = at least 60% overall AND at least 60% in the written part (LV, SB, HV, SA) AND at least 60% in the oral part. Modular: a part below 60% may be retaken on its own within the following calendar year.",
};

// telc Deutsch B1 (= Zertifikat Deutsch). Verified: total 300, written 225 (75%),
// oral 75 (25%), Schriftlicher Ausdruck 45 (15%). Individual LV/SB/HV maxes are
// NOT verified → left null (written part aggregates as an unweighted mean).
const B1: TelcExamConfig = {
  exam: "TELC_B1",
  displayName: "telc Deutsch B1 (Zertifikat Deutsch)",
  sections: [
    { key: "LESEVERSTEHEN", label: "Leseverstehen (Reading)", part: "written", maxPoints: null },
    { key: "SPRACHBAUSTEINE", label: "Sprachbausteine (Language elements)", part: "written", maxPoints: null },
    { key: "HOERVERSTEHEN", label: "Hörverstehen (Listening)", part: "written", maxPoints: null },
    { key: "SCHRIFTLICHER_AUSDRUCK", label: "Schriftlicher Ausdruck (Writing)", part: "written", maxPoints: 45 },
    { key: "SPRECHEN", label: "Sprechen (Speaking)", part: "oral", maxPoints: 75 },
  ],
  parts: {
    written: { weightPercent: 75, maxPoints: 225, passPoints: 135 }, // 60% of 225
    oral: { weightPercent: 25, maxPoints: 75, passPoints: 45 }, // 60% of 75
  },
  requireOverallPass: false, // PER-PART only (founder-confirmed)
  thresholdVerified: true, // numbers verified; the "60% each part" wording is flagged in the spec note
  passRuleNote:
    "Pass = at least 60% of the written part (135/225) AND at least 60% of the oral part (45/75), scored independently. The booklet's grade boundary of 180 is simply 135+45 — it is NOT the gate. Modular: a failed part can be retaken.",
};

// telc Deutsch B2 — weights verified (LV25, SB10, HV25, SA15, Sprechen25 = 100%).
// Pass THRESHOLD not yet verbatim-quoted → thresholdVerified: false (UI must say so).
const B2: TelcExamConfig = {
  exam: "TELC_B2",
  displayName: "telc Deutsch B2",
  sections: [
    { key: "LESEVERSTEHEN", label: "Leseverstehen (Reading)", part: "written", maxPoints: 25 },
    { key: "SPRACHBAUSTEINE", label: "Sprachbausteine (Language elements)", part: "written", maxPoints: 10 },
    { key: "HOERVERSTEHEN", label: "Hörverstehen (Listening)", part: "written", maxPoints: 25 },
    { key: "SCHRIFTLICHER_AUSDRUCK", label: "Schriftlicher Ausdruck (Writing)", part: "written", maxPoints: 15 },
    { key: "SPRECHEN", label: "Sprechen (Speaking)", part: "oral", maxPoints: 25 },
  ],
  parts: {
    written: { weightPercent: 75, maxPoints: null, passPoints: null }, // LV+SB+HV+SA = 75% of the 100% scale
    oral: { weightPercent: 25, maxPoints: null, passPoints: null },
  },
  requireOverallPass: false,
  thresholdVerified: false, // ⚠️ exact pass threshold pending official confirmation — UI shows this
  passRuleNote:
    "Section weights are confirmed (LV 25%, SB 10%, HV 25%, SA 15%, Sprechen 25%). The exact pass threshold is pending official confirmation from the telc B2 Handbuch and is shown as unverified — telc's standard is 60% per part, but AlmiGoethe will not imply it as official until quoted.",
};

export const TELC_CONFIGS: Record<string, TelcExamConfig> = {
  TELC_B1: B1,
  TELC_B2: B2,
  TELC_C1_HOCHSCHULE: C1_HOCHSCHULE,
};

export function getTelcConfig(exam: GermanExam): TelcExamConfig {
  const cfg = TELC_CONFIGS[exam];
  if (!cfg) throw new Error(`No telc config for exam ${exam}`);
  return cfg;
}

// ---- Scoring ---------------------------------------------------------------

function estPoints(fraction: number, max: number): Range {
  const center = fraction * max;
  const band = Math.round(ESTIMATE_BAND_FRACTION * max);
  return [
    Math.round(clamp(center - band, 0, max)),
    Math.round(clamp(center + band, 0, max)),
  ];
}

/** Score one telc section from a 0..1 performance fraction. */
export function scoreTelcSection(
  exam: GermanExam,
  section: string,
  fraction: number,
): TelcSkillResult {
  const cfg = getTelcConfig(exam);
  const def = cfg.sections.find((s) => s.key === section);
  if (!def) throw new Error(`Section ${section} not in ${exam}`);
  const f = clamp(fraction, 0, 1);
  const percent = Math.round(f * 100);
  return {
    section: def.key,
    label: def.label,
    part: def.part,
    percent,
    pointsEst: def.maxPoints != null ? estPoints(f, def.maxPoints) : null,
    maxPoints: def.maxPoints,
    verdict: verdictFromPercent(percent),
  };
}

/** Aggregate a full telc mock from per-section fractions (0..1). Sections omitted
 *  from `fractions` are treated as not attempted and excluded from aggregation. */
export function scoreTelcExam(
  exam: GermanExam,
  fractions: Partial<Record<string, number>>,
): TelcExamResult {
  const cfg = getTelcConfig(exam);
  const skills: TelcSkillResult[] = cfg.sections
    .filter((s) => fractions[s.key] != null)
    .map((s) => scoreTelcSection(exam, s.key, fractions[s.key] as number));

  const parts: TelcPartResult[] = (["written", "oral"] as TelcPart[]).map((part) => {
    const partSkills = skills.filter((s) => s.part === part);
    const partDef = cfg.parts[part];
    let percent = 0;
    if (partSkills.length > 0) {
      const allWeighted = partSkills.every((s) => s.maxPoints != null);
      if (allWeighted) {
        // Weighted by official subtest max within the part.
        const totMax = partSkills.reduce((a, s) => a + (s.maxPoints as number), 0);
        percent = Math.round(
          partSkills.reduce((a, s) => a + s.percent * (s.maxPoints as number), 0) / totMax,
        );
      } else {
        // Not all subtest maxes verified → honest unweighted mean.
        percent = Math.round(partSkills.reduce((a, s) => a + s.percent, 0) / partSkills.length);
      }
    }
    return {
      part,
      percent,
      passPercent: PASS_PERCENT,
      passPoints: partDef.passPoints,
      maxPoints: partDef.maxPoints,
      verdict: verdictFromPercent(percent),
    };
  });

  const attemptedParts = parts.filter((p) => skills.some((s) => s.part === p.part));
  const totWeight = attemptedParts.reduce((a, p) => a + cfg.parts[p.part].weightPercent, 0);
  const overallPercent =
    totWeight > 0
      ? Math.round(
          attemptedParts.reduce((a, p) => a + p.percent * cfg.parts[p.part].weightPercent, 0) /
            totWeight,
        )
      : 0;

  // Pass = every attempted part ≥60%, plus (C1H) overall ≥60%.
  const allPartsPass = attemptedParts.length > 0 && attemptedParts.every((p) => p.verdict === "passed");
  const anyBorderline = attemptedParts.some((p) => p.verdict === "borderline");
  let overallVerdict: Verdict;
  const overallGateOk = !cfg.requireOverallPass || overallPercent >= PASS_PERCENT;
  if (allPartsPass && overallGateOk) overallVerdict = "passed";
  else if ((allPartsPass || anyBorderline) && (overallPercent >= PASS_PERCENT - BORDERLINE_BAND))
    overallVerdict = "borderline";
  else overallVerdict = "not-yet";

  return {
    exam,
    displayName: cfg.displayName,
    skills,
    parts,
    overallPercent,
    requireOverallPass: cfg.requireOverallPass,
    overallVerdict,
    passPercent: PASS_PERCENT,
    modular: true,
    thresholdVerified: cfg.thresholdVerified,
    passRuleNote: cfg.passRuleNote,
  };
}

export const TELC_VERDICT_LABEL: Record<Verdict, string> = {
  passed: "On track to pass (≥60%)",
  borderline: "Borderline — close to the 60% pass mark",
  "not-yet": "Not yet at the 60% pass mark",
};
