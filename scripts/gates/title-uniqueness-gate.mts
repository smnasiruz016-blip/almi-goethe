// Title-uniqueness gate — no two items in the same served module share a title.
//
// Run: npm run gate:titles   (wired into `build`, so it blocks a deploy)
//
// ── WHY THE SEED SCRIPTS' OWN CHECK IS NOT ENOUGH ───────────────────────────
// Both seeders already refuse a duplicate, but each on its INSERT key:
//   append.ts        (level, taskType, title)
//   exam-append.ts   (exam, level, section, title)   ← also the ExamItem @@unique
// Those keys protect the DATABASE. They do not protect the LEARNER. Two Goethe items
// at the same level and module with the same title but a different taskType pass the
// seeder cleanly and then sit side by side in one practice module, identically named.
//
// So this gate checks the axis the learner actually experiences — the served module —
// which is deliberately COARSER than the insert key for the Goethe bank and equal to
// it for the exam bank. Checking only the insert key would ratify exactly the case
// the seeder cannot see.
//
// ── WHY NOT GLOBAL UNIQUENESS ───────────────────────────────────────────────
// Titles SHOULD repeat across modules: "Beim Arzt" is a reasonable title for a
// reading item at B1 and a listening item at B1, and they are different tasks. A
// global check would force cosmetic renaming and teach authors to defeat the gate
// with a suffix. almi-french learned this the other way round: a title-only match
// across families destroyed two items that legitimately shared a name with items in
// a different family. Match on the axis that means something, never on the title alone.

import { goetheBank, examBank, groupBy, report } from "./_bank.mjs";

const violations: string[] = [];
let checked = 0;

function scan(rows: { title: string }[], cellOf: (r: any) => string, bank: string) {
  for (const [cell, items] of groupBy(rows, cellOf)) {
    const seen = new Map<string, number>();
    for (const it of items) {
      checked++;
      const n = (seen.get(it.title) ?? 0) + 1;
      seen.set(it.title, n);
      if (n === 2) {
        violations.push(
          `${bank} ${cell}\n      duplicate title: "${it.title}"\n` +
            `      two items in one served module cannot share a name — a learner sees the same\n` +
            `      heading twice and cannot tell which task they already did.`,
        );
      }
    }
  }
}

scan(goetheBank() as any[], (r) => `${r.level}/${r.module}`, "Goethe-Zertifikat");
scan(examBank() as any[], (r) => `${r.exam}/${r.section}`, "Exam engine");

report({
  gate: "TITLE-UNIQUENESS GATE",
  violations,
  checkedLabel: `${checked} items carry a title unique within their served module.`,
  passNote:
    "Scoped to (level × module) and (exam × section) — titles may repeat ACROSS modules, which is correct.",
});
