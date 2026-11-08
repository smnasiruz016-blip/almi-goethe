// RR-401 · proof for the AlmiGoethe content factory. No network, no database: LanguageTool is replaced by fixtures, the database
// by an in-memory list. Run: npm run gate:factory:proof   (wired into `gates` and `build`)
//
// What it proves:
//   1. word counts: every Schreiben model counts exactly what the pack's table says (without greeting and closing)
//   2. a blocked item stays out (German spelling error, task-text error, a wrong table count, missing low-level notes)
//   3. the low level ("nicht bestanden") is not grammar-checked, but its notes must exist and name a mistake
//   4. the English notes: blocked only when British AND American both flag it; quoted German never blocks
//   5. the import is idempotent (same pack → byte-identical data; the committed data is what the pack gives)
//   6. the owner's seed: a dry run writes nothing; the write is idempotent; nothing is ever changed or removed
//   7. the build's seed:prod never reads the factory data, so a deploy cannot write these items by itself
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parsePack, countedWords, answerText } from "../../src/lib/factory/pack";
import { importPack, mergeData, plainNote, type Lang, type ModelData } from "../../src/lib/factory/import";
import type { LtMatch } from "../../src/lib/factory/grammar-gate";
import { planSeed, seedRowFor, writeAllowed, type LiveRow } from "../../src/lib/factory/seed-plan";
import { ITEMS as SCHREIBEN } from "../seed/schreiben";
import { ITEMS as SPRECHEN } from "../seed/sprechen";
import { ITEMS as LESEN } from "../seed/lesen";
import { ITEMS as HOEREN } from "../seed/hoeren";

const root = process.cwd();
const PACK_FILE = "AlmiGoethe_Pack1.md";
const md = readFileSync(join(root, "scripts", "factory", "fixtures", PACK_FILE), "utf8");
const pack = parsePack(md, PACK_FILE);
const existing = [...SCHREIBEN, ...SPRECHEN].map((it) => `${it.level}::${it.taskType}::${it.title}`);

let failures = 0;
const check = (label: string, ok: boolean, detail = "") => {
  if (ok) console.log(`  ✓ ${label}`);
  else { failures++; console.error(`  ✗ ${label}${detail ? ` — ${detail}` : ""}`); }
};

const clean = (): LtMatch[] => [];
const typo = (text: string, word: string, category = "TYPOS"): LtMatch => ({ offset: text.indexOf(word), length: word.length, message: "planted", rule: { id: "PLANTED", issueType: category === "TYPOS" ? "misspelling" : "grammar", category: { id: category } } });

console.log("AlmiGoethe factory — proof\n");

// 1. word counts
const schreiben = pack.items.filter((i) => i.module === "SCHREIBEN");
let rows = 0, equal = 0;
for (const it of schreiben) for (const a of it.answers) {
  rows++;
  const t = pack.wordTable.find((r) => r.number === it.number && r.level === a.level);
  if (t && t.total === countedWords(it, a)) equal++;
  else console.error(`    Aufgabe ${it.number} ${a.level}: counted ${countedWords(it, a)}, table ${t?.total}`);
}
check(`pack parsed: 11 items (8 Schreiben, 3 Sprechen), 19 table rows`, pack.items.length === 11 && schreiben.length === 8 && pack.wordTable.length === 19, `${pack.items.length} items, ${pack.wordTable.length} rows`);
check(`word count: ${equal} of ${rows} Schreiben models equal the pack's table`, rows === 19 && equal === 19);

// a clean import: everything in
const base = importPack(pack, clean, existing);
const answers = base.data.items.reduce((n, i) => n + i.answers.length, 0);
check(`clean import: 11 items, 22 models, 0 blocked, 0 duplicates`, base.data.items.length === 11 && answers === 22 && base.blocked.length === 0 && base.skippedDuplicates.length === 0, `${base.data.items.length} items, ${answers} models, blocked ${base.blocked.map((b) => b.where + ": " + b.reason).join("; ")}`);

// 2. a planted German spelling error in one sehr gut model: that model stays out, the item keeps its other models
const i12 = pack.items.find((i) => i.number === "1.2")!;
const sg12 = answerText(i12.answers.find((a) => a.level === "sehr gut")!);
const r2 = importPack(pack, (text, lang) => (lang === "de-DE" && text === sg12 ? [typo(text, "Hütte")] : []), existing);
const item12 = r2.data.items.find((i) => i.provenance.number === "1.2");
check("planted German spelling error: the sehr gut model is blocked and stays out", r2.blocked.some((b) => b.where.includes("Aufgabe 1.2") && b.where.includes("sehr gut")) && !!item12 && !item12.answers.some((a) => a.level === "sehr gut") && item12.answers.some((a) => a.level === "gut"));

// a planted error in the task text: the whole item stays out
const i32 = r2.data.items.length && pack.items.find((i) => i.number === "3.2")!;
const r3 = importPack(pack, (text, lang) => (lang === "de-DE" && text.includes("Intensivkurs Deutsch machen.") && !text.includes("Sehr geehrte") ? [typo(text, "Sprachschule", "GRAMMAR")] : []), existing);
check("planted error in a task text: the whole item stays out", !!i32 && !r3.data.items.some((i) => i.provenance.number === "3.2") && r3.blocked.some((b) => b.where.includes("Aufgabe 3.2") && b.where.includes("task text")));

// a German punctuation error blocks (a missing comma is an error in German)
const r3b = importPack(pack, (text, lang) => (lang === "de-DE" && text === sg12 ? [typo(text, "Hütte", "PUNCTUATION")] : []), existing);
check("a German punctuation error blocks", r3b.blocked.some((b) => b.where.includes("Aufgabe 1.2")));
// typography (quote marks) never blocks
const r3c = importPack(pack, (text, lang) => (lang === "de-DE" ? [{ ...typo(text, text.slice(0, 3)), rule: { id: "TYPOGRAFISCHE_ANFUEHRUNGSZEICHEN", issueType: "typographical", category: { id: "TYPOGRAPHY" } } }] : []), existing);
check("typography hints never block", r3c.blocked.length === 0 && r3c.hints > 0);
// the hedged "request with a question mark" hint is reported to beta-g, not blocked
const r3d = importPack(pack, (text, lang) => (lang === "de-DE" && text === sg12 ? [{ ...typo(text, "Hütte", "PUNCTUATION"), rule: { id: "AUFFORDERUNG_MIT_FRAGEZEICHEN", issueType: "typographical", category: { id: "PUNCTUATION" } } }] : []), existing);
check("AUFFORDERUNG_MIT_FRAGEZEICHEN is a notice for beta-g, not a block", r3d.blocked.length === 0 && r3d.notices.length === 1);
// an unpaired quote mark (filed under PUNCTUATION) blocks again: beta-g fixed every „…" in Pack 1
const r3e = importPack(pack, (text, lang) => (lang === "de-DE" && text === sg12 ? [{ ...typo(text, "Hütte", "PUNCTUATION"), rule: { id: "DE_UNPAIRED_QUOTES", issueType: "typographical", category: { id: "PUNCTUATION" } } }] : []), existing);
check("an unpaired „ quote mark blocks", r3e.blocked.some((b) => b.where.includes("Aufgabe 1.2")) && r3e.notices.length === 0);
// Sprechen Teil 3: the German task box is shown before the English line
const t3 = base.data.items.find((i) => i.provenance.number === "T3")!;
check("Sprechen Teil 3 shows the German task box, then the English line", "taskPrompt" in t3.payload && t3.payload.taskPrompt.startsWith("Ihre Partnerin / Ihr Partner hat zum Thema „Fremdsprachen im Kindergarten“ präsentiert.") && t3.payload.taskPrompt.includes("\nTask: after your partner's presentation"));
check("no „ in the pack is closed by a straight quote", !/„[^“"\n]*"/.test(md));

// a wrong table count: that model stays out
const tampered = parsePack(md.replace("| Aufgabe 2.2 | sehr gut | 82 |", "| Aufgabe 2.2 | sehr gut | 83 |"), PACK_FILE);
const r4 = importPack(tampered, clean, existing);
check("a word count that differs from the table: blocked, stays out", r4.blocked.some((b) => b.where.includes("Aufgabe 2.2") && b.reason.includes("word count differs")) && !r4.data.items.find((i) => i.provenance.number === "2.2")!.answers.some((a) => a.level === "sehr gut"));

// 3. nicht bestanden: not grammar-checked, but its notes must exist and name a mistake
const i11 = pack.items.find((i) => i.number === "1.1")!;
const nb11 = answerText(i11.answers.find((a) => a.level === "nicht bestanden")!);
const r5 = importPack(pack, (text, lang) => (lang === "de-DE" && text === nb11 ? [typo(text, "umgezogen", "GRAMMAR")] : []), existing);
check("nicht bestanden is not grammar-checked: its planted mistake does not block it", r5.blocked.length === 0 && r5.data.items.find((i) => i.provenance.number === "1.1")!.answers.some((a) => a.level === "nicht bestanden"));
const noNotes = parsePack(md.replace(/\*\*Notes \(nicht bestanden\):\*\* the wrong register[^\n]*/, "**Notes (nicht bestanden):**"), PACK_FILE);
const r6 = importPack(noNotes, clean, existing);
check("nicht bestanden without notes: blocked, stays out", r6.blocked.some((b) => b.where.includes("Aufgabe 3.1") && b.reason.includes("the notes are missing")) && !r6.data.items.find((i) => i.provenance.number === "3.1")!.answers.some((a) => a.level === "nicht bestanden"));
const unnamed = parsePack(md.replace("(*Hallo*, *Sorry*, no formal closing), a word-order error (*morgen ich kann*; correct: *morgen kann ich*)", "(no formal closing), a word-order error"), PACK_FILE);
const r6b = importPack(unnamed, clean, existing);
check("nicht bestanden notes that name no mistake: blocked", r6b.blocked.some((b) => b.where.includes("Aufgabe 3.1") && b.reason.includes("name no mistake")));

// 4. English notes
const notes12 = i12.answers.find((a) => a.level === "gut")!.notes.map(plainNote).join("\n");
const gbOnly = importPack(pack, (text, lang) => (lang === "en-GB" && text === notes12 ? [typo(text, "vocabulary")] : []), existing);
check("a note flagged only in British English does not block", gbOnly.blocked.length === 0);
const both = importPack(pack, (text, lang) => (lang !== "de-DE" && text === notes12 ? [typo(text, "vocabulary")] : []), existing);
check("a note flagged in British AND American English blocks", both.blocked.some((b) => b.where.includes("Aufgabe 1.2") && b.where.includes("notes")));
const notes11 = i11.answers.find((a) => a.level === "gut")!.notes.map(plainNote).join("\n");
const quoted = importPack(pack, (text, lang) => (lang !== "de-DE" && text === notes11 ? [typo(text, "entfernt")] : []), existing);
check("quoted German inside a note never blocks", quoted.blocked.length === 0 && notes11.includes("“weit von meiner Arbeit entfernt”"));

// a title already in the bank is skipped, not imported twice
const dupKey = `B1::SCHREIBEN_MESSAGE::${base.data.items.find((i) => i.provenance.number === "1.1")!.title}`;
const r7 = importPack(pack, clean, [...existing, dupKey]);
check("an item whose title is already in the bank is skipped", r7.skippedDuplicates.length === 1 && r7.data.items.length === 10);

// 5. idempotent
const again = importPack(pack, clean, existing);
check("import twice: byte-identical data", JSON.stringify(again.data) === JSON.stringify(base.data));
check("merge into itself: byte-identical", JSON.stringify(mergeData(base.data, base.data)) === JSON.stringify(base.data));
const committed: ModelData = JSON.parse(readFileSync(join(root, "src", "content", "factory", "goethe-b1-model-answers.json"), "utf8"));
const fresh = new Map(base.data.items.map((i) => [i.id, JSON.stringify(i)]));
check(`the committed data (${committed.items.length} items) is exactly what the pack gives`, committed.items.length > 0 && committed.items.every((i) => fresh.get(i.id) === JSON.stringify(i)));

// 6. the owner's seed
check("dry run by default: no --confirm → no write", !writeAllowed(["node", "seed"], { FACTORY_WRITE: "yes" }));
check("dry run: --confirm without FACTORY_WRITE=yes → no write", !writeAllowed(["node", "seed", "--confirm"], {}));
check("the write needs both", writeAllowed(["node", "seed", "--confirm"], { FACTORY_WRITE: "yes" }));
const seedRows = committed.items.map(seedRowFor);
const live: LiveRow[] = [];
const plan1 = planSeed(seedRows, live);
check(`first plan on an empty bank: create ${plan1.create.length} of ${seedRows.length}`, plan1.create.length === seedRows.length);
const dry = planSeed(seedRows, live); // a dry run plans and writes nothing
check("a dry run writes nothing (the bank is still empty)", live.length === 0 && dry.create.length === seedRows.length);
for (const r of plan1.create) live.push({ id: r.id, level: r.level, taskType: r.taskType, title: r.title, prompt: r.prompt, payload: JSON.parse(JSON.stringify(r.payload)), topicTag: r.topicTag, timeLimitSeconds: r.timeLimitSeconds });
const plan2 = planSeed(seedRows, live);
check("the write is idempotent: a second run creates 0, all equal", plan2.create.length === 0 && plan2.equal.length === seedRows.length && plan2.differs.length === 0);
live[0] = { ...live[0], prompt: live[0].prompt + " (edited live)" };
const plan3 = planSeed(seedRows, live);
check("a live row that differs is listed, never changed", plan3.differs.length === 1 && plan3.create.length === 0);
const twinLive: LiveRow[] = [{ id: "cuid-older", level: "B1", taskType: seedRows[0].taskType, title: seedRows[0].title, prompt: "x", payload: {}, topicTag: "x", timeLimitSeconds: 0 }];
check("the same title live under another id: skipped, no duplicate", planSeed(seedRows, twinLive).duplicate.length === 1);

// 7. the build's seed:prod never reads the factory data
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
check("seed:prod runs only scripts/seed/append.ts and scripts/seed/exam-append.ts", pkg.scripts["seed:prod"] === "tsx scripts/seed/append.ts && tsx scripts/seed/exam-append.ts", pkg.scripts["seed:prod"]);
check("the build does not run the factory seed", !/seed-goethe-pack|scripts\/factory\/seed|factory:seed/.test(pkg.scripts.build));
const seedSources = ["append.ts", "exam-append.ts", "lesen.ts", "hoeren.ts", "schreiben.ts", "sprechen.ts"].map((f) => readFileSync(join(root, "scripts", "seed", f), "utf8"));
check("seed:prod's files never import the factory data", seedSources.every((s) => !/factory|goethe-b1-model-answers/.test(s)));
const seedKeys = new Set([...LESEN, ...HOEREN, ...SCHREIBEN, ...SPRECHEN].map((it) => `${it.level}::${it.taskType}::${it.title}`));
const seedIds = new Set([...LESEN, ...HOEREN, ...SCHREIBEN, ...SPRECHEN].map((it) => (it as { id?: string }).id).filter(Boolean));
check("no factory item is in the seed:prod item list", committed.items.every((i) => !seedKeys.has(`${i.level}::${i.taskType}::${i.title}`) && !seedIds.has(i.id)));

console.log(failures ? `\nFACTORY PROOF FAILED: ${failures} check(s)` : "\nFACTORY PROOF PASS");
process.exitCode = failures ? 1 : 0;
