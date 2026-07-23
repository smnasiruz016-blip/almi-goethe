// RED-FIRST PROOF for the real-entity gate.
//
// Run: npm run gate:real-entity:test   (wired into `build`, ahead of the gate itself)
//
// ── WHY A PERMANENT TEST AND NOT A THROWAWAY PROBE ──────────────────────────
// Three gates shipped in this family were green AND blind — they had never been
// seen red, so nobody knew whether they could go red at all. A one-off probe proves
// the gate worked on the day it was written; it proves nothing about the day someone
// edits a regex, tightens a marker list, or "simplifies" the same-line rule. This
// file runs on every build and fails if the gate stops detecting.
//
// It asserts BOTH directions, because a gate has two ways to be useless:
//   POSITIVES — it must still catch what it was built to catch.
//   NEGATIVES — it must NOT fire on legitimate content. This half is not optional:
//               the real cost of a false positive is that the gate gets disabled,
//               and then it catches nothing at all. The first case below is real —
//               it is the item that failed this gate's very first run.

import { scanBank } from "./real-entity-gate.mjs";

const cell = (r: any) => `${r.level}/${r.module}`;
const item = (title: string, text: string) => ({ level: "A1", module: "HOEREN", title, payload: { audioScript: text } });

let failures = 0;
function expect(label: string, rows: any[], shouldFire: boolean, expectName?: string) {
  const { violations } = scanBank("test", rows, cell);
  const fired = violations.length > 0;
  const ok = fired === shouldFire && (!expectName || violations.some((v) => v.name === expectName));
  if (!ok) {
    failures++;
    console.error(`  ✗ ${label}`);
    console.error(`      expected ${shouldFire ? "a violation" : "no violation"}${expectName ? ` for "${expectName}"` : ""}, got ${violations.length}: ${violations.map((v) => v.name).join(", ") || "none"}`);
  } else {
    console.log(`  ✓ ${label}`);
  }
}

console.log("real-entity gate — RED-first proof\n");

console.log(" must NOT fire (false positives disable gates):");
// The exact item that failed this gate's first run. "Post" = the post office,
// "Supermarkt" = the generic noun the gate itself recommends as the fix.
expect(
  'A1 listening: "Die Post ist gleich da drüben, neben dem Supermarkt"',
  [item("Wo ist die Post?", "Frau: Entschuldigung, wo ist die Post? Mann: Die Post ist gleich da drüben, neben dem Supermarkt.")],
  false,
);
// netto/brutto is the standard German pair for net/gross pay.
expect(
  'B1 text: "Mein Gehalt ist 2400 Euro brutto, netto bleiben etwa 1700 Euro"',
  [item("Gehalt", "Mein Gehalt ist 2400 Euro brutto, netto bleiben etwa 1700 Euro.")],
  false,
);
// "Spar" as the imperative of sparen, at the start of a sentence.
expect('imperative: "Spar Geld und kauf weniger!"', [item("Sparen", "Spar Geld und kauf weniger!")], false);
// A1 is a CEFR level written thousands of times in this repo.
expect('CEFR level: "Das Goethe-Zertifikat A1 ist die erste Stufe"', [item("Niveau", "Das Goethe-Zertifikat A1 ist die erste Stufe.")], false);
// A civic item MUST be able to name the institutions it attributes a fact to.
expect(
  "civic attribution: Grundgesetz / Bundestag / BAMF named",
  [item("Grundrechte", "Die Grundrechte stehen im Grundgesetz. Der Bundestag beschliesst die Gesetze.")],
  false,
);
// The generic nouns the failure message recommends must never fire.
expect(
  'recommended generics: "die Versicherung", "der Anbieter", "die Bank"',
  [item("Brief", "Die Versicherung hat geschrieben. Der Anbieter ist neu. Die Bank ist geschlossen.")],
  false,
);

console.log("\n must fire:");
// Tier 1 — the Helvetia case, in German: an invented letter signed by a real insurer.
expect("tier 1: invented letter signed by a real insurer", [item("Brief", "Sehr geehrte Frau Weber, Ihre Allianz hat Ihren Antrag geprüft.")], true, "Allianz");
// Tier 1 — a real statutory health insurer as the author of an invented letter.
expect("tier 1: invented letter from a statutory health insurer", [item("Brief", "Ihre AOK teilt Ihnen mit, dass die Kosten übernommen werden.")], true, "AOK");
// Tier 2 — ambiguous word RESCUED by a same-line legal form.
expect("tier 2: 'Netto' next to a legal form", [item("Notiz", "Die Netto GmbH sucht neue Mitarbeiter.")], true, "Netto");
// Tier 2 — the Austrian operator whose name is also a CEFR level, with a legal form.
expect("tier 2: 'A1' next to a legal form", [item("Notiz", "Die A1 AG hat den Vertrag gekündigt.")], true, "A1");
// Tier 2 must NOT fire on the same word without a marker — proving the rule, not luck.
expect("tier 2 control: 'Netto' with no marker on the line", [item("Notiz", "Netto verdiene ich 1700 Euro im Monat.")], false);

console.log("");
if (failures > 0) {
  console.error(`✗ real-entity gate proof FAILED — ${failures} case(s) wrong.`);
  console.error("  The gate no longer behaves as documented. Fix the gate, not this test.\n");
  process.exit(1);
}
console.log("✓ real-entity gate proof: catches what it must, ignores what it must.\n");
