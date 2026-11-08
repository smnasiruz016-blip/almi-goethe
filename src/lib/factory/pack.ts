/**
 * RR-401 · the AlmiGoethe content factory: reads a factory pack (.md, written and checked by beta-g) into AlmiGoethe's own data shape.
 * Pure functions only (no network, no database), so every gate can be tested on fixtures.
 * The owner's rule: CC never rewrites content. These functions copy the text exactly; they only parse, count and check.
 * Same pattern as the AlmiPrep factory (almi-prep-v2 src/lib/factory), adapted to the Goethe-Zertifikat B1 pack format.
 */

export const MODEL_ANSWER_LABEL = "AlmiGoethe model answer (estimate), not an official Goethe-Institut result";
export const TRADEMARK_LINE = "Goethe-Zertifikat is a trademark of the Goethe-Institut. AlmiGoethe is not affiliated with the Goethe-Institut.";

export type ModelLevel = "sehr gut" | "gut" | "nicht bestanden";
export const LEVELS: ModelLevel[] = ["sehr gut", "gut", "nicht bestanden"];
/** the pack's own description of each level (its "How to read this file" paragraph) */
export const LEVEL_POINTS: Record<ModelLevel, string> = {
  "sehr gut": "about 90–100 points",
  gut: "about 70–80 points",
  "nicht bestanden": "below 60 points; it contains mistakes on purpose, which the notes name",
};

export type PackPart = { heading: string | null; paragraphs: string[] };
export type PackAnswer = { level: ModelLevel; parts: PackPart[]; notes: string[] };
export type PackItem = {
  /** "1.1" … "3.2" for Schreiben, "T1" … "T3" for Sprechen */
  number: string;
  module: "SCHREIBEN" | "SPRECHEN";
  /** the pack's section heading, e.g. "Schreiben, Aufgabe 1: E-Mail an Freunde (20 Minuten, ca. 80 Wörter)" */
  section: string;
  /** the item heading, e.g. "Aufgabe 1.1 — Neue Wohnung" */
  heading: string;
  /** the task box (the "> " lines), markdown bold removed, one entry per line */
  box: string[];
  /** a "*Task: …*" line under the section or item heading, when the pack gives one */
  taskLine: string | null;
  answers: PackAnswer[];
};
export type PackWordRow = { number: string; level: ModelLevel; total: number };
export type Pack = { file: string; title: string; author: string; date: string; items: PackItem[]; wordTable: PackWordRow[] };

/** a word = a run of characters between spaces that holds a letter or a digit ("15" counts, a lone dash does not) */
export function countWords(text: string): number {
  return text.split(/\s+/).filter((t) => /[\p{L}\p{N}]/u.test(t)).length;
}

const stripBold = (s: string) => s.replace(/\*\*([^*]+)\*\*/g, "$1");

/**
 * The words the pack's table counts: "Wörter (ohne Anrede und Gruß)". In an e-mail (Aufgabe 1 and 3) the first paragraph is the
 * greeting (one line ending in a comma) and the last paragraph is the closing (the sign-off and the name); both are left out.
 * A forum post (Aufgabe 2) has neither, so every word counts. A paragraph that does not look like a greeting or a closing is an
 * error, not a guess.
 */
export function countedParagraphs(item: Pick<PackItem, "number" | "module">, paragraphs: string[]): string[] {
  if (item.module !== "SCHREIBEN" || item.number.startsWith("2.")) return paragraphs;
  const first = paragraphs[0] ?? "", last = paragraphs[paragraphs.length - 1] ?? "";
  if (!(first.split("\n").length === 1 && first.trim().endsWith(",") && countWords(first) <= 5)) throw new Error(`Aufgabe ${item.number}: the first paragraph is not a greeting: "${first}"`);
  if (!(last.split("\n").length <= 2 && countWords(last) <= 5)) throw new Error(`Aufgabe ${item.number}: the last paragraph is not a closing: "${last}"`);
  return paragraphs.slice(1, -1);
}

export const answerText = (a: PackAnswer) => a.parts.map((p) => p.paragraphs.join("\n\n")).join("\n\n");
export const countedWords = (item: PackItem, a: PackAnswer) => countWords(countedParagraphs(item, a.parts.flatMap((p) => p.paragraphs)).join("\n\n"));

/** stable id of an item: the same pack always gives the same id (idempotent import) */
export const itemId = (number: string) => `fac-goethe-b1-p1-${number.replace(".", "-").toLowerCase()}`;

function paragraphsOf(lines: string[]): string[] {
  const out: string[] = [];
  let cur: string[] = [];
  for (const l of lines) {
    if (l.trim() === "") { if (cur.length) out.push(cur.join("\n")); cur = []; }
    else cur.push(stripBold(l.trim()));
  }
  if (cur.length) out.push(cur.join("\n"));
  return out;
}

function notesOf(lines: string[]): string[] {
  // "**Notes (gut):** text" (inline) or "**Notes (sehr gut):**" followed by "- " bullets
  const joined = lines.map((l) => l.trim()).filter((l) => l !== "");
  const out: string[] = [];
  for (const l of joined) {
    const inline = /^\*\*Notes[^*]*:\*\*\s*(.*)$/.exec(l);
    if (inline) { if (inline[1]) out.push(inline[1]); continue; }
    if (l.startsWith("- ")) out.push(l.slice(2));
    else if (out.length) out[out.length - 1] += " " + l;
    else out.push(l);
  }
  return out;
}

export function parsePack(md: string, file: string): Pack {
  const src = md.replace(/\r\n/g, "\n");
  const title = /^title:\s*"([^"]+)"/m.exec(src)?.[1] ?? "";
  const sub = /^subtitle:\s*"([^"]+)"/m.exec(src)?.[1] ?? "";
  const author = sub.split("·")[0]?.trim() ?? "";
  const date = sub.split("·")[1]?.trim() ?? "";
  const lines = src.split("\n");
  const items: PackItem[] = [];
  let section = "", sectionModule: "SCHREIBEN" | "SPRECHEN" | null = null, sectionTask: string | null = null;
  let item: PackItem | null = null;
  let mode: "none" | "answer" | "notes" = "none";
  let buf: string[] = [];
  let level: ModelLevel | null = null;
  let parts: PackPart[] = [];
  let partHeading: string | null = null;

  const flushPart = () => { const ps = paragraphsOf(buf); if (ps.length) parts.push({ heading: partHeading, paragraphs: ps }); buf = []; };
  const flushAnswer = () => {
    if (!item || !level) return;
    if (mode === "answer") flushPart();
    const notes = mode === "notes" ? notesOf(buf) : [];
    item.answers.push({ level, parts, notes });
    level = null; parts = []; buf = []; partHeading = null; mode = "none";
  };
  const closeItem = () => { flushAnswer(); if (item) items.push(item); item = null; };

  for (const raw of lines) {
    const l = raw.trimEnd();
    if (/^## Wortzahlen/.test(l)) { closeItem(); break; }
    const sec = /^# Teil ([A-D]) — (.+)$/.exec(l);
    if (sec) {
      closeItem();
      section = sec[2];
      sectionModule = /^Schreiben/.test(section) ? "SCHREIBEN" : /^Sprechen/.test(section) ? "SPRECHEN" : null;
      sectionTask = null;
      continue;
    }
    const aufg = /^# Aufgabe (\d\.\d) — (.+)$/.exec(l);
    const teil = /^# Teil (\d) — (.+)$/.exec(l);
    if (aufg || teil) {
      closeItem();
      if (!sectionModule) throw new Error(`${file}: an item outside a Schreiben or Sprechen section: ${l}`);
      item = { number: aufg ? aufg[1] : `T${teil![1]}`, module: sectionModule, section, heading: l.replace(/^# /, ""), box: [], taskLine: sectionTask, answers: [] };
      continue;
    }
    const task = /^\*Task: (.+)\*$/.exec(l.trim());
    if (task) { if (item) item.taskLine = `Task: ${task[1]}`; else sectionTask = `Task: ${task[1]}`; continue; }
    if (!item) continue;
    if (l.startsWith(">")) { item.box.push(stripBold(l.replace(/^>\s?/, "")).trim()); continue; }
    if (l === "---") { closeItem(); continue; }
    const lvl = /^## (sehr gut|gut|nicht bestanden)$/.exec(l);
    if (lvl) { flushAnswer(); level = lvl[1] as ModelLevel; mode = "answer"; partHeading = null; continue; }
    const modell = /^\*\*(Modell[^*]*?):\*\*$/.exec(l.trim());
    if (modell) {
      // Sprechen: "**Modell-Dialog (sehr gut):**", "**Modell (sehr gut), Rückmeldung und Frage:**"
      if (mode === "answer") flushPart(); else { flushAnswer(); mode = "answer"; }
      const m = /\((sehr gut|gut|nicht bestanden)\)/.exec(modell[1]);
      if (!m) throw new Error(`${file}: a model without a level: ${l}`);
      level = m[1] as ModelLevel;
      partHeading = modell[1];
      continue;
    }
    if (/^\*\*Notes[^*]*:\*\*/.test(l.trim())) { if (mode === "answer") flushPart(); mode = "notes"; buf = [l]; continue; }
    if (mode !== "none") buf.push(l);
  }
  closeItem();

  const wordTable: PackWordRow[] = [];
  const tbl = src.slice(src.indexOf("## Wortzahlen"));
  for (const m of tbl.matchAll(/^\| Aufgabe (\d\.\d) \| (sehr gut|gut|nicht bestanden) \| (\d+) \|$/gm)) {
    wordTable.push({ number: m[1], level: m[2] as ModelLevel, total: Number(m[3]) });
  }
  return { file, title, author, date, items, wordTable };
}
