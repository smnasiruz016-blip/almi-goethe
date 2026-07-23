// RED-FIRST PROOF for the format-conformance gate.
//
// Run: npm run gate:format:proof
//
// The checker was already seen red against the REAL bank — all 80 telc B2 items
// failed against the sourced B2 envelope on first run. That is the strongest kind of
// red, but it is temporary: once B2 is restructured it goes green and the failure
// shapes disappear with it. Fixtures keep every shape available permanently.

import { checkFormats, observedFormat, type FmtItem } from "./format-conformance.mjs";
import type { SectionStructure } from "../../src/lib/exams/exam-structure";

const S: Record<string, SectionStructure> = {
  HOERVERSTEHEN: {
    section: "HOERVERSTEHEN", totalItems: 5, minutes: null, sourced: true,
    aufgaben: [{ key: "HV_T1", label: "Teil 1", items: 5, sourced: true, answerFormat: "RICHTIG_FALSCH" }],
  },
  LESEVERSTEHEN: {
    section: "LESEVERSTEHEN", totalItems: 5, minutes: null, sourced: true,
    aufgaben: [
      { key: "LV_T1", label: "Teil 1", items: 5, sourced: true, answerFormat: "ZUORDNUNG", bankSize: 10 },
      { key: "LV_T2", label: "Teil 2", items: 5, sourced: true, answerFormat: "MC-3" },
      // Format NOT sourced — the checker must skip it rather than guess.
      { key: "LV_T9", label: "Teil 9", items: null, sourced: false },
    ],
  },
};

const mc = (n: number) => ({ options: Array.from({ length: n }, (_, i) => ({ id: "abcd"[i], text: `opt${i}` })), answer: "a", id: "q1" });
const rf = () => ({ options: [{ id: "a", text: "richtig" }, { id: "b", text: "falsch" }], answer: "a", id: "q1" });

const item = (taskType: string, payload: any, title = taskType): FmtItem => ({ exam: "TELC_B2", taskType, title, payload });

let failures = 0;
function expect(label: string, items: FmtItem[], shouldFire: boolean, wantKind?: string) {
  const { violations } = checkFormats(items, S);
  const fired = violations.length > 0;
  const kindOk = !wantKind || violations.some((v) => v.kind === wantKind);
  if (fired === shouldFire && kindOk) console.log(`  ✓ ${label}`);
  else {
    failures++;
    console.error(`  ✗ ${label}\n      expected ${shouldFire ? wantKind ?? "a violation" : "no violation"}, got: ${violations.map((v) => v.kind).join(", ") || "none"}`);
  }
}

console.log("\nFORMAT-CONFORMANCE GATE — RED-FIRST PROOF\n");

// THE ONE THIS GATE EXISTS FOR: the real telc B2 defect — a richtig/falsch Teil
// authored as MC-3. Every other gate passed on these for months.
expect("refuses an MC-3 item in a richtig/falsch Teil", [item("HV_T1", { questions: [mc(3)] })], true, "wrong-format");
expect("refuses an MC-4 item in an MC-3 Teil", [item("LV_T2", { questions: [mc(4)] })], true, "wrong-format");
// Zuordnung cannot be expressed as per-question option arrays.
expect("refuses a Zuordnung authored as per-question options", [item("LV_T1", { questions: [mc(3)] })], true, "no-bank");
expect("refuses a Zuordnung whose bank is the wrong size", [item("LV_T1", { bank: [{ id: "a" }, { id: "b" }], questions: [{ id: "q1", answer: "a" }] })], true, "bank-size");
expect(
  "refuses a Zuordnung question keyed outside its bank",
  [item("LV_T1", { bank: Array.from({ length: 10 }, (_, i) => ({ id: "abcdefghij"[i] })), questions: [{ id: "q1", answer: "z" }] })],
  true,
  "bad-assignment",
);
expect("refuses a taskType that is not an Aufgabe of the structure", [item("NOT_A_TEIL", { questions: [mc(3)] })], true, "unknown-aufgabe");

// ── NEGATIVES ──
expect("accepts richtig/falsch in a richtig/falsch Teil", [item("HV_T1", { questions: [rf(), rf()] })], false);
expect("accepts MC-3 in an MC-3 Teil", [item("LV_T2", { questions: [mc(3), mc(3)] })], false);
expect(
  "accepts a well-formed Zuordnung",
  [item("LV_T1", { bank: Array.from({ length: 10 }, (_, i) => ({ id: "abcdefghij"[i] })), questions: [{ id: "q1", answer: "c" }] })],
  false,
);
// A Teil whose format is NOT sourced must be skipped, never guessed at.
expect("skips an Aufgabe with no sourced answerFormat", [item("LV_T9", { questions: [mc(4)] })], false);

// observedFormat itself
const obs: [string, any, string][] = [
  ["MC-3", { questions: [mc(3)] }, "MC-3"],
  ["MC-4", { questions: [mc(4)] }, "MC-4"],
  ["richtig/falsch", { questions: [rf()] }, "RICHTIG_FALSCH"],
  ["productive (no questions)", { questions: [] }, "PRODUCTIVE"],
];
for (const [label, payload, want] of obs) {
  const got = observedFormat(payload);
  if (got === want) console.log(`  ✓ observedFormat reads ${label}`);
  else { failures++; console.error(`  ✗ observedFormat read ${label} as ${got}, expected ${want}`); }
}

console.log("");
if (failures > 0) {
  console.error(`✗ format-conformance proof FAILED — ${failures} case(s) wrong.\n`);
  process.exit(1);
}
console.log("✓ format-conformance proof: catches wrong formats and malformed Zuordnungen; skips unsourced Teile.\n");
