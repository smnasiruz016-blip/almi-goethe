// Task payload + response shapes for the new German-exam engines, and the
// deterministic marker for objective sections. One uniform authoring shape across
// all four engines (TestDaF + telc B1/B2/C1H):
//   • OBJECTIVE sections (Leseverstehen, Hörverstehen, Sprachbausteine) — a
//     stimulus (text and/or audio script) + questions carrying a server-side key.
//   • PRODUCTIVE sections (Schriftlicher/Mündlicher Ausdruck, Sprechen) — a prompt
//     graded by AI into a 0..1 fraction (mapped to the engine result by the caller).
//
// The objective marker is REUSED from the Goethe engine (markObjective) — that
// scorer is exam-agnostic (correct/total → fraction); reuse is read-only.

import { z } from "zod";
import {
  markObjective,
  objectiveResponseSchema,
  type AnswerKey,
  type ObjectiveResponse,
} from "@/lib/goethe/tasks/objective";
import type { TaskRunResult } from "@/lib/goethe/registry";

export { objectiveResponseSchema };
export type { ObjectiveResponse };

// ---- Objective item payload (Lesen / Hören / Sprachbausteine) --------------

const optionSchema = z.object({ id: z.string(), text: z.string() });
const objectiveQuestionSchema = z.object({
  id: z.string(),
  stem: z.string(),
  options: z.array(optionSchema).optional(), // omitted for gap-fill
  answer: z.string(), // option id (MCQ/matching) or expected text (gap fill) — stripped before client send
  exact: z.boolean().optional(), // true = exact id match; false/undefined = lenient text match
});

export const objectivePayloadSchema = z.object({
  instructions: z.string().optional(),
  // Reading stimulus (German passage) and/or listening script (spoken German, TTS).
  passage: z.string().optional(),
  audioScript: z.string().optional(),
  questions: z.array(objectiveQuestionSchema),
});
export type ObjectivePayload = z.infer<typeof objectivePayloadSchema>;

/** Build the answer key from an objective payload and mark a response. */
export function scoreObjective(
  payload: ObjectivePayload,
  response: ObjectiveResponse,
): TaskRunResult {
  const key: AnswerKey[] = payload.questions.map((q) => ({
    id: q.id,
    answer: q.answer,
    exact: q.exact ?? Boolean(q.options), // MCQ/matching (has options) default to exact-id match
  }));
  return markObjective(key, response);
}

/** Strip answer keys before a payload is sent to the client. */
export function redactObjectivePayload(payload: ObjectivePayload): ObjectivePayload {
  return {
    ...payload,
    questions: payload.questions.map(({ answer: _answer, ...rest }) => ({ ...rest, answer: "" })),
  };
}

// ---- Productive item payload (writing / speaking) --------------------------

export const productivePayloadSchema = z.object({
  situation: z.string(), // scenario / context (original)
  instruction: z.string(), // what to produce
  // Writing bounds (optional — omitted for speaking).
  wordMin: z.number().int().nonnegative().optional(),
  wordMax: z.number().int().nonnegative().optional(),
  // Speaking timing (optional — omitted for writing).
  prepSeconds: z.number().int().nonnegative().optional(),
  speakSeconds: z.number().int().nonnegative().optional(),
});
export type ProductivePayload = z.infer<typeof productivePayloadSchema>;

export const writingResponseSchema = z.object({ text: z.string() });
export type WritingResponse = z.infer<typeof writingResponseSchema>;

export const speakingResponseSchema = z.object({ transcript: z.string() });
export type SpeakingResponse = z.infer<typeof speakingResponseSchema>;
