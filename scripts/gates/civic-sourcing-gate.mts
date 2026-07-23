// CIVIC-SOURCING GATE — every civic item must map to a sourced fact.
//
// Run: npm run gate:civic-sourcing
//
// ── THE INVERSE OF THE REAL-ENTITY GATE ─────────────────────────────────────
// real-entity forbids an invented document from naming a real organisation. This
// gate enforces the opposite obligation on civic items (Einbürgerungstest, later
// ÖIF Werte): a citizenship fact must be TRUE and ATTRIBUTABLE, so a civic item
// may not carry a free-authored claim. It must reference a factId in the civic
// fact-base, its keyed answer must AGREE with that fact, and the fact must carry a
// citation. A plausible-but-unsourced civic fact is the one place fabrication is a
// harm, not a style slip — it teaches a citizenship candidate something false.
//
// ── VERIFIES KEY ↔ WORLD, NOT JUST KEY ↔ PAYLOAD ────────────────────────────
// A gate that only checked "the item references SOME factId" would prove the item
// is internally consistent, not that it is TRUE — the family's recurring trap
// (a key that matches its payload is not a key that matches reality). So this gate
// checks three distinct things, and each can fail alone:
//   1. the item declares a factId,
//   2. that factId EXISTS in the fact-base,
//   3. the fact-base entry has a citation, AND the item's keyed answer matches the
//      entry's answer.
//
// ── WHOLE-BANK, LIKE THE OTHERS ─────────────────────────────────────────────
// Iterates every authored item; a civic item is one whose exam is in CIVIC_EXAMS
// (or which declares payload.factId). Non-civic items are ignored — this gate has
// nothing to say about a Hörverstehen announcement. Seen red before trusted: see
// civic-sourcing-gate.test.mts. The pure checker is exported so the proof drives it
// with fixtures, since the live civic bank does not exist yet (engine ③).

import { goetheBank, examBank } from "./_bank.mjs";
import { CIVIC_FACTS, CIVIC_EXAMS, type CivicFact } from "../../src/lib/exams/civic-factbase";

export type CivicItem = {
  exam?: string;
  section?: string;
  title?: string;
  payload?: any;
};

export type CivicViolation = {
  title: string;
  kind: "no-factId" | "unknown-factId" | "no-citation" | "answer-mismatch";
  detail: string;
};

/** An item is civic if its exam is a civic exam, or it declares a factId. */
export function isCivic(it: CivicItem): boolean {
  if (it.exam && CIVIC_EXAMS.includes(it.exam)) return true;
  return typeof it.payload?.factId === "string";
}

/** THE CHECK. Pure: items + fact-base → violations. */
export function checkCivicSourcing(
  items: CivicItem[],
  facts: Record<string, CivicFact> = CIVIC_FACTS,
): { violations: CivicViolation[]; civicScanned: number } {
  const violations: CivicViolation[] = [];
  let civicScanned = 0;

  for (const it of items) {
    if (!isCivic(it)) continue;
    civicScanned++;
    const title = it.title ?? "(untitled)";
    const factId = it.payload?.factId;

    if (typeof factId !== "string" || factId.length === 0) {
      violations.push({ title, kind: "no-factId", detail: "civic item declares no payload.factId" });
      continue;
    }
    const fact = facts[factId];
    if (!fact) {
      violations.push({ title, kind: "unknown-factId", detail: `factId "${factId}" maps to no fact-base entry` });
      continue;
    }
    if (!fact.citation || fact.citation.trim().length === 0) {
      violations.push({ title, kind: "no-citation", detail: `fact "${factId}" has no citation — not sourced` });
    }
    // key ↔ world: the item's keyed answer must agree with the sourced answer.
    const keyed = it.payload?.answer;
    if (typeof keyed === "string" && fact.answer && keyed.trim() !== fact.answer.trim()) {
      violations.push({
        title,
        kind: "answer-mismatch",
        detail: `keyed answer "${keyed}" disagrees with sourced answer "${fact.answer}" for "${factId}"`,
      });
    }
  }

  return { violations, civicScanned };
}

const isMain = import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.endsWith("civic-sourcing-gate.mts");
if (isMain) {
  const all = [...(goetheBank() as CivicItem[]), ...(examBank() as CivicItem[])];
  const { violations, civicScanned } = checkCivicSourcing(all);

  if (violations.length > 0) {
    console.error(`\n✗ CIVIC-SOURCING GATE FAILED — ${violations.length} finding(s).\n`);
    for (const v of violations) console.error(`  [${v.kind}] ${v.title} — ${v.detail}`);
    console.error(`\n  ${civicScanned} civic item(s) scanned. A civic fact must reference a sourced`);
    console.error(`  fact-base entry with a citation, and its key must agree with that entry.\n`);
    process.exit(1);
  }

  console.log(`\n✓ CIVIC-SOURCING GATE: ${civicScanned} civic item(s) — all sourced to a cited fact.`);
  if (civicScanned === 0) {
    console.log(`  (No civic items yet — the Einbürgerungstest engine is batch 2, engine ③.`);
    console.log(`   The gate is proven RED against fixtures in civic-sourcing-gate.test.mts.)`);
  }
}
