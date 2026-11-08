/** RR-401 · the grammar-gate report for beta-g: what was blocked, the exact line, the rule and LanguageTool's suggestion. No clock. */
import type { Pack } from "./pack";
import type { ImportResult } from "./import";

export function renderReport(pack: Pack, res: ImportResult): string {
  const answers = res.data.items.reduce((n, p) => n + p.answers.length, 0);
  const L: string[] = [];
  L.push(`Pack: ${pack.file}`, "");
  L.push("The gate checks every German task text and every sehr gut and gut model with LanguageTool in German (de-DE): spelling, grammar, confused words, capitalisation and punctuation block; typography and style never block. The English notes are checked in British AND American English (a real error both flag blocks; the German they quote never blocks). The nicht bestanden models are not grammar-checked (their mistakes are on purpose); their notes must exist and name the mistakes. Every Schreiben word count (without greeting and closing) must equal the pack's own table.", "");
  L.push("| Result | Count |", "|---|---|");
  L.push(`| Items imported | ${res.data.items.length} |`, `| Model answers imported | ${answers} |`, `| **Blocked** | **${res.blocked.length}** |`, `| Same title already in the bank (skipped) | ${res.skippedDuplicates.length} |`, `| Texts checked | ${res.checkedTexts} |`, `| Style hints (a count only; they never block) | ${res.hints} |`, "");
  if (!res.blocked.length) L.push("**Nothing was blocked.** Nothing for beta-g to fix in this pack.", "");
  for (const b of res.blocked) {
    L.push(`### Blocked: ${b.where}`, "", `Reason: ${b.reason}`, "");
    for (const f of b.findings ?? []) L.push(`- "${f.text}" in: …${f.snippet}… · rule \`${f.rule}\` (${f.category}) · ${f.message}${f.suggestion ? ` · suggestion: ${f.suggestion}` : ""}`);
    L.push("");
  }
  if (res.notices.length) {
    L.push("### Not blocking, for beta-g (a hedged hint)", "");
    L.push("These LanguageTool findings never block (see the gate's NOTICE_RULES_DE); they are listed so beta-g can see them.", "");
    for (const b of res.notices) for (const f of b.findings ?? []) L.push(`- ${b.where}: "${f.text}" in: …${f.snippet}… · rule \`${f.rule}\``);
    L.push("");
  }
  for (const d of res.skippedDuplicates) L.push(`- Skipped: ${d}`);
  L.push("", "CC did not change any text. Blocked items stay out of AlmiGoethe until beta-g sends a corrected pack.", "");
  return L.join("\n");
}
