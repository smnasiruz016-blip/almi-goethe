/**
 * RR-401 · the importer core: the pack + LanguageTool results → AlmiGoethe's model-answer data + the gate report. Pure and
 * deterministic (no clock, no randomness, sorted output), so re-importing the same pack gives byte-identical data: idempotent by
 * construction.
 *
 * Mapping to the task types AlmiGoethe already has (no schema change, no new enum value):
 *   Schreiben Aufgabe 1 (e-mail to a friend)  → SCHREIBEN_MESSAGE ("short message / informal email (A1–B1)")
 *   Schreiben Aufgabe 2 (forum opinion)       → SCHREIBEN_ESSAY   ("opinion / argumentative text"; the B1 forum items use it)
 *   Schreiben Aufgabe 3 (formal e-mail)       → SCHREIBEN_LETTER  ("semi-formal / formal letter")
 *   Sprechen Teil 1 (plan together)           → SPRECHEN_DISCUSS  (the B1 "Gemeinsam planen" items already use it)
 *   Sprechen Teil 2 (present a topic)         → SPRECHEN_PRESENT
 *   Sprechen Teil 3 (feedback and a question) → SPRECHEN_DISCUSS
 */
import { LEVELS, LEVEL_POINTS, MODEL_ANSWER_LABEL, TRADEMARK_LINE, answerText, countedWords, itemId, type ModelLevel, type Pack, type PackItem } from "./pack";
import { blockingFindingsDe, blockingFindingsEn, hintCount, lowLevelNotesProblem, noticeFindingsDe, type GateFinding, type LtMatch } from "./grammar-gate";

export type Lang = "de-DE" | "en-GB" | "en-US";
export type Lt = (text: string, lang: Lang) => LtMatch[];

export type GoetheTaskType = "SCHREIBEN_MESSAGE" | "SCHREIBEN_ESSAY" | "SCHREIBEN_LETTER" | "SPRECHEN_DISCUSS" | "SPRECHEN_PRESENT";

/** what LanguageTool reads for a note (the stored note keeps its markdown): **bold** loses its marks; an *italic* is German quoted
 *  by the note (the mistake, the corrected form, a phrase), so it is read inside quotes and is exempt. */
export const plainNote = (t: string) => t.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\*([^*]+)\*/g, "“$1”").replace(/\*/g, "");

export type ModelAnswer = {
  id: string;
  level: ModelLevel;
  parts: { heading: string | null; paragraphs: string[] }[];
  /** words without greeting and closing, as the pack's table counts them (Schreiben only) */
  wordCount: number | null;
  notes: string[];
  withMistakes: boolean;
};
export type ModelItem = {
  id: string;
  level: "B1";
  module: "SCHREIBEN" | "SPRECHEN";
  taskType: GoetheTaskType;
  title: string;
  prompt: string;
  topicTag: string;
  timeLimitSeconds: number;
  payload: { situation: string; instruction: string; wordMin: number; wordMax: number } | { taskPrompt: string; prepSeconds: number; speakSeconds: number };
  provenance: { author: string; date: string; file: string; number: string };
  answers: ModelAnswer[];
};
export type ModelData = { schema: 1; label: string; trademark: string; levelPoints: Record<ModelLevel, string>; items: ModelItem[] };

export type Blocked = { where: string; reason: string; findings?: GateFinding[] };
export type ImportResult = { data: ModelData; blocked: Blocked[]; notices: Blocked[]; hints: number; checkedTexts: number; skippedDuplicates: string[] };

/** the item's topic tag (one of the twelve tags the bank already uses) */
const TOPIC: Record<string, string> = { "1.1": "wohnen", "1.2": "reisen", "1.3": "freizeit", "2.1": "lernen", "2.2": "arbeit", "2.3": "einkaufen", "3.1": "lernen", "3.2": "lernen", T1: "arbeit", T2: "lernen", T3: "lernen" };

export function taskTypeFor(item: Pick<PackItem, "number">): GoetheTaskType {
  const n = item.number;
  if (n.startsWith("1.")) return "SCHREIBEN_MESSAGE";
  if (n.startsWith("2.")) return "SCHREIBEN_ESSAY";
  if (n.startsWith("3.")) return "SCHREIBEN_LETTER";
  if (n === "T2") return "SPRECHEN_PRESENT";
  if (n === "T1" || n === "T3") return "SPRECHEN_DISCUSS";
  throw new Error(`no task type for item ${n}`);
}

/** the pack's own minutes and words, from its section heading "(20 Minuten, ca. 80 Wörter)" or "(ca. 3 Minuten)" */
function minutesOf(s: string): number | null { const m = /(\d+) Minuten/.exec(s); return m ? Number(m[1]) : null; }
function wordsOf(s: string): number | null { const m = /ca\. (\d+) Wörter/.exec(s); return m ? Number(m[1]) : null; }

/** the item as the existing Goethe composer shows it; every string is the pack's own text */
export function shapeItem(item: PackItem): Pick<ModelItem, "title" | "prompt" | "payload" | "timeLimitSeconds"> {
  const title = item.heading.replace(/^Teil (\d) — /, "Sprechen Teil $1 — ").replace(/ \(ca\. \d+ Minuten\)$/, "");
  if (item.module === "SCHREIBEN") {
    const words = wordsOf(item.section);
    const min = minutesOf(item.section);
    if (!words || !min) throw new Error(`Aufgabe ${item.number}: the section heading names no minutes or words: ${item.section}`);
    const bullets = item.box.filter((b) => b.startsWith("- ")).map((b) => b.slice(2));
    const plain = item.box.filter((b) => !b.startsWith("- "));
    let situation: string, instruction: string;
    if (bullets.length) { situation = plain.join(" "); instruction = bullets.join("\n"); }
    else if (plain.length >= 2) { situation = plain.slice(0, -1).join(" "); instruction = plain[plain.length - 1]; }
    else {
      const at = plain[0].indexOf("Schreiben Sie");
      if (at <= 0) throw new Error(`Aufgabe ${item.number}: cannot find the instruction in the task box`);
      situation = plain[0].slice(0, at).trim(); instruction = plain[0].slice(at).trim();
    }
    // wordMin/wordMax: the band the bank already uses for "ca. 80 Wörter" (70–100); "ca. 40 Wörter" gets the same shape (30–50)
    const band = words >= 80 ? { wordMin: words - 10, wordMax: words + 20 } : { wordMin: words - 10, wordMax: words + 10 };
    return { title, prompt: item.section.replace(/^Schreiben, /, ""), payload: { situation, instruction, ...band }, timeLimitSeconds: min * 60 };
  }
  const min = minutesOf(item.heading);
  if (!min) throw new Error(`Teil ${item.number}: the heading names no minutes: ${item.heading}`);
  const taskPrompt = item.box.length ? item.box.join("\n") : (item.taskLine ?? "");
  if (!taskPrompt) throw new Error(`Teil ${item.number}: no task text`);
  return { title, prompt: item.heading.replace(/^Teil \d — /, ""), payload: { taskPrompt, prepSeconds: 0, speakSeconds: min * 60 }, timeLimitSeconds: 0 };
}

const key = (level: string, taskType: string, title: string) => `${level}::${taskType}::${title}`;

/**
 * existingKeys: (level::taskType::title) of every Goethe item the repo's seed files already hold. An item with the same key would
 * collide with the seeder's own dedupe key, so it is skipped, never imported twice.
 */
export function importPack(pack: Pack, lt: Lt, existingKeys: string[] = []): ImportResult {
  const blocked: Blocked[] = [];
  const skippedDuplicates: string[] = [];
  const out: ModelItem[] = [];
  const seen = new Set<string>();
  const existing = new Set(existingKeys);
  let hints = 0, checkedTexts = 0;
  const notices: Blocked[] = [];
  const gateDe = (text: string, where: string) => {
    checkedTexts++;
    const de = lt(text, "de-DE");
    hints += hintCount(de, "de");
    const n = noticeFindingsDe(text, de);
    if (n.length) notices.push({ where, reason: "not blocking: for beta-g", findings: n });
    return blockingFindingsDe(text, de);
  };
  const gateEn = (text: string) => { checkedTexts++; const gb = lt(text, "en-GB"), us = lt(text, "en-US"); hints += hintCount(gb, "en"); return blockingFindingsEn(text, gb, us); };

  // every row of the table must belong to an answer the pack has
  for (const r of pack.wordTable) {
    const it = pack.items.find((i) => i.number === r.number);
    if (!it || !it.answers.some((a) => a.level === r.level)) blocked.push({ where: `${pack.file} · word table · Aufgabe ${r.number} ${r.level}`, reason: "the table has a row for an answer the pack does not have" });
  }

  for (const item of pack.items) {
    const id = itemId(item.number);
    const where = `${pack.file} · ${item.heading}`;
    if (seen.has(id)) throw new Error(`${where}: id ${id} appears twice in the pack`);
    seen.add(id);
    const taskType = taskTypeFor(item);
    const shaped = shapeItem(item);
    if (existing.has(key("B1", taskType, shaped.title))) { skippedDuplicates.push(`${where}: an item with the same title is already in the bank`); continue; }

    const boxText = shaped.payload && "situation" in shaped.payload ? `${shaped.payload.situation}\n${shaped.payload.instruction}` : (shaped.payload as { taskPrompt: string }).taskPrompt;
    const isGerman = item.box.length > 0;
    const pf = isGerman ? gateDe(boxText, `${where} · task text`) : gateEn(plainNote(boxText));
    if (pf.length) { blocked.push({ where: `${where} · task text`, reason: "grammar or spelling", findings: pf }); continue; }

    const answers: ModelAnswer[] = [];
    for (const a of item.answers) {
      const w = `${where} · ${a.level}`;
      let words: number | null = null;
      if (item.module === "SCHREIBEN") {
        try { words = countedWords(item, a); } catch (e) { blocked.push({ where: w, reason: (e as Error).message }); continue; }
        const row = pack.wordTable.find((r) => r.number === item.number && r.level === a.level);
        if (!row) { blocked.push({ where: w, reason: "no row in the pack's word-count table" }); continue; }
        if (row.total !== words) { blocked.push({ where: w, reason: `word count differs from the pack's table: counted ${words}, table ${row.total}` }); continue; }
      }
      if (a.level === "nicht bestanden") {
        const prob = lowLevelNotesProblem(a.notes);
        if (prob) { blocked.push({ where: w, reason: `nicht bestanden notes: ${prob}` }); continue; }
      } else {
        if (!a.notes.length) { blocked.push({ where: w, reason: "the notes are missing" }); continue; }
        const af = gateDe(answerText(a), `${w} · answer`);
        if (af.length) { blocked.push({ where: `${w} · answer`, reason: "grammar or spelling", findings: af }); continue; }
        const nf = gateEn(a.notes.map(plainNote).join("\n"));
        if (nf.length) { blocked.push({ where: `${w} · notes`, reason: "grammar or spelling", findings: nf }); continue; }
      }
      answers.push({ id: `${id}-${a.level.replace(/ /g, "-")}`, level: a.level, parts: a.parts, wordCount: words, notes: a.notes, withMistakes: a.level === "nicht bestanden" });
    }
    if (!answers.length) { blocked.push({ where, reason: "no answer passed the gates, so the item is not imported" }); continue; }
    answers.sort((x, y) => LEVELS.indexOf(x.level) - LEVELS.indexOf(y.level));
    out.push({
      id, level: "B1", module: item.module, taskType, topicTag: TOPIC[item.number] ?? "alltag", ...shaped,
      provenance: { author: pack.author, date: pack.date, file: pack.file, number: item.number }, answers,
    });
  }
  out.sort((a, b) => a.id.localeCompare(b.id));
  return { data: { schema: 1, label: MODEL_ANSWER_LABEL, trademark: TRADEMARK_LINE, levelPoints: LEVEL_POINTS, items: out }, blocked, notices, hints, checkedTexts, skippedDuplicates };
}

/** merge freshly imported items into the data already in the repo: same id → replaced by the new import, others kept */
export function mergeData(prev: ModelData | null, next: ModelData): ModelData {
  const byId = new Map((prev?.items ?? []).map((p) => [p.id, p]));
  for (const p of next.items) byId.set(p.id, p);
  return { ...next, items: [...byId.values()].sort((a, b) => a.id.localeCompare(b.id)) };
}
