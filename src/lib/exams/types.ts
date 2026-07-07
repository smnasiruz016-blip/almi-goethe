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

export const EXAM_ESTIMATE_DISCLAIMER =
  "This is an AlmiGoethe practice estimate, not an official result. TestDaF, telc, and the TestDaF-Institut / g.a.s.t. calibrate the real exams. Confirm the level and result you need with the exam provider, your university, or the relevant German authority.";
