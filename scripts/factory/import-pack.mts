// RR-401 · the AlmiGoethe factory importer. Reads a factory pack (.md, written and checked by beta-g), gates every item, and writes:
//   - src/content/factory/goethe-b1-model-answers.json  (the app reads it; merged by stable id, so re-importing changes nothing)
//   - the grammar-gate report for beta-g               (--report=<path>)
// It writes NO database row. The items reach the database only through the owner's own run of scripts/factory/seed-goethe-pack.ts;
// the build's seed:prod (scripts/seed/append.ts + exam-append.ts) never reads this data (proved in scripts/factory/factory.test.mts).
// Grammar: LanguageTool's free public API (no key, no cost), at most 1 request every 3.5 s, every answer cached on disk
// (--cache=<dir>, default .factory-cache/, not committed) so a re-import makes no request at all.
// Run: npx tsx scripts/factory/import-pack.mts <pack.md> --report=<GATE_REPORT.md> [--cache=<dir>]
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { parsePack } from "../../src/lib/factory/pack";
import { importPack, mergeData, type Lang, type ModelData } from "../../src/lib/factory/import";
import type { LtMatch } from "../../src/lib/factory/grammar-gate";
import { renderReport } from "../../src/lib/factory/report";
import { ITEMS as SCHREIBEN } from "../seed/schreiben";
import { ITEMS as SPRECHEN } from "../seed/sprechen";

const args = process.argv.slice(2);
const files = args.filter((a) => !a.startsWith("--"));
const reportPath = args.find((a) => a.startsWith("--report="))?.slice(9);
if (files.length !== 1) throw new Error("usage: import-pack.mts <pack.md> --report=<path> [--cache=<dir>]");

const OUT = join(process.cwd(), "src", "content", "factory", "goethe-b1-model-answers.json");
const CACHE = args.find((a) => a.startsWith("--cache="))?.slice(8) ?? join(process.cwd(), ".factory-cache", "languagetool");
mkdirSync(CACHE, { recursive: true });
const key = (text: string, lang: Lang) => createHash("sha256").update(`${lang}\n${text}`).digest("hex");
const cached = (text: string, lang: Lang): LtMatch[] | null => { const f = join(CACHE, `${key(text, lang)}.json`); return existsSync(f) ? JSON.parse(readFileSync(f, "utf8")) : null; };

async function fetchLt(text: string, lang: Lang): Promise<LtMatch[]> {
  for (let tries = 0; tries < 5; tries++) {
    const r = await fetch("https://api.languagetool.org/v2/check", { method: "POST", headers: { "content-type": "application/x-www-form-urlencoded", "user-agent": "AlmiGoethe-content-factory/1.0" }, body: new URLSearchParams({ text, language: lang }) });
    if (r.ok) { const j = (await r.json()) as { matches: LtMatch[] }; return j.matches; }
    console.error(`  LanguageTool ${r.status}, waiting`); await new Promise((z) => setTimeout(z, 20000));
  }
  throw new Error("LanguageTool did not answer");
}

const file = files[0];
const pack = parsePack(readFileSync(file, "utf8"), file.split(/[\\/]/).pop()!);
const existing = [...SCHREIBEN, ...SPRECHEN].map((it) => `${it.level}::${it.taskType}::${it.title}`);

// pass 1: learn every text the gates will check; fetch what is not cached yet
const wanted: { text: string; lang: Lang }[] = [];
importPack(pack, (text, lang) => { wanted.push({ text, lang }); return []; }, existing);
let fetched = 0;
for (const { text, lang } of wanted) {
  if (cached(text, lang)) continue;
  const matches = await fetchLt(text, lang);
  writeFileSync(join(CACHE, `${key(text, lang)}.json`), JSON.stringify(matches));
  fetched++;
  await new Promise((z) => setTimeout(z, 3500));
}
// pass 2: the real import, from the cache only
const res = importPack(pack, (text, lang) => cached(text, lang) ?? (() => { throw new Error("cache miss"); })(), existing);
const prev: ModelData | null = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : null;
const merged = mergeData(prev, res.data);
const body = JSON.stringify(merged, null, 1) + "\n";
const changed = !prev || JSON.stringify(prev, null, 1) + "\n" !== body;
mkdirSync(join(process.cwd(), "src", "content", "factory"), { recursive: true });
if (changed) writeFileSync(OUT, body);
if (reportPath) writeFileSync(reportPath, renderReport(pack, res));
const answers = res.data.items.reduce((n, p) => n + p.answers.length, 0);
console.log(`items imported ${res.data.items.length} · answers imported ${answers} · blocked ${res.blocked.length} · duplicates skipped ${res.skippedDuplicates.length} · texts checked ${res.checkedTexts} · style hints (not blocking) ${res.hints} · LanguageTool requests ${fetched} · data ${changed ? "WRITTEN" : "unchanged"}`);
for (const b of res.notices) console.log(`  NOTICE ${b.where}: ${b.findings!.map((f) => `"${f.text}" (${f.rule})`).join(", ")}`);
for (const b of res.blocked) console.log(`  BLOCKED ${b.where}: ${b.reason}${b.findings ? ` — ${b.findings.map((f) => `"${f.text}" (${f.rule}: ${f.message})`).join(", ")}` : ""}`);
