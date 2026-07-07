// Append-safe seeder for the NEW exam engines (ExamItem). Mirrors append.ts but
// dedupes on (exam + level + section + title) — the ExamItem @@unique key. Safe to
// run against a populated production DB; idempotent; runs on every deploy.
//
//   npm run seed:exams           insert missing items
//   npm run seed:exams -- --dry  preview only, write nothing
//
// Source of truth = the per-exam seed files; we import their ITEMS arrays so the
// content is never duplicated.

import { PrismaClient } from "@prisma/client";
import { ITEMS as TESTDAF } from "./exams/testdaf";
import { ITEMS as C1H } from "./exams/telc-c1-hochschule";
import { ITEMS as B1 } from "./exams/telc-b1";
import { ITEMS as B2 } from "./exams/telc-b2";

const prisma = new PrismaClient();
const DRY = process.argv.includes("--dry");

const ALL = [...TESTDAF, ...C1H, ...B1, ...B2];

const key = (exam: string, level: string, section: string, title: string) =>
  `${exam}::${level}::${section}::${title}`;

async function main() {
  const sourceKeys = ALL.map((it) =>
    key(it.exam as string, it.level as string, it.section as string, it.title),
  );
  const dupes = sourceKeys.filter((k, i) => sourceKeys.indexOf(k) !== i);
  if (dupes.length > 0) {
    throw new Error(`Duplicate (exam,level,section,title) in seed source: ${[...new Set(dupes)].join(", ")}`);
  }

  const existing = await prisma.examItem.findMany({
    select: { exam: true, level: true, section: true, title: true },
  });
  const seen = new Set(existing.map((e) => key(e.exam, e.level, e.section, e.title)));

  const toInsert = ALL.filter(
    (it) => !seen.has(key(it.exam as string, it.level as string, it.section as string, it.title)),
  );

  const bySection = toInsert.reduce<Record<string, number>>((acc, r) => {
    const k = `${r.exam} ${r.section}`;
    acc[k] = (acc[k] ?? 0) + 1;
    return acc;
  }, {});

  console.log(`Source items: ${ALL.length} | already in DB: ${existing.length} | to insert: ${toInsert.length}`);
  for (const t of Object.keys(bySection).sort()) console.log(`  + ${t}: ${bySection[t]}`);

  if (toInsert.length === 0) {
    console.log("Nothing to insert — database already has every source item.");
    return;
  }
  if (DRY) {
    console.log("\n--dry: no rows written. Re-run without --dry to insert.");
    return;
  }

  const res = await prisma.examItem.createMany({ data: toInsert });
  console.log(`\nInserted ${res.count} new item(s). Skipped ${ALL.length - toInsert.length} already present.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
