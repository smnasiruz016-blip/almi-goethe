// Server helpers for the exam practice UI: pick a random active ExamItem for an
// (exam, section) and redact its answer key before it is sent to the client. The
// answer key NEVER leaves the server — the submit route re-loads the item by id.

import { prisma } from "@/lib/prisma";
import type { GermanExam } from "@prisma/client";
import { objectivePayloadSchema, redactObjectivePayload } from "@/lib/exams/tasks";
import { sectionDefFor } from "@/lib/exams/registry";

export type ClientItem = {
  id: string;
  exam: GermanExam;
  section: string;
  taskType: string;
  title: string;
  prompt: string;
  guidanceNote: string | null;
  timeLimitSeconds: number;
  kind: "objective" | "writing" | "speaking";
  // Redacted payload (objective answer keys stripped); productive payloads carry no key.
  payload: unknown;
};

/** Pick one random active item for (exam, section), with its answer key stripped. */
export async function pickClientItem(
  exam: GermanExam,
  section: string,
): Promise<ClientItem | null> {
  const def = sectionDefFor(exam, section);
  if (!def) return null;

  const items = await prisma.examItem.findMany({
    where: { exam, section: def.key, active: true },
    select: {
      id: true,
      exam: true,
      section: true,
      taskType: true,
      title: true,
      prompt: true,
      guidanceNote: true,
      timeLimitSeconds: true,
      payload: true,
    },
  });
  if (items.length === 0) return null;

  const chosen = items[Math.floor(Math.random() * items.length)];
  let payload: unknown = chosen.payload;
  if (def.kind === "objective") {
    const parsed = objectivePayloadSchema.safeParse(chosen.payload);
    payload = parsed.success ? redactObjectivePayload(parsed.data) : chosen.payload;
  }

  return {
    id: chosen.id,
    exam: chosen.exam,
    section: chosen.section,
    taskType: chosen.taskType,
    title: chosen.title,
    prompt: chosen.prompt,
    guidanceNote: chosen.guidanceNote,
    timeLimitSeconds: chosen.timeLimitSeconds,
    kind: def.kind,
    payload,
  };
}
