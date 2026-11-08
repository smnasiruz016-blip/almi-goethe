/** RR-401 · what the owner's seed would do, decided by a pure function (tested without a database) */
import type { ModelItem } from "./import";

export type SeedRow = {
  id: string;
  level: "B1";
  module: "SCHREIBEN" | "SPRECHEN";
  taskType: ModelItem["taskType"];
  title: string;
  prompt: string;
  difficulty: "CORE";
  topicTag: string;
  guidanceNote: null;
  timeLimitSeconds: number;
  payload: ModelItem["payload"];
  active: true;
};
export type LiveRow = { id: string; level: string; taskType: string; title: string; prompt: string; payload: unknown; topicTag: string; timeLimitSeconds: number };

/** the seed writes only with BOTH the --confirm flag AND FACTORY_WRITE=yes; anything else is a dry run */
export const writeAllowed = (argv: string[], env: Record<string, string | undefined>) => argv.includes("--confirm") && env.FACTORY_WRITE === "yes";

/** the GoetheItem row for a factory item. Its id is the factory's stable id, so the app can find its model answers. */
export const seedRowFor = (p: ModelItem): SeedRow => ({
  id: p.id, level: p.level, module: p.module, taskType: p.taskType, title: p.title, prompt: p.prompt, difficulty: "CORE",
  topicTag: p.topicTag, guidanceNote: null, timeLimitSeconds: p.timeLimitSeconds, payload: p.payload, active: true,
});

function canonical(v: unknown): unknown {
  if (Array.isArray(v)) return v.map(canonical);
  if (v && typeof v === "object") return Object.fromEntries(Object.keys(v as object).sort().map((k) => [k, canonical((v as Record<string, unknown>)[k])]));
  return v;
}
const same = (a: unknown, b: unknown) => JSON.stringify(canonical(a)) === JSON.stringify(canonical(b));
const key = (level: string, taskType: string, title: string) => `${level}::${taskType}::${title}`;

/**
 *  - an id already there and equal: left alone (re-running changes nothing)
 *  - an id already there but different: listed, NOT changed (a corrected pack needs the owner's word)
 *  - the same level + task type + title already live under another id (the bank's own dedupe key): skipped, no duplicate
 *  - nothing is ever deleted or deactivated
 */
export function planSeed(rows: SeedRow[], live: LiveRow[]) {
  const byId = new Map(live.map((l) => [l.id, l]));
  const create: SeedRow[] = [], equal: string[] = [], differs: string[] = [], duplicate: string[] = [];
  for (const r of rows) {
    const l = byId.get(r.id);
    if (l) {
      const eq = l.title === r.title && l.prompt === r.prompt && l.taskType === r.taskType && l.topicTag === r.topicTag && l.timeLimitSeconds === r.timeLimitSeconds && same(l.payload, r.payload);
      if (eq) equal.push(r.id); else differs.push(`${r.id}: the live row is not the same as the pack`);
      continue;
    }
    const twin = live.find((x) => key(x.level, x.taskType, x.title) === key(r.level, r.taskType, r.title));
    if (twin) { duplicate.push(`${r.id}: "${r.title}" is already live as ${twin.id}`); continue; }
    create.push(r);
  }
  return { create, equal, differs, duplicate };
}
