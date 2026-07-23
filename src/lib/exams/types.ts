// Shared domain primitives for the NEW German-exam engines (TestDaF + telc B1/B2/
// C1 Hochschule). These live ALONGSIDE the untouched Goethe-Zertifikat engine
// (src/lib/goethe/*) and never blend scoring with it.
//
// Every number these engines use is sourced in
// docs/AlmiGoethe_TestDaF_telc_Verified_Scoring_Specs.md. Where an official number
// is not yet verbatim-quotable, the engine ships `thresholdVerified: false` so the
// UI can say so honestly — it NEVER silently implies a threshold it hasn't confirmed.

import type { GermanExam } from "@prisma/client";

export type { GermanExam } from "@prisma/client";

// A practice points range, e.g. [12, 16]. Reused shape from the Goethe engine's
// primitive vocabulary (a range, not a fabricated single number).
export type Range = readonly [number, number];

// A pass-style verdict for the telc engines (which DO have a pass mark).
// TestDaF deliberately has NO verdict of this kind — see the TDN types below.
export type Verdict = "passed" | "borderline" | "not-yet";

// ---------------------------------------------------------------------------
// TestDaF — the network's FIFTH scoring philosophy.
// Each section is graded independently on a uniform 0–20 scale and mapped to a
// TestDaF-Niveaustufe (TDN). There is NO aggregate score and NO pass/fail — not
// here, not anywhere in the UI. "unter TDN 3" is shown honestly.
// ---------------------------------------------------------------------------

// The four TestDaF sections (independent — never summed).
export const TESTDAF_SECTIONS = [
  "LESEVERSTEHEN",
  "HOERVERSTEHEN",
  "SCHRIFTLICHER_AUSDRUCK",
  "MUENDLICHER_AUSDRUCK",
] as const;
export type TestDafSection = (typeof TESTDAF_SECTIONS)[number];

// "under" = unter TDN 3 (0–4 points). Never rendered as a failure.
export type Tdn = "5" | "4" | "3" | "under";

export type TestDafSectionResult = {
  section: TestDafSection;
  pointsEst: Range; // 0–20 practice estimate range
  centerPoints: number; // the point the TDN is read from
  maxPoints: 20;
  tdn: Tdn;
  tdnLabel: string; // "TDN 5" | "TDN 4" | "TDN 3" | "unter TDN 3"
  cefr: string; // "B2–C1" band (TestDaF publishes no finer public mapping we quote)
};

// ---------------------------------------------------------------------------
// telc — B1, B2, C1 Hochschule. These DO have a pass mark (60%). The pass MODEL is
// per-part (each part gated independently at 60%); C1 Hochschule additionally
// requires ≥60% overall. All are MODULAR (a failed part can be retaken alone).
// ---------------------------------------------------------------------------

export type TelcPart = "written" | "oral";

export type TelcSkillResult = {
  section: string; // engine section vocabulary
  label: string;
  part: TelcPart;
  percent: number; // 0..100 for the attempted item(s)
  pointsEst: Range | null; // only where the official subtest max is VERIFIED (else null)
  maxPoints: number | null; // official subtest max, or null if not individually verified
  verdict: Verdict; // vs the 60% pass mark
};

export type TelcPartResult = {
  part: TelcPart;
  percent: number;
  passPercent: number; // 60
  passPoints: number | null; // official part pass mark in points, where verified (B1: 135 / 45)
  maxPoints: number | null; // official part max, where verified (B1: 225 / 75)
  verdict: Verdict;
};

export type TelcExamResult = {
  exam: GermanExam;
  displayName: string;
  skills: TelcSkillResult[];
  parts: TelcPartResult[];
  overallPercent: number;
  requireOverallPass: boolean; // C1 Hochschule true; B1 false (per-part only)
  overallVerdict: Verdict; // pass = each required gate met
  passPercent: number; // 60
  modular: true;
  thresholdVerified: boolean; // false = UI must show "pass threshold pending official confirmation"
  passRuleNote: string;
};

// ---------------------------------------------------------------------------
// DTZ — Deutsch-Test für Zuwanderer. The engines' THIRD philosophy (after
// TestDaF's TDN and telc's %-per-part): a single FIXED TOTAL out of 100, summed
// from four sections (Hören 25 · Lesen 25 · Schreiben 20 · Sprechen 30), then
// banded into a DUAL OUTCOME — the one exam that returns A2 OR B1 from the same
// paper. There are NO per-section minimums; only the aggregate is banded.
//
// VERIFIED (official DTZ Prüfungshandbuch, goethe.de): ≥60 → B1 · 33–59 → A2 ·
// <33 → nicht bestanden. Written 100 min + oral 15 min.
// ---------------------------------------------------------------------------

export const DTZ_SECTIONS = [
  "HOERVERSTEHEN",
  "LESEVERSTEHEN",
  "SCHRIFTLICHER_AUSDRUCK",
  "SPRECHEN",
] as const;
export type DtzSection = (typeof DTZ_SECTIONS)[number];

// Each section's share of the fixed 100-point total (sourced).
export const DTZ_SECTION_MAX: Record<DtzSection, number> = {
  HOERVERSTEHEN: 25,
  LESEVERSTEHEN: 25,
  SCHRIFTLICHER_AUSDRUCK: 20,
  SPRECHEN: 30,
};

// The dual outcome. "nicht-bestanden" is shown honestly — below A2, the exam is
// not passed at either level.
export type DtzBand = "B1" | "A2" | "nicht-bestanden";

export type DtzSectionResult = {
  section: DtzSection;
  label: string;
  pointsEst: Range; // practice estimate of points earned toward the 100 total
  centerPoints: number; // the point value used, on this section's own scale
  sectionMax: number; // 25 / 25 / 20 / 30
  examMax: 100; // this section's max is a slice of the fixed 100
  percentOfSection: number; // 0..100 within the section (for display only)
};

export type DtzExamResult = {
  exam: GermanExam;
  displayName: string;
  sections: DtzSectionResult[];
  totalPoints: number; // sum of section centerPoints, 0..100
  maxPoints: 100;
  band: DtzBand;
  bandLabel: string; // "B1" | "A2" | "nicht bestanden (unter A2)"
  b1Threshold: 60;
  a2Threshold: 33;
  noSectionMinimums: true; // the aggregate is banded; sections have no gate
  thresholdVerified: boolean; // true — sourced from the DTZ Prüfungshandbuch
};

// ---------------------------------------------------------------------------
// EINBÜRGERUNGSTEST — the engines' FOURTH philosophy, and the first CIVIC one.
// Not a language test: 33 four-option MCQs about Germany (Grundgesetz, history,
// institutions, society). COUNT-BASED pass/fail — 17 or more correct out of 33 is
// "bestanden". No CEFR level, no percentage band, no per-section gate: the verdict
// is a simple threshold on the count.
//
// VERIFIED (official Einbürgerungstest / BAMF): 33 questions (30 general from the
// federal catalog + 3 Bundesland-specific), 60 minutes, pass ≥ 17.
// ---------------------------------------------------------------------------

export const EINB_QUESTION_COUNT = 33 as const;
export const EINB_PASS_MARK = 17 as const;

export type EinbVerdict = "bestanden" | "nicht-bestanden";

// One practised domain (Grundgesetz / Geschichte / Institutionen / Gesellschaft).
// A single practice attempt reports correct-of-attempted; the pass verdict lives on
// the full 33-question mock, not on one domain.
export type EinbSectionResult = {
  section: string;
  label: string;
  correct: number;
  total: number;
  passMark: number; // 17, shown as context (the full test's threshold)
  questionCount: number; // 33, the full test
};

export type EinbExamResult = {
  exam: GermanExam;
  displayName: string;
  correct: number; // 0..33
  questionCount: 33;
  passMark: 17;
  verdict: EinbVerdict;
  verdictLabel: string; // "bestanden" | "nicht bestanden"
  thresholdVerified: boolean; // true — 17/33 is the official pass mark
};

export const EXAM_ESTIMATE_DISCLAIMER =
  "This is an AlmiGoethe practice estimate, not an official result. TestDaF, telc, and the TestDaF-Institut / g.a.s.t. calibrate the real exams. Confirm the level and result you need with the exam provider, your university, or the relevant German authority.";
