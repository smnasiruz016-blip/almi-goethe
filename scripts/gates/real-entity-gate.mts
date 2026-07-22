// Real-entity gate — no invented document may be signed by a real COMPANY.
//
// Run: npm run gate:real-entity   (wired into `build`, so it blocks a deploy)
//
// ── WHY ─────────────────────────────────────────────────────────────────────
// Our items ARE fabrications: invented notices, invented phone calls, invented
// letters. That is legitimate — until one is signed with a real company's name.
// Then it stops being a practice task and becomes words put in that company's
// mouth. In this family it has happened twice and a person caught it both times,
// not a check: an invented insurance letter signed "Helvetia" (a real insurer — the
// amounts in it were CORRECT, which is exactly why it survived), and an invented
// notice for a "Repair-Café", a real trademarked name.
//
// No other gate can see this: every word is allowed. Rule #7 counts; the title gate
// hunts duplication; this hunts REAL-WORLD COMMERCIAL names. Different failure.
//
// 🔴 REGRESSION GUARD, NOT A COMPLETENESS CHECK. Green means "none of the names we
// already got wrong, or already thought of, is in the bank". It does NOT mean no
// real company is named — there are thousands and this list has a few dozen. The
// next unknown one is caught by READING the item. Do not let this stand in for that.
//
// ── THE LIST IS GERMAN AND AUSTRIAN, NOT INHERITED ──────────────────────────
// A fork gate is blindest to the fork that just happened. Copying the Portuguese
// list would hunt Pingo Doce and Millennium BCP in a bank that will never contain
// them, and would miss every name that matters here. Re-cut BOTH ways: ancestor
// names removed, German and Austrian names added.
//
// ── TWO KINDS OF ORGANISATION, AND ONLY ONE IS HUNTED ───────────────────────
// This repo is about to gain a CIVIC engine (Einbürgerungstest, and later the ÖIF
// Werte module) whose items MUST name real institutions — Grundgesetz, Bundestag,
// Bundesrat, Bundespräsident, BAMF, Ausländerbehörde. A civic item that avoided
// naming them would be worthless. So the distinction this gate draws is not
// "real vs invented", it is:
//
//   CITED  — an authority a true statement is ATTRIBUTED to. Always allowed, and
//            for civic items, required. Never listed below.
//   SIGNED — an organisation that would appear as the AUTHOR of a document we made
//            up. Blocked, whether commercial or not.
//
// That is why the statutory health insurers (AOK, Barmer, Techniker Krankenkasse)
// ARE listed even though they are public-law bodies: nobody cites a Krankenkasse for
// a civic fact, but an invented letter from one is precisely the Helvetia case.
//
// The exam bodies this product names in its own copy — Goethe-Institut, telc,
// TestDaF-Institut, g.a.s.t., ÖSD, ÖIF — are CITED, never signed, and are not listed.

import { goetheBank, examBank } from "./_bank.mjs";
import { isDirectRun } from "../seed/_entry";

// ── Tier 1 — unambiguous. The word IS the company, so a bare match is enough. ──
const BRANDS = [
  // retail / discount (DE)
  "Aldi", "Aldi Süd", "Aldi Nord", "Lidl", "Rewe", "Edeka", "Kaufland",
  "Netto Marken-Discount", "Rossmann", "Media Markt", "MediaMarkt", "Saturn",
  "Hornbach", "Bauhaus", "Ikea", "Zalando", "Tchibo", "Lieferando",
  // banks (DE)
  "Deutsche Bank", "Commerzbank", "Postbank", "Sparda-Bank", "ING-DiBa",
  // insurers + statutory health insurers (SIGNED, not cited — see header)
  "Allianz", "HUK-Coburg", "Debeka", "Barmenia", "Ergo Versicherung",
  "AOK", "Barmer", "Techniker Krankenkasse", "DAK-Gesundheit",
  // telecom / energy (DE)
  "Deutsche Telekom", "Vodafone", "Vattenfall", "E.ON", "EnBW",
  // transport / post / logistics (DE)
  "Deutsche Bahn", "Lufthansa", "Flixbus", "Hermes Versand",
  // Austria — for the ÖSD / ÖIF engines
  "Billa", "Hofer KG", "Raiffeisenbank", "Wiener Städtische", "Erste Bank",
  "Wiener Linien", "Österreichische Bundesbahnen",
];

// ── Tier 2 — names that are ALSO ordinary German words, bare initials, or (worse)
// vocabulary this very repo uses structurally. These fire ONLY next to a corporate
// marker, on the SAME LINE. Without that rule the gate produces noise and gets
// ignored — and an ignored gate is worse than none, because it reads as coverage.
//
//   * "Netto"   — netto/brutto is THE standard German pair for net/gross pay. Any
//                 B1+ text about a Gehaltsabrechnung uses it. Also a discounter.
//   * "Spar"    — the imperative of sparen ("Spar Geld!"), and an Austrian retailer.
//                 Capitalisation cannot separate them: both start a sentence.
//   * "Post"    — die Post is the ordinary noun for mail.
//   * "Bahn"    — die Bahn is the ordinary noun for the railway.
//   * "Real"    — the ordinary adjective, and a former SB-Warenhaus chain.
//   * "Hofer"   — a common Austrian SURNAME as well as the discounter. Our items
//                 are full of invented people with surnames.
//   * "O2"      — the chemical formula. An Umwelt text at B2 may well contain it.
//   * "A1"      — the Austrian mobile operator AND A CEFR LEVEL. This repo writes
//                 "A1" thousands of times as a level; a bare match here would fire
//                 on essentially every item in the Goethe bank. It is listed only so
//                 that "A1 GmbH" is still caught.
//   * "ÖBB"/"DB" — bare initials collide with everything.
//
// NOT LISTED, DELIBERATELY: "Ja!" (Rewe's budget line) and "Gut & Günstig" (Edeka's).
// "ja" is among the commonest words in German and "gut und günstig" is an ordinary
// phrase. No marker rule can rescue them, so listing them would only teach authors
// that this gate cries wolf.
const AMBIGUOUS = [
  "Netto", "Spar", "Post", "Bahn", "Real", "Penny", "Hofer", "O2", "A1",
  "ÖBB", "DB", "Sparkasse", "Volksbank", "Migros",
];

// A tier-2 name only counts as a company when one of these sits near it.
//
// ⚠️ THESE ARE LEGAL FORMS AND CORPORATE-IDENTITY WORDS ONLY — NOT TRADE NOUNS.
//
// The first version of this list included Supermarkt, Discounter, Drogerie,
// Versicherung, Anbieter, Filiale and Unternehmen, and the gate went red on its very
// first run against the real bank: an A1 listening item reading "Die Post ist gleich
// da drüben, neben dem Supermarkt" was reported as naming a company. "Post" there is
// the post office and "Supermarkt" is a generic noun — in fact it is one of the very
// words this gate's own failure message tells authors to use instead of a brand. A
// marker list that fires on the recommended fix is a marker list that will be
// switched off within a week.
//
// almi-swiss hit the same shape from the other side: a length floor copied from a
// sibling failed ten legitimate items on its first run. Both are the same mistake —
// a rule written from what sounded right rather than measured against the bank it
// governs. So: a marker must be something that CANNOT appear in ordinary prose about
// everyday life. A legal form can only follow a company name. "Supermarkt" cannot.
const CORPORATE_MARKERS = [
  // legal forms — these follow a company name and nothing else
  "GmbH", "AG", "KG", "e\\.?K\\.?", "SE", "OHG", "gGmbH", "Aktiengesellschaft",
  // corporate-identity words with no everyday-life reading
  "Konzern", "Kundenservice", "Kundendienst", "Hotline", "Zweigstelle",
];

// ── Walk the PARSED item, never raw JSON ────────────────────────────────────
// Scanning a raw JSON string matches escape sequences, not content, and a gate that
// scans the wrong thing is a gate that has never been red.
function* strings(node: unknown, trail: string): Generator<[string, string]> {
  if (typeof node === "string") {
    yield [trail, node];
  } else if (Array.isArray(node)) {
    for (let i = 0; i < node.length; i++) yield* strings(node[i], `${trail}[${i}]`);
  } else if (node && typeof node === "object") {
    for (const [k, v] of Object.entries(node)) yield* strings(v, trail ? `${trail}.${k}` : k);
  }
}

const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const MARKERS = CORPORATE_MARKERS.join("|");

export type Violation = { bank: string; cell: string; title: string; trail: string; name: string; tier: 1 | 2 };

/** Scan one bank of items. EXPORTED so the RED-first proof in
 *  real-entity-gate.test.mts can drive it with fixtures — a gate whose failure path
 *  is never exercised is a gate nobody has seen work. */
export function scanBank(bank: string, rows: any[], cellOf: (r: any) => string): { violations: Violation[]; scanned: number } {
  const violations: Violation[] = [];
  let scanned = 0;
  for (const item of rows) {
    for (const [trail, text] of strings(item, "")) {
      scanned++;
      for (const brand of BRANDS) {
        const re = new RegExp(`(^|[^\\p{L}])${esc(brand)}([^\\p{L}]|$)`, "iu");
        if (re.test(text)) {
          violations.push({ bank, cell: cellOf(item), title: item.title, trail, name: brand, tier: 1 });
        }
      }
      for (const name of AMBIGUOUS) {
        // SAME LINE only — a marker three sentences away is not evidence, and
        // cross-sentence matching is how a gate starts crying wolf.
        const re = new RegExp(
          `(^|[^\\p{L}])(${esc(name)})([^\\p{L}]|$)[^\\n]{0,40}(${MARKERS})` +
            `|(${MARKERS})[^\\n]{0,40}(^|[^\\p{L}])(${esc(name)})([^\\p{L}]|$)`,
          "u", // CASE-SENSITIVE: a brand is capitalised; "netto"/"real" are not.
        );
        if (re.test(text)) {
          violations.push({ bank, cell: cellOf(item), title: item.title, trail, name, tier: 2 });
        }
      }
    }
  }
  return { violations, scanned };
}

// ── Running the gate against the live banks ─────────────────────────────────
// Guarded so that IMPORTING this module (which the RED-first proof does, to reach
// scanBank) does not also scan the real banks and exit. Without the guard the proof
// would inherit the gate's exit code, and a genuine content failure would masquerade
// as a broken proof — two different problems reported as one.
function main(): void {
  const banks: [string, any[], (r: any) => string][] = [
    ["Goethe-Zertifikat", goetheBank(), (r) => `${r.level}/${r.module}`],
    ["Exam engine", examBank(), (r) => `${r.exam}/${r.section}`],
  ];

  // Refuse to pass vacuously: an empty bank is a loading failure, not a clean bank.
  const totalItems = banks.reduce((n, [, rows]) => n + rows.length, 0);
  if (totalItems === 0) {
    console.error("real-entity-gate: no items loaded — refusing to pass vacuously.");
    process.exit(1);
  }

  const violations: Violation[] = [];
  let scanned = 0;
  for (const [bank, rows, cellOf] of banks) {
    const r = scanBank(bank, rows, cellOf);
    violations.push(...r.violations);
    scanned += r.scanned;
  }

  if (violations.length > 0) {
    console.error("\n✗ REAL-ENTITY GATE FAILED — an invented document names a real company.\n");
    for (const v of violations) {
      console.error(`  ${v.bank} ${v.cell} — "${v.title}"`);
      console.error(`    field: ${v.trail}`);
      console.error(`    name:  ${v.name} (tier ${v.tier})\n`);
    }
    console.error(
      'Use a generic description instead — "der Supermarkt", "die Versicherung",\n' +
        '"der Anbieter", "die Bank". Naming a real company in a document we invented\n' +
        "puts words in its mouth.\n\n" +
        "Authorities that a true statement is ATTRIBUTED to — Grundgesetz, Bundestag,\n" +
        "Bundesrat, BAMF, Ausländerbehörde, and the exam bodies — are allowed, and for\n" +
        "civic items they are required. They are not what this gate hunts.\n",
    );
    process.exit(1);
  }

  console.log(`✓ REAL-ENTITY GATE: ${scanned} strings across ${totalItems} items — no real company named.`);
  console.log("  Regression guard only: green means none of the ~60 listed names appears, not that none exists.");
}

if (isDirectRun(import.meta.url)) main();
