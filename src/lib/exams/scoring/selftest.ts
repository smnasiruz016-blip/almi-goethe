// Self-test for the new-engine scoring — asserts the VERIFIED tables and the
// product doctrines (TestDaF has no total/no pass-fail; telc per-part 60% gates;
// B2 threshold flagged unverified). Run with: npx tsx src/lib/exams/scoring/selftest.ts
//
// This is a guardrail against silent drift away from the sourced numbers in
// docs/AlmiGoethe_TestDaF_telc_Verified_Scoring_Specs.md — not a Jest suite.

import { fractionToTestDafSection, pointsToTdn } from "./testdaf";
import { getTelcConfig, scoreTelcExam, scoreTelcSection } from "./telc";

let failures = 0;
function check(name: string, cond: boolean) {
  if (!cond) {
    failures++;
    console.error(`  ✗ ${name}`);
  } else {
    console.log(`  ✓ ${name}`);
  }
}

console.log("TestDaF — verified TDN table (16–20→5, 10–15→4, 5–9→3, 0–4→under):");
check("20 → TDN 5", pointsToTdn(20) === "5");
check("16 → TDN 5", pointsToTdn(16) === "5");
check("15 → TDN 4", pointsToTdn(15) === "4");
check("10 → TDN 4", pointsToTdn(10) === "4");
check("9 → TDN 3", pointsToTdn(9) === "3");
check("5 → TDN 3", pointsToTdn(5) === "3");
check("4 → unter TDN 3", pointsToTdn(4) === "under");
check("0 → unter TDN 3", pointsToTdn(0) === "under");

const perfectSection = fractionToTestDafSection("LESEVERSTEHEN", 1);
const weakSection = fractionToTestDafSection("HOERVERSTEHEN", 0.1);
check("TestDaF section max is 20", perfectSection.maxPoints === 20);
check("TestDaF 100% → TDN 5", perfectSection.tdn === "5");
check("TestDaF 10% → unter TDN 3 shown honestly", weakSection.tdnLabel === "unter TDN 3");
check("TestDaF CEFR band is B2–C1", perfectSection.cefr === "B2–C1");
// Doctrine: the module exports no summation. (Compile-time guarantee; assert intent.)
check(
  "TestDaF exposes no total helper",
  typeof (fractionToTestDafSection as unknown as Record<string, unknown>).total === "undefined",
);

console.log("\ntelc C1 Hochschule — verified subtest maxes (LV48 SB22 HV48 SA48 | oral48):");
const c1 = getTelcConfig("TELC_C1_HOCHSCHULE");
const c1Max = Object.fromEntries(c1.sections.map((s) => [s.key, s.maxPoints]));
check("LV = 48", c1Max.LESEVERSTEHEN === 48);
check("SB = 22", c1Max.SPRACHBAUSTEINE === 22);
check("HV = 48", c1Max.HOERVERSTEHEN === 48);
check("SA = 48", c1Max.SCHRIFTLICHER_AUSDRUCK === 48);
check("oral = 48", c1Max.MUENDLICHER_AUSDRUCK === 48);
check("C1H requires overall pass", c1.requireOverallPass === true);
check("C1H threshold verified", c1.thresholdVerified === true);
// Overall gate: strong written but failing oral must NOT pass (per-part gate).
const c1Mixed = scoreTelcExam("TELC_C1_HOCHSCHULE", {
  LESEVERSTEHEN: 0.9, SPRACHBAUSTEINE: 0.9, HOERVERSTEHEN: 0.9, SCHRIFTLICHER_AUSDRUCK: 0.9,
  MUENDLICHER_AUSDRUCK: 0.2,
});
check("C1H strong-written/weak-oral does NOT pass", c1Mixed.overallVerdict !== "passed");
const c1Pass = scoreTelcExam("TELC_C1_HOCHSCHULE", {
  LESEVERSTEHEN: 0.8, SPRACHBAUSTEINE: 0.8, HOERVERSTEHEN: 0.8, SCHRIFTLICHER_AUSDRUCK: 0.8,
  MUENDLICHER_AUSDRUCK: 0.8,
});
check("C1H uniformly-80% passes", c1Pass.overallVerdict === "passed");

console.log("\ntelc B1 — verified 300/225(75%)/75(25%), SA=45, per-part gate 135/45:");
const b1 = getTelcConfig("TELC_B1");
check("B1 written part max = 225", b1.parts.written.maxPoints === 225);
check("B1 written pass = 135", b1.parts.written.passPoints === 135);
check("B1 oral part max = 75", b1.parts.oral.maxPoints === 75);
check("B1 oral pass = 45", b1.parts.oral.passPoints === 45);
check("B1 SA verified at 45", b1.sections.find((s) => s.key === "SCHRIFTLICHER_AUSDRUCK")?.maxPoints === 45);
check("B1 is per-part only (no overall gate)", b1.requireOverallPass === false);
// Per-part gate: passing written but failing oral must NOT pass overall.
const b1Split = scoreTelcExam("TELC_B1", {
  LESEVERSTEHEN: 0.8, SPRACHBAUSTEINE: 0.8, HOERVERSTEHEN: 0.8, SCHRIFTLICHER_AUSDRUCK: 0.8,
  SPRECHEN: 0.3,
});
check("B1 pass-written/fail-oral does NOT pass", b1Split.overallVerdict !== "passed");
const b1Sec = scoreTelcSection("TELC_B1", "SCHRIFTLICHER_AUSDRUCK", 0.7);
check("B1 SA section yields a points estimate (max verified)", b1Sec.pointsEst !== null);
const b1Lv = scoreTelcSection("TELC_B1", "LESEVERSTEHEN", 0.7);
check("B1 LV section has NO fabricated points estimate (max not verified)", b1Lv.pointsEst === null);

console.log("\ntelc B2 — verified weights (LV25 SB10 HV25 SA15 Sprechen25); threshold UNVERIFIED:");
const b2 = getTelcConfig("TELC_B2");
const b2w = Object.fromEntries(b2.sections.map((s) => [s.key, s.maxPoints]));
check("B2 LV weight 25", b2w.LESEVERSTEHEN === 25);
check("B2 SB weight 10", b2w.SPRACHBAUSTEINE === 10);
check("B2 HV weight 25", b2w.HOERVERSTEHEN === 25);
check("B2 SA weight 15", b2w.SCHRIFTLICHER_AUSDRUCK === 15);
check("B2 Sprechen weight 25", b2w.SPRECHEN === 25);
check(
  "B2 weights sum to 100",
  Object.values(b2w).reduce<number>((a, b) => a + (b ?? 0), 0) === 100,
);
check("B2 threshold is UNVERIFIED (verified:false honesty)", b2.thresholdVerified === false);

console.log(`\n${failures === 0 ? "ALL PASS ✅" : `${failures} FAILED ❌`}`);
if (failures > 0) process.exit(1);
