// Seeder for the exam engines (ExamItem). Runs on every deploy via `seed:prod`.
//
//   npm run seed:exams           reconcile the database to the seed source
//   npm run seed:exams -- --dry  preview only, write nothing
//
// Source of truth = the per-exam seed files; we import their ITEMS arrays so the
// content is never duplicated.
//
// ── WHY THIS IS NO LONGER INSERT-ONLY ───────────────────────────────────────
// It used to insert rows missing from the DB and do nothing else, deduping on
// (exam, level, section, title). Against a bank that only ever GROWS that is fine.
// Against a bank being CORRECTED it fails in two directions at once, and both were
// about to bite when 128 non-conformant items were re-authored:
//
//   1. RE-AUTHORED CONTENT WAS NEVER APPLIED. Fix an item's taskType, questions or
//      payload but keep its title, and the identity key still matches — so the row
//      counts as "already present" and is skipped. The database keeps the OLD,
//      broken payload forever, while the seed source and every gate read green.
//      A gate that checks the source and not what is served proves the key matches
//      the payload, not that the payload matches reality.
//
//   2. RETITLED ITEMS ORPHANED THEIR PREDECESSORS. Change a title and the new row
//      inserts while the old one stays live and servable. almi-french hit exactly
//      this: the bank silently grew to 775 rows where 733 were authored.
//
// So there are four phases: INSERT what is missing, UPDATE what changed, DEACTIVATE
// what the source no longer contains, and VERIFY that the result matches the source.
//
// ── DEACTIVATE, NEVER DELETE ────────────────────────────────────────────────
// Rows leave the served bank by `active: false`, not by deletion. An ExamAttempt
// references its item; deleting the item would destroy a learner's own history to
// tidy up our content. Deactivation removes it from every pick (pick.ts filters on
// active) while the attempt stays readable.
//
// ── FAIL-CLOSED ON UNEXPECTED DRIFT ─────────────────────────────────────────
// A reconciliation that can deactivate rows can also empty the bank — a bad import,
// a half-written seed file, a renamed section. So a deactivation that is large in
// PROPORTION or in ABSOLUTE terms stops the deploy and asks for a human. The escape
// hatch is an explicit environment variable, never a flag someone can add by reflex.

import { PrismaClient } from "@prisma/client";
import { ITEMS as TESTDAF } from "./exams/testdaf";
import { ITEMS as TESTDAF_LV } from "./exams/testdaf-leseverstehen";
import { ITEMS as TESTDAF_HV } from "./exams/testdaf-hoerverstehen";
import { ITEMS as TESTDAF_SA } from "./exams/testdaf-schriftlicher-ausdruck";
import { ITEMS as TESTDAF_MA } from "./exams/testdaf-muendlicher-ausdruck";
import { handleSeedFailure } from "./_failure";
import { isDirectRun } from "./_entry";
import { ITEMS as C1H } from "./exams/telc-c1-hochschule";
import { ITEMS as B1 } from "./exams/telc-b1";
import { ITEMS as B1_LV } from "./exams/telc-b1-leseverstehen";
import { ITEMS as B1_SB } from "./exams/telc-b1-sprachbausteine";
import { ITEMS as B2 } from "./exams/telc-b2";

const prisma = new PrismaClient();
const DRY = process.argv.includes("--dry");

const ALL = [...TESTDAF, ...TESTDAF_LV, ...TESTDAF_HV, ...TESTDAF_SA, ...TESTDAF_MA, ...C1H, ...B1, ...B1_LV, ...B1_SB, ...B2];

/** Identity: what makes two rows "the same item". Content is NOT part of it —
 *  that is the point, so a corrected item updates in place rather than inserting
 *  a duplicate beside the row it was meant to replace. */
const key = (exam: string, level: string, section: string, title: string) =>
  `${exam}::${level}::${section}::${title}`;

/** The content fields a re-author can change. Compared as canonical JSON so an
 *  unchanged item is not rewritten on every deploy. */
function contentOf(it: any) {
  return JSON.stringify({
    taskType: it.taskType,
    difficulty: it.difficulty ?? "CORE",
    prompt: it.prompt,
    payload: it.payload,
    guidanceNote: it.guidanceNote ?? null,
    timeLimitSeconds: it.timeLimitSeconds ?? 0,
    topicTag: it.topicTag ?? "general",
  });
}

// Refuse a reconciliation this large without an explicit human decision.
export const MAX_DEACTIVATE_FRACTION = 0.15;
export const MAX_DEACTIVATE_ROWS = 120;
const FORCE = process.env.RECONCILE_FORCE === "1";

/** Should this reconciliation stop and ask for a human?
 *
 *  EXPORTED AND PURE so the safety limit can be proven to REFUSE without a database.
 *  A guard that has only ever been observed allowing things is not a guard — and
 *  this one cannot be exercised on a developer machine, where DATABASE_URL is a
 *  Vercel *sensitive* variable that `env pull` will not return. Without this
 *  function the limit would ship having never once been seen to fire. */
export function refusesReconcile(deactivate: number, live: number, force: boolean): boolean {
  if (deactivate === 0) return false;
  if (force) return false;
  const fraction = live === 0 ? 0 : deactivate / live;
  return fraction > MAX_DEACTIVATE_FRACTION || deactivate > MAX_DEACTIVATE_ROWS;
}

async function main() {
  const sourceKeys = ALL.map((it) =>
    key(it.exam as string, it.level as string, it.section as string, it.title),
  );
  const dupes = sourceKeys.filter((k, i) => sourceKeys.indexOf(k) !== i);
  if (dupes.length > 0) {
    throw new Error(`Duplicate (exam,level,section,title) in seed source: ${[...new Set(dupes)].join(", ")}`);
  }

  const existing = await prisma.examItem.findMany();
  const byKey = new Map(existing.map((e) => [key(e.exam, e.level, e.section, e.title), e]));
  const sourceKeySet = new Set(sourceKeys);

  const toInsert: any[] = [];
  const toUpdate: { id: string; it: any; where: string }[] = [];

  for (const it of ALL) {
    const k = key(it.exam as string, it.level as string, it.section as string, it.title);
    const row = byKey.get(k);
    if (!row) {
      toInsert.push(it);
      continue;
    }
    if (contentOf(row) !== contentOf(it) || row.active === false) {
      toUpdate.push({ id: row.id, it, where: `${it.exam} ${it.section} — "${it.title}"` });
    }
  }

  // Live rows the source no longer contains.
  const toDeactivate = existing.filter(
    (e) => e.active && !sourceKeySet.has(key(e.exam, e.level, e.section, e.title)),
  );

  const liveCount = existing.filter((e) => e.active).length;
  console.log(
    `Source ${ALL.length} | in DB ${existing.length} (${liveCount} active) | ` +
      `insert ${toInsert.length} · update ${toUpdate.length} · deactivate ${toDeactivate.length}`,
  );

  const bySection = toInsert.reduce<Record<string, number>>((acc, r) => {
    const k = `${r.exam} ${r.section}`;
    acc[k] = (acc[k] ?? 0) + 1;
    return acc;
  }, {});
  for (const t of Object.keys(bySection).sort()) console.log(`  + ${t}: ${bySection[t]}`);
  for (const u of toUpdate.slice(0, 20)) console.log(`  ~ ${u.where}`);
  if (toUpdate.length > 20) console.log(`  ~ … and ${toUpdate.length - 20} more updates`);

  // ── the guard, BEFORE anything is written ──
  if (toDeactivate.length > 0) {
    console.log(`\n  ${toDeactivate.length} row(s) are live but no longer in the seed source:`);
    for (const d of toDeactivate.slice(0, 40)) {
      console.log(`  - ${d.exam} ${d.section} [${d.taskType}] "${d.title}"`);
    }
    if (toDeactivate.length > 40) console.log(`  - … and ${toDeactivate.length - 40} more`);

    const fraction = liveCount === 0 ? 0 : toDeactivate.length / liveCount;
    const tooMany = refusesReconcile(toDeactivate.length, liveCount, false);
    if (tooMany && !FORCE) {
      throw new Error(
        `REFUSING TO RECONCILE: ${toDeactivate.length} of ${liveCount} active rows ` +
          `(${(fraction * 100).toFixed(1)}%) would be deactivated, over the ` +
          `${MAX_DEACTIVATE_FRACTION * 100}% / ${MAX_DEACTIVATE_ROWS}-row safety limit.\n` +
          `This is what a broken import looks like. Read the list above; if it is ` +
          `genuinely intended, re-run with RECONCILE_FORCE=1.`,
      );
    }
    if (tooMany && FORCE) {
      console.log(`\n  RECONCILE_FORCE=1 — proceeding past the safety limit deliberately.`);
    }
  }

  if (DRY) {
    console.log("\n--dry: no rows written.");
    return;
  }

  if (toInsert.length > 0) {
    const res = await prisma.examItem.createMany({ data: toInsert });
    console.log(`\nInserted ${res.count} item(s).`);
  }
  for (const u of toUpdate) {
    await prisma.examItem.update({
      where: { id: u.id },
      data: {
        taskType: u.it.taskType,
        difficulty: u.it.difficulty ?? "CORE",
        prompt: u.it.prompt,
        payload: u.it.payload,
        guidanceNote: u.it.guidanceNote ?? null,
        timeLimitSeconds: u.it.timeLimitSeconds ?? 0,
        topicTag: u.it.topicTag ?? "general",
        active: true,
      },
    });
  }
  if (toUpdate.length) console.log(`Updated ${toUpdate.length} item(s) in place.`);

  if (toDeactivate.length > 0) {
    const res = await prisma.examItem.updateMany({
      where: { id: { in: toDeactivate.map((d) => d.id) } },
      data: { active: false },
    });
    console.log(`Deactivated ${res.count} item(s) (kept, not deleted — attempts reference them).`);
  }
}

/** The post-deploy check that makes the seed a claim about the SERVED bank and not
 *  just about the source file. Runs against the live database after writing. */
async function verify() {
  const active = await prisma.examItem.count({ where: { active: true } });
  if (active !== ALL.length) {
    throw new Error(
      `SEED VERIFY FAILED: ${active} active rows in the database, ${ALL.length} in the seed source.\n` +
        `The bank that is SERVED does not match the bank that was AUTHORED.`,
    );
  }
  console.log(`Verified: ${active} active rows match ${ALL.length} authored items.`);
}

// Guarded: importing this module (the reconciliation-guard proof does, to reach
// refusesReconcile) must not also run a seed against the live database.
if (isDirectRun(import.meta.url)) {
  main()
    .then(() => (DRY ? undefined : verify()))
    .catch((e) => handleSeedFailure("seed:exams (ExamItem)", e))
    .finally(() => prisma.$disconnect());
}
