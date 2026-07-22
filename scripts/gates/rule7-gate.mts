// Rule #7 gate — every served module must carry at least 15 practice items.
//
// Run: npm run gate:rule7   (wired into `build`, so it blocks a deploy)
//
// WHY THIS EXISTS HERE, NOW
//
// The 15-item minimum is family policy and this repo enforced it with nothing. It
// happened to be in credit — 688 items across 43 modules, every cell at 16 — which
// is exactly the moment to wire a gate. A gate introduced against a red tree gets
// negotiated down to whatever the tree already contains; a gate introduced against a
// green tree only ever has to hold the line.
//
// It is being wired NOW, before four new engines are built, and not after. Four
// engines authored against no gate is the precondition that produced 121 malformed
// items in almi-french: authors work from whatever they last saw, and nothing
// notices the drift until someone counts by hand.
//
// ── TWO DELIBERATE CHOICES ──────────────────────────────────────────────────
//
// 1. MODULES ARE ENUMERATED FROM THE REGISTRY, NOT FROM THE DATA. A gate that
//    counts what it finds cannot see what is missing: an engine whose seed file
//    stops being imported simply disappears from the counts and the gate passes,
//    smiling. The registry declares which modules must exist; this checks each one.
//    That is also the honesty guard for the new engines — register an exam without
//    authoring its items and every one of its modules reports 0 and fails.
//
// 2. AN EMPTY MODULE FAILS, AND IS REPORTED SEPARATELY. It does not skip. In a repo
//    where every module is populated, 0 no longer means "not written yet" — it means
//    a seed file is not being loaded or the registry and the data have drifted apart
//    on a key. That is a louder failure than a shortfall, so it is not buried in the
//    same list. (almi-swiss skips at 0 on "empty is honest"; that reasoning holds
//    only while a bank is being written, and this one is not.)
//
// ── COUNTED AT THE FINEST SERVED AXIS ───────────────────────────────────────
// A learner practises ONE (exam/level × module) cell at a time, so that is the axis.
// This matters: almi-goethe's /api/status groups by (level, skill) and SUMS the
// three exam families into one number, which made ~5-per-family look like 16. An
// aggregate count masks a thin module. Count where the learner actually lands.

import { MODULE_DEFS } from "../../src/lib/goethe/registry";
import { EXAM_DEFS, ALL_EXAMS } from "../../src/lib/exams/registry";
import { goetheBank, examBank, groupBy } from "./_bank.mjs";
import type { GoetheLevel, GoetheModule } from "@prisma/client";

const MIN = 15;

const GOETHE_LEVELS: GoetheLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

const shortfalls: string[] = [];
const empties: string[] = [];
let modules = 0;
let total = 0;

console.log(`Rule #7 — at least ${MIN} items per served module\n`);

// ── Bank 1: Goethe-Zertifikat, level × module ───────────────────────────────
const gCounts = groupBy(goetheBank(), (r) => `${r.level}::${r.module}`);
const gModules = Object.keys(MODULE_DEFS) as GoetheModule[];

console.log("  Goethe-Zertifikat");
for (const level of GOETHE_LEVELS) {
  const cells = gModules.map((mod) => {
    const n = gCounts.get(`${level}::${mod}`)?.length ?? 0;
    modules++;
    total += n;
    if (n === 0) empties.push(`Goethe-Zertifikat ${level}/${mod}`);
    else if (n < MIN) shortfalls.push(`Goethe-Zertifikat ${level}/${mod}: ${n}/${MIN}`);
    const mark = n === 0 ? "!!" : n < MIN ? " <" : "  ";
    return `${mod.slice(0, 9).toLowerCase().padEnd(9)} ${String(n).padStart(2)}${mark}`;
  });
  console.log(`    ${level.padEnd(4)} ${cells.join("  ")}`);
}

// ── Bank 2: the separate exam engines, exam × section ───────────────────────
const eCounts = groupBy(examBank(), (r) => `${r.exam}::${r.section}`);

console.log("\n  Exam engines");
for (const exam of ALL_EXAMS) {
  const def = EXAM_DEFS[exam];
  const cells = def.sections.map((s) => {
    const n = eCounts.get(`${exam}::${s.key}`)?.length ?? 0;
    modules++;
    total += n;
    if (n === 0) empties.push(`${exam}/${s.key}`);
    else if (n < MIN) shortfalls.push(`${exam}/${s.key}: ${n}/${MIN}`);
    const mark = n === 0 ? "!!" : n < MIN ? " <" : "  ";
    return `${s.key.slice(0, 9).toLowerCase().padEnd(9)} ${String(n).padStart(2)}${mark}`;
  });
  console.log(`    ${exam.padEnd(19)} ${cells.join("  ")}`);
}

console.log(`\n  ${modules} modules, ${total} items`);

// ── An item filed under a module the registry does not declare ──────────────
// The whole-bank counterpart to enumerating from the registry: the loop above
// cannot see an item whose cell is not in the registry at all. Without this, such
// an item is invisible in both directions — uncounted AND unchecked.
const declaredG = new Set(GOETHE_LEVELS.flatMap((l) => gModules.map((m) => `${l}::${m}`)));
const declaredE = new Set(ALL_EXAMS.flatMap((e) => EXAM_DEFS[e].sections.map((s) => `${e}::${s.key}`)));
const stray: string[] = [];
for (const k of gCounts.keys()) {
  if (!declaredG.has(k)) stray.push(`Goethe-Zertifikat item filed under undeclared cell ${k}`);
}
for (const k of eCounts.keys()) {
  if (!declaredE.has(k)) stray.push(`Exam item filed under undeclared cell ${k}`);
}

if (empties.length || shortfalls.length || stray.length) {
  console.error(`\n✗ RULE #7 GATE FAILED\n`);
  if (empties.length) {
    console.error(`  ${empties.length} EMPTY module(s) — a registered module with no items means a seed`);
    console.error(`  file is not imported in scripts/gates/_bank.mts, or the registry and the data`);
    console.error(`  have drifted apart on a key. This is not "not written yet".`);
    for (const e of empties) console.error(`    !! ${e}`);
    console.error("");
  }
  if (shortfalls.length) {
    console.error(`  ${shortfalls.length} module(s) under ${MIN}:`);
    for (const s of shortfalls) console.error(`     < ${s}`);
    console.error("");
  }
  if (stray.length) {
    console.error(`  ${stray.length} item(s) filed under a cell the registry does not declare:`);
    for (const s of stray) console.error(`     ? ${s}`);
    console.error("");
  }
  console.error(`  Author items up to ${MIN}. Never lower the minimum to make this pass.\n`);
  process.exit(1);
}

console.log(`\n✓ Rule #7: all ${modules} modules hold at least ${MIN} items.\n`);
