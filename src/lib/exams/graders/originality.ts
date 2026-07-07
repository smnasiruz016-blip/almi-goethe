// The single source of the ORIGINALITY + HONESTY doctrine for the new German-exam
// engines. Injected into EVERY AI prompt — both the content-generation prompts and
// the graders — so the rule can never drift between them.
//
// Doctrine #1 (founder, verbatim intent): all items ORIGINAL — never copied or
// derived from telc, g.a.s.t. / TestDaF-Institut, or TestDaF materials. Same IP
// doctrine as DET's "never copied from Duolingo."

import type { GermanExam } from "@/lib/exams/types";

// Put this in generation AND grading prompts.
export const ORIGINALITY_CLAUSE = `ORIGINALITY (hard rule): All content is ORIGINAL to AlmiGoethe. Never copy, quote, paraphrase, or derive any text, task, prompt, question, or answer from real TestDaF, telc, g.a.s.t. / TestDaF-Institut materials, official past papers, Modelltests, or Übungstests. Match the STYLE, task format, and difficulty of the exam, but every word and scenario must be freshly invented. If you are unsure whether something echoes real exam material, change it.`;

// Per-exam honesty framing for graders / result copy. TestDaF gets the fifth-
// philosophy line (no total, no pass/fail); telc gets the 60% practice-estimate line.
export function honestyClause(exam: GermanExam): string {
  if (exam === "TESTDAF") {
    return `HONESTY: This is an AlmiGoethe PRACTICE ESTIMATE, not an official TestDaF result. TestDaF reports an INDEPENDENT level per section (TDN 3–5, or "unter TDN 3") on a 0–20 scale and has NO overall score and NO pass/fail. NEVER state a total, NEVER say "passed"/"failed", NEVER imply an aggregate. Judge only this one section.`;
  }
  const name =
    exam === "TELC_C1_HOCHSCHULE"
      ? "telc Deutsch C1 Hochschule"
      : exam === "TELC_B1"
        ? "telc Deutsch B1"
        : "telc Deutsch B2";
  return `HONESTY: This is an AlmiGoethe PRACTICE ESTIMATE, not an official ${name} result. The real exam is calibrated by telc. Never claim the candidate has passed the official exam. Be honest and constructive; do not inflate.`;
}

// Banned evaluative words shared with the Goethe graders.
export const BANNED_GRADER_WORDS = `Banned words in feedback: "weak", "poor", "wrong", "failed". Prefer "improvement opportunity" and plain, kind, specific guidance.`;
