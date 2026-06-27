// HÖREN (Listening) — objective. A German audio script (rendered to speech
// server-side via German TTS; plays once or twice per level) + multiple-choice or
// richtig/falsch questions. Computer-scored: correct/total -> fraction -> points
// estimate. Answer keys are stripped before reaching the client.

import { z } from "zod";
import type { TaskRunResult } from "@/lib/goethe/registry";
import { markObjective, objectiveResponseSchema } from "@/lib/goethe/tasks/objective";

export { objectiveResponseSchema };

const speakerSchema = z.object({ role: z.string(), voice: z.string() });
const mcqQuestionSchema = z.object({
  id: z.string(),
  stem: z.string(),
  options: z.array(z.object({ id: z.string(), text: z.string() })),
  answer: z.string(),
});

export const hoerenPayloadSchema = z.object({
  audioScript: z.string(),
  speakers: z.array(speakerSchema),
  questions: z.array(mcqQuestionSchema),
});
export type HoerenPayload = z.infer<typeof hoerenPayloadSchema>;

export function scoreHoeren(
  payload: HoerenPayload,
  response: z.infer<typeof objectiveResponseSchema>,
): TaskRunResult {
  return markObjective(
    payload.questions.map((q) => ({ id: q.id, answer: q.answer, exact: true })),
    response,
  );
}
