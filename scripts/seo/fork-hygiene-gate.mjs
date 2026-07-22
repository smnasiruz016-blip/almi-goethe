// Build-time FORK HYGIENE GATE — the AlmiWorld §7 rule, enforced instead of trusted.
//
// WHY THIS EXISTS. This repo's lineage is:
//   almi-celpip → almi-goethe (you are here)
// AlmiGoethe forked from AlmiCELPIP — a Canadian ENGLISH test (CELPIP, keyed to the
// Canadian Language Benchmark and IRCC immigration). Its engine (auth, billing, schema)
// is celpip-derived, so the risk is CELPIP's English/Canadian nouns and its product slug
// surviving into a German product's copy. A Goethe product has no reason to name CELPIP,
// the CLB, or IRCC.
//
// The lesson from further down this chain (documented in almi-swiss): the dangerous case
// is the LABEL localized while the FACT was not, and an identifier shipped in a spelling
// the banned list didn't hold — almi-swiss's SESSION_COOKIE was "almi_norwegian_session"
// while its list held only the HYPHEN "almi-norwegian", so the underscore sailed through.
// Product names are therefore ENUMERATED in all four shapes, not hand-listed.
//
// Runs before the build and FAILS it on any hit. AlmiIcelandic descends from this repo:
// when re-cutting there, ADD the German/Goethe nouns (they become ancestor leaks the
// moment German is no longer the subject) and REMOVE what Iceland legitimately owns.
//
// ⚠️ NOT banned here: German/Goethe nouns (Goethe-Institut, Goethe-Zertifikat, TestDaF,
// telc, Schreiben, Sprechen, Hören, Lesen) — those are THIS product's own subject matter.
// Nor bare country names: a German exam item may name countries as content. Only the
// ancestor's (CELPIP's) exam/authority/product nouns are leaks.

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const SCAN_DIRS = ["src", "scripts", "prisma"];

// ── ROOT IDENTITY FILES — a network-wide blind spot ──────────────────────────
// Every fork-hygiene gate in the network scanned only src/scripts/prisma, so a
// repo's own IDENTITY files were never checked. A sweep on 2026-07-22 found the
// SAME wrong README in SIX repos — goethe, icelandic, danish, norwegian, dutch and
// portuguese — byte-identical, describing AlmiDET and pointing at the wrong
// subdomain. One original mistake, propagated by forking, invisible because
// package.json was usually right and nobody opens the file that isn't.
//
// This repo matters more than most: it is an ANCESTOR. Every fork taken from here
// inherited the wrong README, which is exactly how one typo became six.
//
// NAMED FILES ONLY, not the whole root: the root also holds package-lock.json and
// other generated files, and scanning those would drown the gate in noise and invite
// someone to switch it off.
const SCAN_ROOT_FILES = ["package.json", "README.md"];
const SCAN_EXT = /\.(ts|tsx|js|mjs|json|prisma|css|md)$/;

const ALLOWLIST = new Map([
  ["src/lib/nav/family.ts", "links to sibling AlmiWorld products by name"],
  ["scripts/seo/fork-hygiene-gate.mjs", "documents the banned nouns"],
]);

const LINE_ESCAPE = "hygiene-allow";

// Ancestor (CELPIP) proper nouns. ⚠️ PRODUCT-SPECIFIC — RE-CUT AT EVERY FORK. German
// nouns are NOT here (they are Goethe's subject); bare country names are NOT here.
const BANNED = [
  // — CELPIP (the sole ancestor) — the Canadian English test and its framework —
  "CELPIP", "Canadian Language Benchmark",
  "Immigration, Refugees and Citizenship Canada",
  // CELPIP SPELLED OUT. The acronym alone is not enough: this repo's README described
  // the product as "Canadian English Language Proficiency Index Program (DET)"
  // practice — CELPIP's full name, never abbreviated there — so a list holding only
  // the acronym read the file as clean. The same string was found on almi-french's
  // live PRICING page and in almi-portuguese's README. Ban what was actually written,
  // not the tidy form.
  "Canadian English Language Proficiency Index Program",
  // — OTHER-PRODUCT identities. Not ancestors of this repo, but the leaked README
  // arrived from AlmiDET's chassis and carried DET's task names, scale and Prisma
  // models. A German-exam product naming another AlmiWorld product's exam in its OWN
  // identity files is the same class of leak, whichever direction the fork ran.
  "Read and Select", "Write About the Photo", "Speak About the Photo",
  "DetItem", "DetAttempt",
  // Sibling/ancestor PRODUCT names appended below — GENERATED, not hand-listed.
];

// ── Ancestor product names in every shape a slug ships in ────────────────────
const ANCESTOR_PRODUCTS = ["celpip"];
/** Every form a product slug ships in: almi-x · almi_x · almix · AlmiX. */
function productNameForms(p) {
  return [`almi-${p}`, `almi_${p}`, `almi${p}`, `Almi${p[0].toUpperCase()}${p.slice(1)}`];
}
for (const p of ANCESTOR_PRODUCTS) BANNED.push(...productNameForms(p));
// Display name the generator cannot derive (all-caps). Keep SHORT.
BANNED.push("AlmiCELPIP");

// SELF-CHECK. A blanket find-replace can rewrite THIS list to ban the product's own name.
// Assert it outright rather than relying on someone noticing a false-positive storm.
const SELF_NAMES = ["AlmiGoethe", "almi-goethe", "almi_goethe", "almigoethe"];
for (const n of SELF_NAMES) {
  if (BANNED.some((b) => b.toLowerCase() === n.toLowerCase())) {
    console.error("");
    console.error(`FORK-HYGIENE GATE IS MISCONFIGURED: BANNED contains "${n}", which is THIS product's own name.`);
    console.error("Every legitimate mention of ourselves would be reported as an ancestor leak. Fix BANNED.");
    console.error("");
    process.exit(2);
  }
}

// Acronyms need word boundaries — they collide with ordinary substrings. CLB = Canadian
// Language Benchmark, IRCC = Canada's immigration department — both CELPIP's, neither
// Goethe's. "CELPIP" itself is distinctive enough to match as a plain substring above.
const BANNED_WORD = ["CLB", "IRCC"];

// ── Scanning machinery (real-entity-gate design: strip comments, scan STRING values,
//    never raw JSON). Comments are documentation, not shipped copy.

function stripComments(text) {
  let out = "";
  let i = 0;
  let quote = null;
  let inLine = false;
  let inBlock = false;
  while (i < text.length) {
    const c = text[i];
    const n = text[i + 1];
    if (inLine) {
      if (c === "\n") { inLine = false; out += c; }
      else out += " ";
      i++; continue;
    }
    if (inBlock) {
      if (c === "*" && n === "/") { inBlock = false; out += "  "; i += 2; continue; }
      out += c === "\n" ? c : " ";
      i++; continue;
    }
    if (quote) {
      if (c === "\\") { out += text.slice(i, i + 2); i += 2; continue; }
      if (c === quote) quote = null;
      out += c; i++; continue;
    }
    if (c === '"' || c === "'" || c === "`") { quote = c; out += c; i++; continue; }
    if (c === "/" && n === "/") { inLine = true; out += "  "; i += 2; continue; }
    if (c === "/" && n === "*") { inBlock = true; out += "  "; i += 2; continue; }
    out += c; i++;
  }
  return out;
}

// Prisma comments are `//` and `///` — NOT `#`. stripComments handles `//` while
// respecting string literals, so prisma reuses it.

function jsonStrings(node, out = []) {
  if (typeof node === "string") out.push(node);
  else if (Array.isArray(node)) for (const v of node) jsonStrings(v, out);
  else if (node && typeof node === "object") for (const v of Object.values(node)) jsonStrings(v, out);
  return out;
}

function walk(dir, out = []) {
  let entries;
  try { entries = readdirSync(dir); } catch { return out; }
  for (const e of entries) {
    if (e === "node_modules" || e === ".next" || e === ".git") continue;
    const full = join(dir, e);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (SCAN_EXT.test(e)) out.push(full);
  }
  return out;
}

const violations = [];

/** Every file to scan: the source trees, plus the named root identity files. */
const targets = [
  ...SCAN_DIRS.flatMap((dir) => walk(join(ROOT, dir))),
  ...SCAN_ROOT_FILES.map((f) => join(ROOT, f)).filter((f) => {
    try { return statSync(f).isFile(); } catch { return false; }
  }),
];

{
  for (const file of targets) {
    const rel = relative(ROOT, file).replace(/\\/g, "/");
    if (ALLOWLIST.has(rel)) continue;
    const raw = readFileSync(file, "utf8");
    let text;
    if (rel.endsWith(".json")) {
      try { text = jsonStrings(JSON.parse(raw)).join("\n"); }
      catch { text = raw; }
    } else if (rel.endsWith(".md")) {
      // Markdown is scanned RAW. It has no code comments, and running it through
      // stripComments would treat the // in every https:// URL as the start of a
      // line comment and blank the rest of the line — silently HIDING a leak in
      // exactly the file most likely to carry one.
      text = raw;
    } else {
      text = stripComments(raw);   // .ts/.tsx/.js/.mjs/.css, and .prisma (also //)
    }
    const lines = text.split(/\r?\n/);
    const rawLines = raw.split(/\r?\n/);

    lines.forEach((line, i) => {
      if ((rawLines[i] ?? "").includes(LINE_ESCAPE)) return;
      for (const term of BANNED) {
        if (line.includes(term)) {
          violations.push(`${rel}:${i + 1}  banned ancestor noun "${term}"\n      ${line.trim().slice(0, 120)}`);
        }
      }
      for (const term of BANNED_WORD) {
        if (new RegExp(`\\b${term}\\b`).test(line)) {
          violations.push(`${rel}:${i + 1}  banned ancestor noun "${term}"\n      ${line.trim().slice(0, 120)}`);
        }
      }
    });
  }
}

if (violations.length) {
  console.error("\n✗ FORK HYGIENE GATE FAILED — ancestor content found.\n");
  console.error("  Goethe must read as Goethe. These are leaks from the fork lineage");
  console.error("  (celpip → goethe).\n");
  for (const v of [...new Set(violations)]) console.error(`  ${v}`);
  console.error(`\n  ${violations.length} violation(s). Fix the FACT, not just the label.\n`);
  process.exit(1);
}

console.log(`✓ Fork hygiene gate: clean (no ancestor nouns across ${SCAN_DIRS.join(", ")} + ${SCAN_ROOT_FILES.join(", ")}).`);
