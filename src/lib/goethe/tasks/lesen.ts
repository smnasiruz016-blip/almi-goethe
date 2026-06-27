// LESEN (Reading) — objective. German passages (texts, correspondence, ads,
// articles) + questions: multiple choice, matching, or richtig/falsch (true-false).
// Computer-scored: correct/total -> fraction -> points estimate. Answer keys are
// stripped before reaching the client.

import { z } from "zod";
import type { TaskRunResult } from "@/lib/goethe/registry";
import { markObjective, objectiveResponseSchema } from "@/lib/goethe/tasks/objective";

export { objectiveResponseSchema };

const optionSchema = z.object({ id: z.string(), text: z.string() });

export const lesenPayloadSchema = z.object({
  passages: z.array(z.object({ id: z.string(), heading: z.string().optional(), body: z.string() })),
  questions: z.array(
    z.object({
      id: z.string(),
      kind: z.enum(["mcq", "match", "truefalse"]),
      stem: z.string(),
      options: z.array(optionSchema).optional(),
      answer: z.string(),
    }),
  ),
});
export type LesenPayload = z.infer<typeof lesenPayloadSchema>;

export function scoreLesen(
  payload: LesenPayload,
  response: z.infer<typeof objectiveResponseSchema>,
): TaskRunResult {
  // mcq / match / truefalse answers are all option ids -> exact compare.
  return markObjective(
    payload.questions.map((q) => ({ id: q.id, answer: q.answer, exact: true })),
    response,
  );
}
