// Append-safe seeder. Inserts ONLY items not already in the database, so it is
// safe to run against a populated production DB and is fully idempotent (it runs
// on every deploy via `npm run seed:prod`).
//
// GoetheItem has no natural unique key (id is a cuid), so we dedupe on
// (level + taskType + title) — a title is unique within its task type AT a level.
// Level is part of the key because the same task type recurs across all six levels.
//
//   npm run seed:append          insert missing items
//   npm run seed:append -- --dry preview only, write nothing
//
// Source of truth is the four module seed files — we import their ITEMS arrays so
// there is never a second copy of the content to drift out of sync.

import { PrismaClient } from "@prisma/client";
import { ITEMS as LESEN } from "./lesen";
import { handleSeedFailure } from "./_failure";
import { ITEMS as HOEREN } from "./hoeren";
import { ITEMS as SCHREIBEN } from "./schreiben";
import { ITEMS as SPRECHEN } from "./sprechen";

const prisma = new PrismaClient();
const DRY = process.argv.includes("--dry");

const ALL = [...LESEN, ...HOEREN, ...SCHREIBEN, ...SPRECHEN];

const key = (level: string, taskType: string, title: string) => `${level}::${taskType}::${title}`;

async function main() {
  // Guard against an accidental duplicate (level,taskType,title) in source.
  const sourceKeys = ALL.map((it) => key(it.level as string, it.taskType as string, it.title));
  const dupes = sourceKeys.filter((k, i) => sourceKeys.indexOf(k) !== i);
  if (dupes.length > 0) {
    throw new Error(`Duplicate (level,taskType,title) in seed source: ${[...new Set(dupes)].join(", ")}`);
  }

  const existing = await prisma.goetheItem.findMany({
    select: { level: true, taskType: true, title: true },
  });
  const seen = new Set(existing.map((e) => key(e.level, e.taskType, e.title)));

  const toInsert = ALL.filter(
    (it) => !seen.has(key(it.level as string, it.taskType as string, it.title)),
  );

  const byModule = (rows: { level: string; module: string }[]) =>
    rows.reduce<Record<string, number>>((acc, r) => {
      const k = `${r.level} ${r.module}`;
      acc[k] = (acc[k] ?? 0) + 1;
      return acc;
    }, {});

  console.log(`Source items: ${ALL.length} | already in DB: ${existing.length} | to insert: ${toInsert.length}`);
  const summary = byModule(toInsert as { level: string; module: string }[]);
  for (const t of Object.keys(summary).sort()) {
    console.log(`  + ${t}: ${summary[t]}`);
  }

  if (toInsert.length === 0) {
    console.log("Nothing to insert — database already has every source item.");
    return;
  }
  if (DRY) {
    console.log("\n--dry: no rows written. Re-run without --dry to insert.");
    return;
  }

  const res = await prisma.goetheItem.createMany({ data: toInsert });
  console.log(`\nInserted ${res.count} new item(s). Skipped ${ALL.length - toInsert.length} already present.`);
}

main()
  .catch((e) => handleSeedFailure("seed:append (GoetheItem)", e))
  .finally(() => prisma.$disconnect());
