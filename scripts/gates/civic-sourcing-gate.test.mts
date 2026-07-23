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

// ── DOMAIN E FIXTURES ───────────────────────────────────────────────────────
// Deliberately a two-state fixture map, NOT the live BUNDESLAND_FACTS. A proof
// driven by the real data proves the data, not the checker: if a future edit broke
// the cross-state check AND removed the offending fact, a live-data proof would go
// green on both counts. Fixtures keep the failing shape available forever.
const STATE_FACTS: Record<string, CivicFact[]> = {
  BE: [
    { factId: "BE_CAP", statement: "Berlin ist ein Stadtstaat; die Landeshauptstadt ist Berlin selbst.", answer: "Berlin", citation: "bpb.de; berlin.de", domain: "E_BUNDESLAND", bundesland: "BE" },
    { factId: "BE_PARL", statement: "Das Landesparlament von Berlin heißt Abgeordnetenhaus von Berlin.", answer: "das Abgeordnetenhaus von Berlin", citation: "bayern.landtag.de", domain: "E_BUNDESLAND", bundesland: "BE" },
  ],
  BY: [
    { factId: "BY_CAP", statement: "Die Landeshauptstadt von Bayern ist München.", answer: "München", citation: "bpb.de", domain: "E_BUNDESLAND", bundesland: "BY" },
    // Uncited on purpose, to prove no-citation still fires on the Domain-E path.
    { factId: "BY_PARL", statement: "Das Landesparlament von Bayern heißt Bayerischer Landtag.", answer: "der Bayerische Landtag", citation: "", domain: "E_BUNDESLAND", bundesland: "BY" },
  ],
};

const state = (title: string, bundesland: any, factId: any, answer?: string): CivicItem => ({
  exam: "EINBUERGERUNGSTEST",
  section: "BUNDESLAND",
  title,
  payload: { factId, bundesland, answer, questions: [{ id: "q1", answer, options: [{ id: "a" }] }] },
});

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
  const { violations } = checkCivicSourcing(items, FACTS, STATE_FACTS);
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

// ── DOMAIN E — PER-STATE POSITIVES ──
// THE ONE THIS DIMENSION EXISTS FOR. Sourced, cited, key matches its entry — and
// still wrong for its reader, because the fact belongs to another Land. All four
// original checks pass on this item; only the cross-state check catches it.
expect(
  "refuses a BE item that reaches for a BY fact (cross-state leak)",
  [state("Landeshauptstadt", "BE", "BY_CAP", "München")],
  true,
  "cross-state-fact",
);
// The same leak in the other direction — a gate blind to the fork that just
// happened is the family's recurring failure, so it is cut both ways.
expect(
  "refuses a BY item that reaches for a BE fact (reverse direction)",
  [state("Landesparlament", "BY", "BE_PARL", "das Abgeordnetenhaus von Berlin")],
  true,
  "cross-state-fact",
);
// A state code that is not one of the 16.
expect("refuses an unknown Bundesland code", [state("Landeshauptstadt", "XX", "BE_CAP", "Berlin")], true, "unknown-bundesland");
// A per-state fact served with NO state tag — every candidate would get it.
expect("refuses an untagged per-state fact", [{ exam: "EINBUERGERUNGSTEST", section: "BUNDESLAND", title: "Ohne Land", payload: { factId: "BE_CAP", answer: "Berlin" } }], true, "untagged-state-fact");
// Right state, right fact, wrong key.
expect("refuses a state item whose key disagrees with its own state's fact", [state("Landeshauptstadt", "BE", "BE_CAP", "Potsdam")], true, "answer-mismatch");
// Right state, right fact, but the fact-base entry is uncited.
expect("refuses a state fact with no citation", [state("Landesparlament", "BY", "BY_PARL", "der Bayerische Landtag")], true, "no-citation");
// A factId that exists in neither map.
expect("refuses a state item whose factId exists nowhere", [state("Erfunden", "BE", "BE_WAPPEN", "Bär")], true, "unknown-factId");

// ── DOMAIN E — NEGATIVES ──
expect("accepts a BE item sourced to BE's own cited fact", [state("Landeshauptstadt", "BE", "BE_CAP", "Berlin")], false);
expect("accepts a BY item sourced to BY's own cited fact", [state("Landeshauptstadt", "BY", "BY_CAP", "München")], false);
// A federal item must not be dragged into the state path just because Domain E exists.
expect("still accepts an untagged FEDERAL item on a federal fact", [civic("Frage: Menschenwürde", "A_001", "Artikel 1")], false);

console.log("");
if (failures > 0) {
  console.error(`✗ civic-sourcing gate proof FAILED — ${failures} case(s) wrong.`);
  console.error("  The gate no longer behaves as documented. Fix the gate, not this test.\n");
  process.exit(1);
}
console.log("✓ civic-sourcing gate proof: refuses unsourced/miskeyed/uncited civic claims; ignores non-civic items.\n");
