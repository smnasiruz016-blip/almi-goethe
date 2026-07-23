// RED-FIRST PROOF for the civic-sourcing gate.
//
// Run: npm run gate:civic-sourcing:proof
//
// The live civic bank does not exist yet (Einbürgerungstest is batch 2), so this
// gate can only be proven against fixtures — which is the point of a RED-first
// proof: it must be shown to go red on the day it is written, not the day the
// first civic item ships, by which time nobody would know it could.
//
// It drives the pure checker with a fixture fact-base of two cited facts and
// exercises each failure mode independently, plus the negatives that must NOT
// fire — including a non-civic item (an ordinary Hörverstehen announcement) the
// gate must ignore entirely.

import { checkCivicSourcing, type CivicItem, type CivicViolation } from "./civic-sourcing-gate.mjs";
import type { CivicFact } from "../../src/lib/exams/civic-factbase";

const FACTS: Record<string, CivicFact> = {
  A_001: {
    factId: "A_001",
    statement: "Die Würde des Menschen ist im Grundgesetz an erster Stelle geschützt.",
    answer: "Artikel 1",
    citation: "Grundgesetz für die Bundesrepublik Deutschland, Art. 1 Abs. 1",
    domain: "A_GRUNDGESETZ",
  },
  C_004: {
    factId: "C_004",
    statement: "Die Abgeordneten des Bundestages werden für vier Jahre gewählt.",
    answer: "vier Jahre",
    citation: "Grundgesetz, Art. 39 Abs. 1",
    domain: "C_INSTITUTIONEN",
  },
  // A fact deliberately missing its citation, to prove the no-citation check.
  D_009: {
    factId: "D_009",
    statement: "In Deutschland herrscht Religionsfreiheit.",
    answer: "richtig",
    citation: "",
    domain: "D_GESELLSCHAFT",
  },
};

const civic = (title: string, factId: any, answer?: string): CivicItem => ({
  exam: "EINBUERGERUNGSTEST",
  section: "CIVIC",
  title,
  payload: { factId, answer, questions: [{ id: "q1", answer, options: [{ id: "a" }] }] },
});

let failures = 0;
function expect(label: string, items: CivicItem[], shouldFire: boolean, wantKind?: CivicViolation["kind"]) {
  const { violations } = checkCivicSourcing(items, FACTS);
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

console.log("\nCIVIC-SOURCING GATE — RED-FIRST PROOF\n");

// ── POSITIVES ──
// The core case the founder named: a civic claim that maps to no fact-base entry.
expect("refuses a civic item whose factId maps to no entry", [civic("Frage: Erfundene Behauptung", "X_999", "vier Jahre")], true, "unknown-factId");
// A civic item that carries no factId at all — a free-authored civic claim.
expect("refuses a civic item with no factId", [civic("Frage: Ohne Quelle", undefined, "richtig")], true, "no-factId");
// A cited fact exists, but the item's keyed answer disagrees with it (key ↔ world).
expect("refuses when the keyed answer disagrees with the sourced answer", [civic("Frage: Wahlperiode", "C_004", "fünf Jahre")], true, "answer-mismatch");
// The fact exists and is referenced correctly, but the fact-base entry has no citation.
expect("refuses a fact with no citation", [civic("Frage: Religionsfreiheit", "D_009", "richtig")], true, "no-citation");

// ── NEGATIVES ──
// A civic item that references a real, cited fact with the matching answer: clean.
expect("accepts a civic item sourced to a cited fact with the right answer", [civic("Frage: Menschenwürde", "A_001", "Artikel 1")], false);
// A NON-civic item (ordinary Hörverstehen) must be ignored entirely, even with no factId.
expect(
  "ignores a non-civic item (Hörverstehen announcement)",
  [{ exam: "TELC_B1", section: "HOERVERSTEHEN", title: "Durchsage", payload: { questions: [{ id: "q1", answer: "r", options: [{ id: "r" }, { id: "f" }] }] } }],
  false,
);

console.log("");
if (failures > 0) {
  console.error(`✗ civic-sourcing gate proof FAILED — ${failures} case(s) wrong.`);
  console.error("  The gate no longer behaves as documented. Fix the gate, not this test.\n");
  process.exit(1);
}
console.log("✓ civic-sourcing gate proof: refuses unsourced/miskeyed/uncited civic claims; ignores non-civic items.\n");
