// RED-FIRST PROOF for the answer-distribution gate.
//
// Run: npm run gate:answer-distribution:proof
//
// ── WHY A PERMANENT TEST ────────────────────────────────────────────────────
// This gate exists because two real defects shipped: the all-"a" Sprachbausteine
// key and the r-f-r-f-r Hörverstehen rhythm. A gate that has never been seen red
// is not known to be able to go red at all. This file drives the pure checker
// with fixtures that REPRODUCE both original defects, and asserts the gate fires —
// and, just as important, that it does NOT fire on healthy keys, because a false
// positive is how a gate gets switched off.
//
// It asserts both the MULTI mode (position distribution) and the BINARY mode
// (balance + uniform + rhythm), because the whole point of this gate is that one
// mode cannot stand in for the other.

import { checkDistribution, type DistItem, type DistViolation } from "./answer-distribution-gate.mjs";

let failures = 0;

function mc(title: string, answers: string[], opts = ["a", "b", "c"]): DistItem {
  return {
    exam: "FIX",
    section: "SEC",
    taskType: "FIX_MC",
    title,
    payload: {
      questions: answers.map((a, i) => ({ id: `q${i}`, answer: a, options: opts.map((o) => ({ id: o })) })),
    },
  };
}
function rf(title: string, answers: string[]): DistItem {
  return {
    exam: "FIX",
    section: "SEC",
    taskType: "FIX_RF",
    title,
    payload: {
      questions: answers.map((a, i) => ({ id: `q${i}`, answer: a, options: [{ id: "r" }, { id: "f" }] })),
    },
  };
}
function gapfill(title: string, answers: string[]): DistItem {
  // Free-text gap-fill: answers are words, questions carry NO options.
  return {
    exam: "FIX",
    section: "SEC",
    taskType: "FIX_GAP",
    title,
    payload: { questions: answers.map((w, i) => ({ id: `q${i}`, answer: w })) },
  };
}

function expect(
  label: string,
  items: DistItem[],
  shouldFire: boolean,
  wantKind?: DistViolation["kind"],
) {
  const { violations } = checkDistribution(items);
  const fired = violations.length > 0;
  const kindOk = !wantKind || violations.some((v) => v.kind === wantKind);
  const ok = fired === shouldFire && kindOk;
  if (!ok) {
    failures++;
    console.error(`  ✗ ${label}`);
    console.error(
      `      expected ${shouldFire ? "a violation" : "no violation"}${wantKind ? ` of kind ${wantKind}` : ""}, ` +
        `got ${violations.length}: ${violations.map((v) => `${v.kind}(${v.title})`).join(", ") || "none"}`,
    );
  } else {
    console.log(`  ✓ ${label}`);
  }
}

console.log("\nANSWER-DISTRIBUTION GATE — RED-FIRST PROOF\n");

// ── POSITIVES: the two original defects, reproduced ──
// The all-"a" Sprachbausteine key: three MC items, every gap answered "a".
expect(
  "MULTI: all-\"a\" key (the Sprachbausteine defect)",
  [mc("brief-1", ["a", "a", "a", "a", "a"]), mc("brief-2", ["a", "a", "a", "a", "a"]), mc("brief-3", ["a", "a", "a", "a", "a"])],
  true,
);
// It must trip BOTH the within-item uniform run AND the scope-level clustering /
// dead-option — prove the scope check specifically.
expect("MULTI: all-\"a\" trips scope clustering", [mc("b1", ["a", "a", "a", "a", "a"]), mc("b2", ["a", "a", "a", "a", "a"])], true, "clustered");
expect("MULTI: all-\"a\" trips dead-option (b, c never correct)", [mc("b1", ["a", "a", "a"]), mc("b2", ["a", "a", "a"])], true, "dead-option");

// The r-f-r-f-r Hörverstehen rhythm: a single binary item alternating straight down.
expect("BINARY: r-f-r-f-r rhythm (the Hörverstehen defect)", [rf("teil3-1", ["r", "f", "r", "f", "r"])], true, "alternating-rhythm");
expect("BINARY: uniform run (all richtig)", [rf("u1", ["r", "r", "r", "r", "r"])], true, "uniform-run");
// A binary Aufgabe skewed overall, even if no single item is uniform.
// 12 richtig / 3 falsch = 80%, past the 75% threshold; no item is uniform or
// alternating, so the ONLY thing that can fire is the scope-level skew.
expect(
  "BINARY: scope skewed past balance threshold",
  [rf("s1", ["r", "r", "f", "r", "r"]), rf("s2", ["r", "r", "r", "f", "r"]), rf("s3", ["r", "f", "r", "r", "r"])],
  true,
  "binary-skew",
);
// A fixed 3-option MC where the third option is never keyed — the dead-option case
// found live in telc B1 Leseverstehen Teil 2.
expect(
  "MULTI: a fixed option never correct (dead option)",
  [mc("m1", ["a", "b", "a", "b", "a"]), mc("m2", ["b", "a", "b", "a", "b"])],
  true,
  "dead-option",
);

// ── NEGATIVES: healthy keys must NOT fire ──
// A balanced 3-option MC: every option used, none clustered, no uniform item.
expect(
  "MULTI negative: balanced a/b/c key",
  [mc("h1", ["a", "b", "c", "b", "a"]), mc("h2", ["c", "a", "b", "c", "b"]), mc("h3", ["b", "c", "a", "a", "c"])],
  false,
);
// A healthy binary Aufgabe: balanced, no uniform item, no alternating item.
expect(
  "BINARY negative: balanced, no rhythm",
  [rf("h1", ["r", "f", "f", "r", "r"]), rf("h2", ["f", "r", "r", "f", "r"]), rf("h3", ["r", "r", "f", "r", "f"])],
  false,
);
// A matching task: 8 options, 5 answers per item — options 'f','g','h' are unused
// BY DESIGN. Must NOT fire dead-option, because more options than answers is the task.
expect(
  "MATCHING negative: unused options are not dead (by design)",
  [
    { exam: "FIX", section: "SEC", taskType: "FIX_MATCH", title: "match-1", payload: { questions: ["a", "c", "e", "b", "d"].map((a, i) => ({ id: `q${i}`, answer: a, options: "abcdefgh".split("").map((o) => ({ id: o })) })) } },
    { exam: "FIX", section: "SEC", taskType: "FIX_MATCH", title: "match-2", payload: { questions: ["b", "d", "a", "e", "c"].map((a, i) => ({ id: `q${i}`, answer: a, options: "abcdefgh".split("").map((o) => ({ id: o })) })) } },
  ],
  false,
);
// Free-text gap-fill: no options, no position — must be skipped, never flagged even
// though the "answers" (words) are all distinct or all same.
expect("GAP-FILL negative: free-text answers are skipped", [gapfill("g1", ["Haus", "Haus", "Haus", "Haus"])], false);
// A tiny scope (below MIN_SCOPE_Q) with a lean but no within-item defect: not judged.
expect("small-scope negative: too few to judge distribution", [mc("t1", ["a", "a", "b"])], false);

console.log("");
if (failures > 0) {
  console.error(`✗ answer-distribution gate proof FAILED — ${failures} case(s) wrong.`);
  console.error("  The gate no longer behaves as documented. Fix the gate, not this test.\n");
  process.exit(1);
}
console.log("✓ answer-distribution gate proof: catches all-\"a\", r-f-r-f-r, dead options and skew; ignores healthy and matching keys.\n");
