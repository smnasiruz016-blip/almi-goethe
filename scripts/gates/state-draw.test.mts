// STATE-DRAW PROOF — the runtime half of the Bundesland guarantee.
//
// Run: npm run gate:state-draw   (wired into `gates` and `build`)
//
// ── WHY THIS EXISTS, AND WHY THE CIVIC-SOURCING GATE IS NOT ENOUGH ──────────
// The civic-sourcing gate checks AUTHORED items: every one of the 32 Bundesland
// items is correctly tagged, correctly sourced and correctly keyed, and the gate
// says so. It was green while the practice page drew a random item across the
// WHOLE section — so a Berliner was served another Land's capital fifteen times
// out of sixteen. The bank was perfect and the product was wrong.
//
// That is the family's recurring shape in a new place: a gate that proves the data
// says nothing about the code that serves it. So the DRAW gets its own proof.
//
// Three properties, each of which a plausible implementation gets wrong:
//   1. FILTERS to the chosen Land — never "any", never a default,
//   2. does NOT pad to the envelope from another Land. The structure asks for 3
//      and only 2 are sourced; topping up is exactly what an envelope invites,
//   3. REPORTS the shortfall rather than quietly serving fewer.
//
// Driven by fixtures for the failure shapes (so they stay available forever) and
// by the LIVE bank for coverage (so a real regression in the items is caught too).

import { planStateDraw } from "../../src/lib/exams/pick";
import { BUNDESLAND_CODES, BUNDESLAND_ITEMS_PER_STATE } from "../../src/lib/exams/civic-factbase";
import { aufgabeCountFor } from "../../src/lib/exams/exam-structure";
import { ITEMS as BL } from "../seed/exams/einbuergerungstest-bundesland";

let failures = 0;
function check(label: string, ok: boolean, detail = "") {
  if (ok) console.log(`  ✓ ${label}`);
  else {
    failures++;
    console.error(`  ✗ ${label}${detail ? `\n      ${detail}` : ""}`);
  }
}

console.log("\nSTATE-DRAW PROOF\n");

// ── FIXTURES: a pool that deliberately contains other Länder ──
const fx = (code: string, id: string) => ({ payload: { bundesland: code, factId: id } });
const MIXED = [
  fx("BY", "BY_CAP"), fx("BY", "BY_PARL"),
  fx("BE", "BE_CAP"), fx("BE", "BE_PARL"),
  fx("HH", "HH_CAP"), fx("HH", "HH_PARL"),
];

const be = planStateDraw(MIXED as any, "BE", 3);
check(
  "draws ONLY the chosen Land from a mixed pool",
  be.items.every((i: any) => i.payload.bundesland === "BE"),
  `got ${be.items.map((i: any) => i.payload.factId).join(", ")}`,
);
check("does NOT pad to the envelope from another Land", be.items.length === 2, `served ${be.items.length}, expected 2`);
check("reports the shortfall (3 asked, 2 sourced)", be.requested === 3 && be.served === 2 && be.shortfall === 1);

// A Land with nothing sourced serves nothing — it does not fall back to "any".
const none = planStateDraw(MIXED as any, "SN", 3);
check("a Land with no sourced facts serves ZERO, not a fallback", none.served === 0 && none.items.length === 0);
check("…and still reports the full shortfall", none.shortfall === 3);

// Asking for fewer than are available must not over-serve.
const one = planStateDraw(MIXED as any, "BY", 1);
check("never serves more than requested", one.served === 1 && one.shortfall === 0);

// ── LIVE BANK: every one of the 16 Länder ──
const REQUESTED = aufgabeCountFor("EINBUERGERUNGSTEST", "BUNDESLAND");
check("the sourced envelope is still declared", REQUESTED !== null, "aufgabeCountFor returned null");

let foreignTotal = 0;
let wrongCount = 0;
for (const code of BUNDESLAND_CODES) {
  const d = planStateDraw(BL as any, code, REQUESTED ?? 3);
  foreignTotal += d.items.filter((i: any) => i.payload.bundesland !== code).length;
  if (d.served !== BUNDESLAND_ITEMS_PER_STATE) wrongCount++;
}
check(`all 16 Länder draw ZERO cross-state items`, foreignTotal === 0, `${foreignTotal} foreign item(s) leaked`);
check(
  `all 16 Länder serve exactly ${BUNDESLAND_ITEMS_PER_STATE} (the honest count, not the envelope)`,
  wrongCount === 0,
  `${wrongCount} Land/Länder served the wrong number`,
);

console.log("");
if (failures > 0) {
  console.error(`✗ state-draw proof FAILED — ${failures} case(s) wrong.`);
  console.error("  The draw no longer honours the per-state guarantee. Fix the draw, not this test.\n");
  process.exit(1);
}
console.log("✓ state-draw proof: filters to the chosen Land, never pads the envelope, reports the shortfall.\n");
