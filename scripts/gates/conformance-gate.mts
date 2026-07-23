// CONFORMANCE GATE — does each item match a REAL task of its own exam?
//
// Run: npm run gate:conformance   (wired into `build`, so it blocks a deploy)
//
// rule7 counts items; title-uniqueness stops duplicates; real-entity hunts brands;
// the engine selftest checks scoring. NONE of them tells you whether an item belongs
// to the exam it is filed under. That gap is how almi-french shipped 121 items
// carrying another exam's parameters, and how almi-swiss served an entire surface as
// a translation of a different exam in a different language.
//
// Checks items against src/lib/exams/exam-structure.ts. Valid values are DERIVED
// from that file, never restated here — a gate that keeps its own copy of the truth
// will eventually disagree with it, and the copy always wins by accident.
//
// ── WHOLE-BANK ITERATION, FROM THE START ────────────────────────────────────
// almi-portuguese's first conformance gate walked the REGISTRY's declared pairs and
// asked the loader for each. A probe found the hole: an item filed under a component
// its exam does not declare was never visited. It did not pass — the gate never saw
// it. INVISIBLE IS WORSE THAN FAILING. So this iterates every authored item and
// validates each against the structure, rather than trusting the structure to
// enumerate what exists.
//
// ── STRICTNESS FOLLOWS SOURCING ─────────────────────────────────────────────
// sourced: true   HARD. The count is published by the authority. An item that does
//                 not fit is fixed; the envelope never bends to match the bank.
// sourced: false  STRUCTURE enforced, COUNT reported only. Our convention is not
//                 evidence, and a gate that enforces our own guess manufactures
//                 proof. Reported as a WARNING so it stays visible and can be pinned.
//
// This is the discipline almi-swiss got wrong in the opposite direction: a length
// floor copied from a sibling failed ten legitimate items on its first run, because
// it had been fitted to a different bank rather than derived from the exam.

import { examBank, groupBy } from "./_bank.mjs";
import {
  EXAM_STRUCTURES,
  UNSTRUCTURED_EXAMS,
  TESTDAF_PRODUCTIVE,
  type Aufgabe,
} from "../../src/lib/exams/exam-structure";
import { EXAM_DEFS } from "../../src/lib/exams/registry";
import type { GermanExam } from "@prisma/client";

const violations: string[] = [];
const warnings: string[] = [];
let checked = 0;
let unstructured = 0;

const PRODUCTIVE_SECTIONS = new Set(["SCHRIFTLICHER_AUSDRUCK", "MUENDLICHER_AUSDRUCK", "SPRECHEN"]);

for (const it of examBank() as any[]) {
  const exam = String(it.exam);
  const section = String(it.section);
  const where = `${exam} ${section} — "${it.title}"`;

  const structure = EXAM_STRUCTURES[exam];
  if (!structure) {
    // Not silently skipped: an unstructured exam is an unchecked exam, and the
    // count is printed at the end so the gap cannot be mistaken for coverage.
    if (!(UNSTRUCTURED_EXAMS as readonly string[]).includes(exam)) {
      violations.push(`${where}\n      exam ${exam} has no structure AND is not listed in UNSTRUCTURED_EXAMS`);
    }
    unstructured++;
    continue;
  }

  checked++;

  const sec = structure[section];
  if (!sec) {
    const declared = Object.keys(structure).join(", ");
    violations.push(`${where}\n      ${section} is not a section of ${exam}; structured sections: ${declared}`);
    continue;
  }

  // ── the item must declare an Aufgabe this section actually has ──
  const aufgabe: Aufgabe | undefined = sec.aufgaben.find((a) => a.key === it.taskType);
  if (!aufgabe) {
    const valid = sec.aufgaben.map((a) => `${a.key} (${a.label}${a.items !== null ? `, ${a.items} items` : ""})`);
    violations.push(
      `${where}\n      taskType ${it.taskType} is not an Aufgabe of ${exam} ${section}.\n` +
        `      Real Aufgaben:\n        - ${valid.join("\n        - ")}`,
    );
    continue;
  }

  // ── objective sections: the item count must match the Aufgabe ──
  if (!PRODUCTIVE_SECTIONS.has(section)) {
    const qs = Array.isArray(it.payload?.questions) ? it.payload.questions.length : null;
    if (qs === null) {
      violations.push(`${where}\n      objective Aufgabe "${aufgabe.label}" has no payload.questions array`);
    } else if (aufgabe.items !== null && qs !== aufgabe.items) {
      const line =
        `${where}\n      "${aufgabe.label}" carries ${aufgabe.items} items in the real exam; this item has ${qs}.`;
      if (aufgabe.sourced) violations.push(line);
      else warnings.push(`${line}\n      (count is CONVENTION, not sourced — reported, not enforced)`);
    }
  }

  // ── TestDaF productive envelopes, where published ──
  if (exam === "TESTDAF" && section === "SCHRIFTLICHER_AUSDRUCK") {
    const spec = (TESTDAF_PRODUCTIVE.SCHRIFTLICHER_AUSDRUCK as Record<string, any>)[it.taskType];
    const wMin = it.payload?.wordMin;
    if (spec && typeof wMin === "number" && wMin < spec.wordMin) {
      violations.push(`${where}\n      wordMin ${wMin} is below the published floor of ${spec.wordMin} for "${aufgabe.label}"`);
    }
    if (spec?.wordMaxSourced && typeof it.payload?.wordMax === "number" && it.payload.wordMax > spec.wordMax) {
      violations.push(`${where}\n      wordMax ${it.payload.wordMax} exceeds the published ceiling of ${spec.wordMax}`);
    }
  }
  if (exam === "TESTDAF" && section === "MUENDLICHER_AUSDRUCK") {
    const { speakSecondsMin, speakSecondsMax } = TESTDAF_PRODUCTIVE.MUENDLICHER_AUSDRUCK;
    const s = it.payload?.speakSeconds;
    if (typeof s === "number" && (s < speakSecondsMin || s > speakSecondsMax)) {
      violations.push(
        `${where}\n      speakSeconds ${s} is outside the published ${speakSecondsMin}–${speakSecondsMax}s range`,
      );
    }
  }
}

// ── COVERAGE: a structured Aufgabe with no items is a task the exam has and we
// do not practise. rule7 cannot see this — it counts a section, and a section can
// hold 16 items that are all the same one of seven Aufgaben.
const byCell = groupBy(examBank() as any[], (r) => `${r.exam}::${r.section}`);
const uncovered: string[] = [];
for (const [exam, structure] of Object.entries(EXAM_STRUCTURES)) {
  for (const [section, sec] of Object.entries(structure)) {
    const present = new Set((byCell.get(`${exam}::${section}`) ?? []).map((r: any) => r.taskType));
    for (const a of sec.aufgaben) {
      if (!present.has(a.key)) uncovered.push(`${exam} ${section} — no items for "${a.label}" (${a.key})`);
    }
  }
}

if (warnings.length) {
  console.log(`\n⚠ ${warnings.length} convention warning(s) — structure enforced, count not:\n`);
  for (const w of warnings.slice(0, 20)) console.log(`  ${w}`);
  if (warnings.length > 20) console.log(`  … and ${warnings.length - 20} more.`);
}

if (violations.length || uncovered.length) {
  console.error(`\n✗ CONFORMANCE GATE FAILED\n`);
  if (violations.length) {
    console.error(`  ${violations.length} item(s) do not match a real task of their exam:\n`);
    for (const v of violations.slice(0, 30)) console.error(`  ${v}\n`);
    if (violations.length > 30) console.error(`  … and ${violations.length - 30} more.\n`);
  }
  if (uncovered.length) {
    console.error(`  ${uncovered.length} Aufgabe(n) the exam has and this product does not practise:\n`);
    for (const u of uncovered) console.error(`     - ${u}`);
    console.error("");
  }
  console.error(`  ${checked} items checked against a recorded structure.`);
  console.error("  Fix the ITEM to a real task of its exam. Never re-file an item under another");
  console.error("  exam or Aufgabe to make this pass, and never widen the structure to fit the bank.\n");
  process.exit(1);
}

console.log(`\n✓ CONFORMANCE GATE: ${checked} items match a real Aufgabe of their exam.`);
if (unstructured) {
  console.log(`  ${unstructured} item(s) belong to exams not yet structured (${UNSTRUCTURED_EXAMS.join(", ")}) — declared, not skipped silently.`);
}
