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

// ── DOMAIN E — THE PER-STATE OBLIGATION (added with the Bundesland fact-base) ──
// A state-tagged item has a failure mode the federal items do not: it can be
// perfectly sourced and still WRONG FOR ITS READER. An item tagged BE that keys
// "München" is internally consistent, cites a real fact, and matches a real
// fact-base entry — every one of the four original checks passes. It is still a
// Berliner being taught Bavaria's capital on the test that decides their
// naturalisation. So the state dimension gets its own checks, and the decisive one
// is CROSS-STATE: the referenced fact must live under the item's OWN state's key,
// not merely exist somewhere in the map.

import { goetheBank, examBank } from "./_bank.mjs";
import {
  CIVIC_FACTS,
  CIVIC_EXAMS,
  BUNDESLAND_FACTS,
  isBundeslandCode,
  type CivicFact,
  type BundeslandCode,
} from "../../src/lib/exams/civic-factbase";

export type CivicItem = {
  exam?: string;
  section?: string;
  title?: string;
  payload?: any;
};

export type CivicViolation = {
  title: string;
  kind:
    | "no-factId"
    | "unknown-factId"
    | "no-citation"
    | "answer-mismatch"
    // Domain E.
    | "unknown-bundesland"
    | "cross-state-fact"
    | "untagged-state-fact";
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
  stateFacts: Record<string, CivicFact[]> = BUNDESLAND_FACTS,
): { violations: CivicViolation[]; civicScanned: number; stateScanned: number } {
  const violations: CivicViolation[] = [];
  let civicScanned = 0;
  let stateScanned = 0;

  // Every per-state fact, flattened, so we can tell "this factId belongs to ANOTHER
  // state" apart from "this factId does not exist at all". The first is a leak; the
  // second is a typo. Reporting them as the same failure would hide the leak.
  const stateOf = new Map<string, string>();
  for (const [code, list] of Object.entries(stateFacts)) {
    for (const f of list) stateOf.set(f.factId, code);
  }

  for (const it of items) {
    if (!isCivic(it)) continue;
    civicScanned++;
    const title = it.title ?? "(untitled)";
    const factId = it.payload?.factId;
    const tagged = it.payload?.bundesland;

    if (typeof factId !== "string" || factId.length === 0) {
      violations.push({ title, kind: "no-factId", detail: "civic item declares no payload.factId" });
      continue;
    }

    // ── Domain E path: the item declares a Bundesland. ──
    if (tagged !== undefined) {
      stateScanned++;
      if (!isBundeslandCode(tagged)) {
        violations.push({ title, kind: "unknown-bundesland", detail: `"${tagged}" is not one of the 16 Bundesland codes` });
        continue;
      }
      const owner = stateOf.get(factId);
      if (owner === undefined) {
        violations.push({ title, kind: "unknown-factId", detail: `factId "${factId}" maps to no per-state fact` });
        continue;
      }
      // THE CROSS-STATE CHECK. The fact exists and is cited — but it is another
      // Land's. Every other check in this gate would pass here.
      if (owner !== tagged) {
        violations.push({
          title,
          kind: "cross-state-fact",
          detail: `item is tagged ${tagged} but factId "${factId}" belongs to ${owner} — a candidate would be served another Land's answer`,
        });
        continue;
      }
      // No non-null assertion here on purpose. A mutation test that disabled the
      // cross-state check made this lookup return undefined and the gate CRASHED
      // instead of reporting — a gate that throws is a gate whose findings nobody
      // reads. It resolves defensively and reports instead.
      const sf = (stateFacts[tagged as BundeslandCode] ?? []).find((f) => f.factId === factId);
      if (!sf) {
        violations.push({ title, kind: "unknown-factId", detail: `factId "${factId}" is not among ${tagged}'s facts` });
        continue;
      }
      if (!sf.citation || sf.citation.trim().length === 0) {
        violations.push({ title, kind: "no-citation", detail: `per-state fact "${factId}" has no citation — not sourced` });
      }
      const keyedState = it.payload?.answer;
      if (typeof keyedState === "string" && sf.answer && keyedState.trim() !== sf.answer.trim()) {
        violations.push({
          title,
          kind: "answer-mismatch",
          detail: `keyed answer "${keyedState}" disagrees with sourced answer "${sf.answer}" for "${factId}"`,
        });
      }
      continue;
    }

    // ── Federal path. A per-state factId here is a state fact that lost its tag:
    // it would be served to every candidate regardless of their Land. ──
    if (stateOf.has(factId)) {
      violations.push({
        title,
        kind: "untagged-state-fact",
        detail: `factId "${factId}" is a ${stateOf.get(factId)} per-state fact but the item declares no bundesland — it would be served to every candidate`,
      });
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

  return { violations, civicScanned, stateScanned };
}

const isMain = import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.endsWith("civic-sourcing-gate.mts");
if (isMain) {
  const all = [...(goetheBank() as CivicItem[]), ...(examBank() as CivicItem[])];
  const { violations, civicScanned, stateScanned } = checkCivicSourcing(all);

  if (violations.length > 0) {
    console.error(`\n✗ CIVIC-SOURCING GATE FAILED — ${violations.length} finding(s).\n`);
    for (const v of violations) console.error(`  [${v.kind}] ${v.title} — ${v.detail}`);
    console.error(`\n  ${civicScanned} civic item(s) scanned (${stateScanned} state-tagged). A civic fact`);
    console.error(`  must reference a sourced fact-base entry with a citation, its key must agree with`);
    console.error(`  that entry, and a state-tagged item must reference its OWN Land's fact.\n`);
    process.exit(1);
  }

  console.log(
    `\n✓ CIVIC-SOURCING GATE: ${civicScanned} civic item(s) — all sourced to a cited fact` +
      `${stateScanned > 0 ? `; ${stateScanned} state-tagged item(s) reference their own Land` : ""}.`,
  );
  if (civicScanned === 0) {
    console.log(`  (No civic items yet — the Einbürgerungstest engine is batch 2, engine ③.`);
    console.log(`   The gate is proven RED against fixtures in civic-sourcing-gate.test.mts.)`);
  }
}
