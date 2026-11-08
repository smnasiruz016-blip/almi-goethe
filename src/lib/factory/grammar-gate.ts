/**
 * RR-401 · the grammar gate for the AlmiGoethe factory. Pure: it classifies LanguageTool matches that the importer fetched; it never
 * calls the network itself, so it is tested on fixtures.
 *
 * German (the task text and the sehr gut / gut models): checked in de-DE. A match BLOCKS when it is a real error: spelling,
 * grammar, a confused word, capitalisation or punctuation (a missing comma is an error in German, not a style choice).
 * Typography (quote marks, dashes) and style hints never block.
 *
 * English (the notes, which are written in English for learners): checked like AlmiPrep, in British AND American English, and a
 * match blocks only when both flag it. The notes quote German on purpose (the learner's mistake, the corrected form, a phrase):
 * every *italic* or "quoted" stretch is German and never blocks, and the German criterion and grammar terms below never block.
 */

export type LtMatch = {
  offset: number;
  length: number;
  message: string;
  replacements?: { value: string }[];
  rule: { id: string; issueType?: string; category: { id: string; name?: string } };
};

const BLOCKING_CATEGORIES_EN = new Set(["TYPOS", "GRAMMAR", "CONFUSED_WORDS"]);
const BLOCKING_CATEGORIES_DE = new Set(["TYPOS", "GRAMMAR", "CONFUSED_WORDS", "CASING", "PUNCTUATION"]);
const BLOCKING_ISSUES = new Set(["misspelling", "grammar"]);

/** German criterion and grammar terms used as names inside the English notes, and our own names */
export const ALLOWLIST_EN = new Set(
  ["AlmiGoethe", "AlmiWorld", "Goethe", "Goethe-Zertifikat", "Erfüllung", "Kohärenz", "Wortschatz", "Strukturen", "trennbares", "Konjunktiv"].map((w) => w.toLowerCase()),
);
/** our own name, and the people's names the models sign with (a name is not a spelling error) */
export const ALLOWLIST_DE = new Set(["almigoethe", "karimi", "gómez", "lucía"]);

/**
 * German rules that never block, each for a stated reason. They are still reported to beta-g (see `notices`).
 *  (Round 1 also listed the quote-mark rules here; beta-g fixed every „…" in Pack 1 on 8 Nov, so they block again.)
 *  - AUFFORDERUNG_MIT_FRAGEZEICHEN: a hedged hint ("if this sentence is a request, use a full stop"); in the task box the question
 *    after the colon ("Beschreiben Sie: Wie ist die neue Wohnung?") is a real question, the exam's own form.
 */
export const NOTICE_RULES_DE = new Set(["AUFFORDERUNG_MIT_FRAGEZEICHEN"]);

export const isBlockingEn = (m: LtMatch) => BLOCKING_CATEGORIES_EN.has(m.rule.category.id) || BLOCKING_ISSUES.has(m.rule.issueType ?? "");
export const isBlockingDe = (m: LtMatch) => !NOTICE_RULES_DE.has(m.rule.id) && (BLOCKING_CATEGORIES_DE.has(m.rule.category.id) || BLOCKING_ISSUES.has(m.rule.issueType ?? ""));
/** the German findings that do not block but go to beta-g */
export const noticeFindingsDe = (text: string, de: LtMatch[]): GateFinding[] => de.filter((m) => NOTICE_RULES_DE.has(m.rule.id)).map((m) => finding(text, m));

/** ranges of text inside double quotes (straight or curly): German quoted inside an English note */
export function quotedRanges(text: string): [number, number][] {
  const out: [number, number][] = [];
  const re = /"[^"\n]*"|“[^”\n]*”/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) out.push([m.index, m.index + m[0].length]);
  return out;
}

export type GateFinding = { text: string; offset: number; snippet: string; rule: string; category: string; message: string; suggestion: string };

const finding = (text: string, m: LtMatch): GateFinding => ({
  text: text.slice(m.offset, m.offset + m.length),
  offset: m.offset,
  snippet: text.slice(Math.max(0, m.offset - 40), m.offset + m.length + 40).replace(/\s+/g, " "),
  rule: m.rule.id,
  category: m.rule.category.id,
  message: m.message,
  suggestion: (m.replacements ?? []).slice(0, 3).map((r) => r.value).join(" / "),
});

/** German text (de-DE matches): every real error blocks */
export function blockingFindingsDe(text: string, de: LtMatch[]): GateFinding[] {
  return de.filter((m) => isBlockingDe(m) && !ALLOWLIST_DE.has(text.slice(m.offset, m.offset + m.length).toLowerCase())).map((m) => finding(text, m));
}

/** English notes: gb and us are the matches for the SAME text; a real error flagged in both blocks, unless it sits in a quotation */
export function blockingFindingsEn(text: string, gb: LtMatch[], us: LtMatch[]): GateFinding[] {
  const quotes = quotedRanges(text);
  const inQuote = (m: LtMatch) => quotes.some(([a, b]) => m.offset >= a && m.offset + m.length <= b);
  const usHas = (m: LtMatch) => us.some((u) => u.offset === m.offset && u.length === m.length && isBlockingEn(u));
  return gb
    .filter((m) => isBlockingEn(m) && usHas(m) && !inQuote(m) && !ALLOWLIST_EN.has(text.slice(m.offset, m.offset + m.length).toLowerCase()))
    .map((m) => finding(text, m));
}

/** style-only hints, kept for information: they never block */
export const hintCount = (matches: LtMatch[], lang: "de" | "en") => matches.filter((m) => !(lang === "de" ? isBlockingDe(m) : isBlockingEn(m))).length;

/** "nicht bestanden" is not grammar-checked: its mistakes are on purpose. Its notes must exist and must NAME a mistake (at least one
 *  quoted or *italic* German form). */
export function lowLevelNotesProblem(notes: string[]): string | null {
  const all = notes.join(" ").trim();
  if (all.length < 20) return "the notes are missing";
  return /\*[^*\s][^*]*\*/.test(all) || quotedRanges(all).length > 0 ? null : "the notes name no mistake (no quoted German form)";
}
