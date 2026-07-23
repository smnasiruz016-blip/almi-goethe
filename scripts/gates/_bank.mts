// THE WHOLE BANK — one loader every gate reads, for both item banks in this repo.
//
// WHY A SHARED LOADER, AND WHY IT LOADS EVERYTHING
//
// almi-portuguese shipped a conformance gate that walked the REGISTRY's declared
// (exam, skill) pairs and asked the loader for each one. A probe found the hole: an
// item filed under a component its exam does not declare was never visited at all.
// It did not pass the gate — the gate never saw it. INVISIBLE IS WORSE THAN FAILING.
//
// So every gate here starts from the same premise: load every authored item in the
// repo, then validate each one against the registry. A gate that iterates the
// registry can only ever check the items it already expects to exist.
//
// This repo has TWO banks, and both are authored as TypeScript seed modules
// exporting an ITEMS array. Reading them needs no DATABASE_URL — deliberately, since
// the production URL is a Vercel *sensitive* variable that `env pull` will not
// return, so any gate that needed the database could not run in CI or locally.
//
//   GOETHE bank  → GoetheItem   (Goethe-Zertifikat A1–C2 × LESEN/HOEREN/SCHREIBEN/SPRECHEN)
//   EXAM bank    → ExamItem     (the separate German-exam engines: TestDaF, telc, …)
//
// The two are NOT merged. They have different keys, different scoring philosophies
// and different registries; a gate that treated them as one list would have to
// invent a common vocabulary neither exam uses.

import { ITEMS as LESEN } from "../seed/lesen";
import { ITEMS as HOEREN } from "../seed/hoeren";
import { ITEMS as SCHREIBEN } from "../seed/schreiben";
import { ITEMS as SPRECHEN } from "../seed/sprechen";

import { ITEMS as TESTDAF } from "../seed/exams/testdaf";
import { ITEMS as TESTDAF_LV } from "../seed/exams/testdaf-leseverstehen";
import { ITEMS as TESTDAF_HV } from "../seed/exams/testdaf-hoerverstehen";
import { ITEMS as TESTDAF_SA } from "../seed/exams/testdaf-schriftlicher-ausdruck";
import { ITEMS as TESTDAF_MA } from "../seed/exams/testdaf-muendlicher-ausdruck";
import { ITEMS as TELC_C1H } from "../seed/exams/telc-c1-hochschule";
import { ITEMS as TELC_B1 } from "../seed/exams/telc-b1";
import { ITEMS as TELC_B1_LV } from "../seed/exams/telc-b1-leseverstehen";
import { ITEMS as TELC_B1_SB } from "../seed/exams/telc-b1-sprachbausteine";
import { ITEMS as TELC_B1_HV } from "../seed/exams/telc-b1-hoerverstehen";
import { ITEMS as TELC_B1_SA } from "../seed/exams/telc-b1-schriftlicher-ausdruck";
import { ITEMS as TELC_B1_SP } from "../seed/exams/telc-b1-sprechen";
import { ITEMS as TELC_B2 } from "../seed/exams/telc-b2";
import { ITEMS as DTZ_HV } from "../seed/exams/dtz-hoeren";
import { ITEMS as DTZ_LV } from "../seed/exams/dtz-lesen";
import { ITEMS as DTZ_SA } from "../seed/exams/dtz-schreiben";
import { ITEMS as DTZ_SP } from "../seed/exams/dtz-sprechen";
import { ITEMS as EINB } from "../seed/exams/einbuergerungstest";
import { ITEMS as DSH_HV } from "../seed/exams/dsh-hoerverstehen";
import { ITEMS as DSH_LV } from "../seed/exams/dsh-leseverstehen";
import { ITEMS as DSH_WS } from "../seed/exams/dsh-strukturen";
import { ITEMS as DSH_TP } from "../seed/exams/dsh-textproduktion";
import { ITEMS as DSH_SP } from "../seed/exams/dsh-muendlich";

import type { Prisma } from "@prisma/client";

export type GoetheRow = Prisma.GoetheItemCreateManyInput;
export type ExamRow = Prisma.ExamItemCreateManyInput;

/** Every authored Goethe-Zertifikat item, from all four module seed files. */
export function goetheBank(): GoetheRow[] {
  return [...LESEN, ...HOEREN, ...SCHREIBEN, ...SPRECHEN];
}

/** Every authored exam-engine item, from all per-exam seed files.
 *
 *  ⚠️ WHEN A NEW ENGINE IS ADDED, ITS SEED FILE MUST BE IMPORTED HERE. That is the
 *  one manual step, and it is the one that can silently un-gate a whole exam: an
 *  engine whose items are never loaded is an engine no gate checks. The rule7 gate
 *  is the backstop — it enumerates modules from the REGISTRY, so an exam that is
 *  registered but absent from this list fails as "0 items", loudly, rather than
 *  disappearing from the counts. */
export function examBank(): ExamRow[] {
  return [...TESTDAF, ...TESTDAF_LV, ...TESTDAF_HV, ...TESTDAF_SA, ...TESTDAF_MA, ...TELC_C1H, ...TELC_B1, ...TELC_B1_LV, ...TELC_B1_SB, ...TELC_B1_HV, ...TELC_B1_SA, ...TELC_B1_SP, ...TELC_B2, ...DTZ_HV, ...DTZ_LV, ...DTZ_SA, ...DTZ_SP, ...EINB, ...DSH_HV, ...DSH_LV, ...DSH_WS, ...DSH_TP, ...DSH_SP];
}

/** Group rows by a key, preserving insertion order of first appearance. */
export function groupBy<T>(rows: T[], keyFn: (r: T) => string): Map<string, T[]> {
  const m = new Map<string, T[]>();
  for (const r of rows) {
    const k = keyFn(r);
    const cur = m.get(k);
    if (cur) cur.push(r);
    else m.set(k, [r]);
  }
  return m;
}

/** Uniform gate exit: print the violations and fail the build, or confirm and pass. */
export function report(opts: {
  gate: string;
  violations: string[];
  checkedLabel: string;
  passNote?: string;
  max?: number;
}): void {
  const { gate, violations, checkedLabel, passNote, max = 40 } = opts;
  if (violations.length > 0) {
    console.error(`\n✗ ${gate} FAILED — ${violations.length} violation(s).\n`);
    for (const v of violations.slice(0, max)) console.error(`  ${v}`);
    if (violations.length > max) console.error(`  … and ${violations.length - max} more.`);
    console.error("");
    process.exit(1);
  }
  console.log(`✓ ${gate}: ${checkedLabel}`);
  if (passNote) console.log(`  ${passNote}`);
}
