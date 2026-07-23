// Per-section / per-Aufgabe ledger for the exam banks.
//
// Run: npm run ledger
//
// rule7 checks the floor and conformance checks the shape; neither PRINTS the
// distribution. This does, because the depth policy has two numbers (>=15 per
// section, >=3 per Aufgabe) and the only way to see both at once is to lay them
// side by side. A section can sit comfortably above 15 while one of its seven
// Aufgaben holds a single token item — the "aggregate masks a thin module" failure,
// one level finer than rule7 counts.

import { examBank, groupBy } from "./_bank.mjs";
import { EXAM_STRUCTURES } from "../../src/lib/exams/exam-structure";

const MIN_SECTION = 15;
const MIN_AUFGABE = 3;

const rows = examBank() as any[];
const byCell = groupBy(rows, (r) => `${r.exam}::${r.section}`);

let bad = 0;
for (const [exam, structure] of Object.entries(EXAM_STRUCTURES)) {
  console.log(`\n${exam}`);
  for (const [section, sec] of Object.entries(structure)) {
    const items = byCell.get(`${exam}::${section}`) ?? [];
    const secFlag = items.length >= MIN_SECTION ? "ok" : "LOW";
    if (items.length < MIN_SECTION) bad++;
    console.log(`  ${section.padEnd(24)} ${String(items.length).padStart(3)} items  [${secFlag}]`);
    for (const a of sec.aufgaben) {
      const n = items.filter((r) => r.taskType === a.key).length;
      const flag = n === 0 ? "NONE" : n < MIN_AUFGABE ? "THIN" : "  ok";
      if (n < MIN_AUFGABE) bad++;
      const want = a.items === null ? "—" : `${a.items} q`;
      const got = items.filter((r) => r.taskType === a.key).map((r) => (Array.isArray(r.payload?.questions) ? r.payload.questions.length : "—"));
      const qs = [...new Set(got)].join("/");
      console.log(`      ${flag}  ${String(n).padStart(2)}x  ${a.label.padEnd(46)} spec ${want.padEnd(5)} actual ${qs || "—"}`);
    }
  }
}

console.log(`\n${rows.length} exam items total · ${bad} cell(s) below policy (>=${MIN_SECTION}/section, >=${MIN_AUFGABE}/Aufgabe)\n`);
