// PREDICTED DEACTIVATION LIST — computed from source alone, with no database.
//
// Run: npm run predict:deactivations
//
// ── WHY THIS EXISTS ─────────────────────────────────────────────────────────
// Re-authoring the non-conformant exam items is a large reconciliation, and the
// seeder's safety limit refuses it until a human has read the list of rows that
// would be deactivated. But that list lives in the production database, and
// DATABASE_URL is a Vercel *sensitive* variable: `env pull` will not return it, and
// nobody should be handing it around to satisfy a review step.
//
// The list is nevertheless DETERMINISTIC. A row is deactivated when its identity
// key — (exam, level, section, title) — exists in the deployed source but not in
// the new one. Both sides of that comparison are source files under version
// control, so the prediction can be computed here and reviewed before anything is
// forced.
//
//   BASELINE  = the seed tree at `main`, i.e. what the last deploy seeded.
//   CURRENT   = the seed tree in the working branch.
//
// The baseline is extracted with
//   `git archive main scripts/seed src/lib/exams | tar -x -C .baseline`
// (src/lib/exams is needed too, because the Einbürgerungstest baseline seed imports
//  the civic fact-base from src — a seed-only archive would fail to resolve it)
// so its relative imports still resolve. It is NOT a hand-maintained copy — a
// remembered baseline is exactly the kind of thing that drifts.
//
// ── THIS IS A PREDICTION, NOT THE TRUTH ─────────────────────────────────────
// It states what SHOULD be deactivated if production matches `main`. The live list
// comes from the seeder's own refusal output on deploy, which prints every row and
// fails closed before writing. The two are diffed before RECONCILE_FORCE=1 is used.
// A live row this prediction does not contain is drift — an orphan from an earlier
// insert-only deploy — and is precisely what the guard exists to catch.

// Baseline = every exam seed file on `main`. After batch 1 split the bank into
// per-section files, importing only the four original modules undercounted the
// baseline (the split files were invisible), inflating the predicted insert count.
// Import the WHOLE baseline tree — the same module set _bank.mts loads for current.
import { ITEMS as B_TESTDAF } from "../../.baseline/scripts/seed/exams/testdaf";
import { ITEMS as B_TESTDAF_LV } from "../../.baseline/scripts/seed/exams/testdaf-leseverstehen";
import { ITEMS as B_TESTDAF_HV } from "../../.baseline/scripts/seed/exams/testdaf-hoerverstehen";
import { ITEMS as B_TESTDAF_SA } from "../../.baseline/scripts/seed/exams/testdaf-schriftlicher-ausdruck";
import { ITEMS as B_TESTDAF_MA } from "../../.baseline/scripts/seed/exams/testdaf-muendlicher-ausdruck";
import { ITEMS as B_C1H } from "../../.baseline/scripts/seed/exams/telc-c1-hochschule";
import { ITEMS as B_B1 } from "../../.baseline/scripts/seed/exams/telc-b1";
import { ITEMS as B_B1_LV } from "../../.baseline/scripts/seed/exams/telc-b1-leseverstehen";
import { ITEMS as B_B1_SB } from "../../.baseline/scripts/seed/exams/telc-b1-sprachbausteine";
import { ITEMS as B_B1_HV } from "../../.baseline/scripts/seed/exams/telc-b1-hoerverstehen";
import { ITEMS as B_B1_SA } from "../../.baseline/scripts/seed/exams/telc-b1-schriftlicher-ausdruck";
import { ITEMS as B_B1_SP } from "../../.baseline/scripts/seed/exams/telc-b1-sprechen";
import { ITEMS as B_B2 } from "../../.baseline/scripts/seed/exams/telc-b2";
import { ITEMS as B_DTZ_HV } from "../../.baseline/scripts/seed/exams/dtz-hoeren";
import { ITEMS as B_DTZ_LV } from "../../.baseline/scripts/seed/exams/dtz-lesen";
import { ITEMS as B_DTZ_SA } from "../../.baseline/scripts/seed/exams/dtz-schreiben";
import { ITEMS as B_DTZ_SP } from "../../.baseline/scripts/seed/exams/dtz-sprechen";
import { ITEMS as B_EINB } from "../../.baseline/scripts/seed/exams/einbuergerungstest";
import { ITEMS as B_DSH_HV } from "../../.baseline/scripts/seed/exams/dsh-hoerverstehen";
import { ITEMS as B_DSH_LV } from "../../.baseline/scripts/seed/exams/dsh-leseverstehen";
import { ITEMS as B_DSH_WS } from "../../.baseline/scripts/seed/exams/dsh-strukturen";
import { ITEMS as B_DSH_TP } from "../../.baseline/scripts/seed/exams/dsh-textproduktion";
import { ITEMS as B_DSH_SP } from "../../.baseline/scripts/seed/exams/dsh-muendlich";
import { examBank } from "./_bank.mjs";
import { EXAM_STRUCTURES, aufgabeFor } from "../../src/lib/exams/exam-structure";

const key = (r: any) => `${r.exam}::${r.level}::${r.section}::${r.title}`;

const baseline = [...B_TESTDAF, ...B_TESTDAF_LV, ...B_TESTDAF_HV, ...B_TESTDAF_SA, ...B_TESTDAF_MA, ...B_C1H, ...B_B1, ...B_B1_LV, ...B_B1_SB, ...B_B1_HV, ...B_B1_SA, ...B_B1_SP, ...B_B2, ...B_DTZ_HV, ...B_DTZ_LV, ...B_DTZ_SA, ...B_DTZ_SP, ...B_EINB, ...B_DSH_HV, ...B_DSH_LV, ...B_DSH_WS, ...B_DSH_TP, ...B_DSH_SP] as any[];
const current = examBank() as any[];
const currentKeys = new Set(current.map(key));

const willDeactivate = baseline.filter((r) => !currentKeys.has(key(r)));
const willInsert = current.filter((r) => !new Set(baseline.map(key)).has(key(r)));

console.log("PREDICTED RECONCILIATION — source-side, no database consulted\n");
console.log(`  baseline (main, = last deploy)  ${baseline.length} items`);
console.log(`  current  (this branch)          ${current.length} items`);
console.log(`  would INSERT                    ${willInsert.length}`);
console.log(`  would DEACTIVATE                ${willDeactivate.length}`);
console.log(
  `\n  guard: ${willDeactivate.length} of ${baseline.length} = ` +
    `${((willDeactivate.length / Math.max(1, baseline.length)) * 100).toFixed(1)}% ` +
    `— ${willDeactivate.length / Math.max(1, baseline.length) > 0.15 || willDeactivate.length > 120 ? "REFUSES without RECONCILE_FORCE=1" : "within the safety limit"}\n`,
);

// Group the deactivations and say WHY each one goes, so the review is a check and
// not an act of faith. "Non-conformant predecessor" is the only legitimate reason
// in this batch; anything else is flagged for investigation.
const byCell = new Map<string, any[]>();
for (const r of willDeactivate) {
  const k = `${r.exam} ${r.section}`;
  byCell.set(k, [...(byCell.get(k) ?? []), r]);
}

let unexplained = 0;
for (const [cell, rows] of [...byCell].sort()) {
  console.log(`  ${cell} — ${rows.length} row(s)`);
  for (const r of rows) {
    const structured = EXAM_STRUCTURES[String(r.exam)];
    const conformant = structured ? Boolean(aufgabeFor(String(r.exam), String(r.section), String(r.taskType))) : null;
    let why: string;
    if (conformant === false) why = `non-conformant taskType ${r.taskType}`;
    else if (conformant === null) why = `⚠ exam not yet structured — INVESTIGATE`;
    else why = `⚠ taskType ${r.taskType} IS conformant — INVESTIGATE`;
    if (conformant !== false) unexplained++;
    console.log(`      - "${r.title}"  [${why}]`);
  }
  console.log("");
}

if (unexplained > 0) {
  console.log(`  ⚠ ${unexplained} row(s) would be deactivated for a reason other than non-conformance.`);
  console.log(`    Do not force the reconcile until each is explained.\n`);
} else if (willDeactivate.length > 0) {
  console.log(`  All ${willDeactivate.length} deactivations are non-conformant predecessors being replaced.\n`);
}
