// RR-401 · puts the factory's Goethe B1 items (src/content/factory/goethe-b1-model-answers.json) into the GoetheItem table, by their
// STABLE ids. Run by the OWNER, by hand. Dry run by default; it writes only with BOTH --confirm AND FACTORY_WRITE=yes.
//   - an item whose id is already there and equal: left alone (re-running changes nothing)
//   - an item whose id is already there but different: listed, NOT changed (a corrected pack needs the owner's word)
//   - the same level + task type + title already live under another id: skipped (no duplicate item)
//   - nothing is ever deleted or deactivated
// The build's seed:prod does NOT run this file and does not read the factory data, so a deploy never writes these items.
// Run (DATABASE_URL set in this process by the owner):
//      npx tsx scripts/factory/seed-goethe-pack.ts                                   (dry run)
//      $env:FACTORY_WRITE="yes"; npx tsx scripts/factory/seed-goethe-pack.ts --confirm
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { PrismaClient, Prisma } from "@prisma/client";
import { seedRowFor, planSeed, writeAllowed } from "../../src/lib/factory/seed-plan";
import type { ModelData } from "../../src/lib/factory/import";

const write = writeAllowed(process.argv, process.env);
const data: ModelData = JSON.parse(readFileSync(join(process.cwd(), "src", "content", "factory", "goethe-b1-model-answers.json"), "utf8"));
const rows = data.items.map(seedRowFor);
const prisma = new PrismaClient();

async function main() {
  const live = await prisma.goetheItem.findMany({ where: { level: "B1", module: { in: ["SCHREIBEN", "SPRECHEN"] } }, select: { id: true, level: true, taskType: true, title: true, prompt: true, payload: true, topicTag: true, timeLimitSeconds: true } });
  const plan = planSeed(rows, live);
  console.log(`factory items ${rows.length} · create ${plan.create.length} · already there and equal ${plan.equal.length} · there but different (NOT changed) ${plan.differs.length} · same title under another id (skipped) ${plan.duplicate.length}`);
  for (const r of plan.create) console.log(`  CREATE ${r.id} · ${r.taskType} · ${r.title}`);
  for (const d of plan.differs) console.log(`  DIFFERS ${d}`);
  for (const d of plan.duplicate) console.log(`  DUPLICATE ${d}`);
  if (!write) { console.log("DRY RUN: nothing written. To write: set FACTORY_WRITE=yes and add --confirm."); return; }
  for (const r of plan.create) await prisma.goetheItem.create({ data: { ...r, payload: r.payload as Prisma.InputJsonValue } });
  const back = await prisma.goetheItem.findMany({ where: { id: { in: rows.map((r) => r.id) } }, select: { id: true, active: true } });
  console.log(`WRITTEN ${plan.create.length}. Read back: ${back.length} of ${rows.length} factory items present, ${back.filter((b) => b.active).length} active.`);
}
main().finally(() => prisma.$disconnect()).catch((e) => { console.error(String(e).slice(0, 300)); process.exit(1); });
