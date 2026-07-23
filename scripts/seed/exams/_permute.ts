// Shared DETERMINISTIC key-distribution helpers.
//
// WHY THIS EXISTS. The answer-distribution gate (scripts/gates/answer-distribution-
// gate.mts) refuses gameable answer keys: an option that is never correct, a
// position that dominates, a binary item that runs uniform or alternating. Several
// TestDaF and telc B1 Aufgaben were authored correct-answer-first and shipped with
// exactly those patterns — option "c" never keyed, "b" clustered, richtig/falsch
// assignments alternating a-b-a-b straight down.
//
// These helpers repair the DISTRIBUTION without touching CORRECTNESS. For MC the
// correct option TEXT stays correct; only the letter it sits under changes. For a
// binary category-assignment the statements are reordered; every statement keeps
// the concept it belongs to.
//
// ⚠️ DETERMINISTIC, exactly like the Sprachbausteine permutation. The seeder
// compares content to decide what to update, so a random shuffle would rewrite the
// payload on every build and the reconcile diff would never be empty. The seed is
// derived from stable text (title + question id), so the output is byte-identical
// across runs. Same FNV-1a + mulberry mix as telc-b1-sprachbausteine.ts, on
// purpose — one shuffle in the repo, not two that can drift apart.

import type { ExamItemInput } from "./_shared";

const LETTERS = "abcdefghijklmnopqrstuvwxyz".split("");

function seedFrom(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function permute<T>(arr: T[], seedStr: string): T[] {
  const out = arr.slice();
  let a = seedFrom(seedStr);
  for (let i = out.length - 1; i > 0; i--) {
    a = (Math.imul(a ^ (a >>> 15), 1 | a) + 0x6d2b79f5) >>> 0;
    const j = a % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

type Opt = { id: string; text: string };
type Q = { id: string; stem?: string; options?: Opt[]; answer: string; [k: string]: unknown };

/** Permute a single MC question's options deterministically and re-point the
 *  answer to wherever the correct TEXT landed. The correct text stays correct.
 *  `salt` lets the caller nudge one question to a different arrangement when a
 *  whole item happens to land uniform. */
function permuteQuestionOptions(q: Q, seedBase: string, salt = 0): Q {
  if (!Array.isArray(q.options) || q.options.length < 2) return q;
  const correct = q.options.find((o) => o.id === q.answer);
  if (!correct) return q; // answer not among options — leave for the gate to flag
  const shuffled = permute(q.options, `${seedBase}#${q.id}${salt ? `~${salt}` : ""}`);
  const options = shuffled.map((o, i) => ({ id: LETTERS[i], text: o.text }));
  const answer = LETTERS[shuffled.findIndex((o) => o.text === correct.text)];
  return { ...q, options, answer };
}

/** Permute every MC question in an item, then de-collide: a seeded shuffle can, by
 *  chance, land a whole short item on one letter (a within-item uniform run the gate
 *  rejects). If so, re-permute the last question with a rising salt until its answer
 *  differs. Deterministic — same input always yields the same salt. */
function permuteItemMC(questions: Q[], seedBase: string): Q[] {
  const out = questions.map((q) => permuteQuestionOptions(q, seedBase));
  const seq = out.map((q) => q.answer);
  if (seq.length >= 2 && new Set(seq).size === 1) {
    const last = out.length - 1;
    const orig = questions[last];
    const others = seq[0];
    for (let salt = 1; salt <= 50; salt++) {
      const nq = permuteQuestionOptions(orig, seedBase, salt);
      if (nq.answer !== others) {
        out[last] = nq;
        break;
      }
    }
  }
  return out;
}

function isBinary(seq: string[]): boolean {
  return new Set(seq).size <= 2;
}
function isUniform(seq: string[]): boolean {
  return seq.length > 0 && new Set(seq).size === 1;
}
function isAlternating(seq: string[]): boolean {
  return seq.length >= 3 && seq.every((a, i) => i === 0 || a !== seq[i - 1]);
}

/** Reorder a binary category-assignment item's questions so the answer sequence is
 *  neither uniform nor alternating — without changing any assignment. Deterministic:
 *  a seeded shuffle, nudged to a non-degenerate order if it lands on one.
 *
 *  `used` (optional) carries the sequences already chosen for other items of the
 *  same Aufgabe, so a whole Aufgabe does not collapse to the same a-b-b-a in every
 *  item — which would be gameable ACROSS items even though each item passes the
 *  binary shape checks alone. */
function deRhythmQuestions(questions: Q[], seedBase: string, used?: Set<string>): Q[] {
  const seq0 = questions.map((q) => q.answer);
  if (!isBinary(seq0) || isUniform(seq0)) return questions; // nothing meaningful to do
  let firstOk: Q[] | null = null;
  for (let salt = 0; salt <= 50; salt++) {
    const ordered = permute(questions, `${seedBase}#order${salt ? `~${salt}` : ""}`);
    const seq = ordered.map((q) => q.answer);
    if (isAlternating(seq) || isUniform(seq)) continue;
    if (firstOk === null) firstOk = ordered;
    const key = seq.join("");
    if (!used || !used.has(key)) {
      used?.add(key);
      return ordered;
    }
  }
  // Every salt reproduced a sequence already used (the space is tiny for short
  // items) — take the first acceptable one rather than a degenerate fallback.
  if (firstOk) return firstOk;
  return [...questions].sort((a, b) => (a.answer < b.answer ? -1 : a.answer > b.answer ? 1 : 0));
}

/** Apply distribution repair to a bank. `permuteMC` names the taskTypes whose MC
 *  options are reshuffled; `deRhythm` names the binary taskTypes whose questions
 *  are reordered. Any item not in either set is returned untouched. */
export function deGame(
  items: ExamItemInput[],
  cfg: { permuteMC?: Set<string>; deRhythm?: Set<string> },
): ExamItemInput[] {
  const permuteMC = cfg.permuteMC ?? new Set<string>();
  const deRhythm = cfg.deRhythm ?? new Set<string>();
  // Per-Aufgabe memory of the answer sequences already assigned, so de-rhythmed
  // items of the same taskType do not all collapse to one order.
  const usedByTask = new Map<string, Set<string>>();
  return items.map((it: any) => {
    const task = String(it.taskType);
    const qs: Q[] | undefined = it.payload?.questions;
    if (!Array.isArray(qs)) return it;
    const title = String(it.title ?? "");
    if (permuteMC.has(task)) {
      return { ...it, payload: { ...it.payload, questions: permuteItemMC(qs, title) } };
    }
    if (deRhythm.has(task)) {
      const used = usedByTask.get(task) ?? new Set<string>();
      usedByTask.set(task, used);
      return { ...it, payload: { ...it.payload, questions: deRhythmQuestions(qs, title, used) } };
    }
    return it;
  });
}
