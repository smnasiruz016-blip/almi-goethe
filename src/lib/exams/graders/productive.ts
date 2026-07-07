// Exam-aware AI grader for PRODUCTIVE sections (Schriftlicher Ausdruck / writing,
// Mündlicher/Sprechen / speaking) across the four new engines. Returns a 0..1
// fraction + trait feedback; the caller maps the fraction to the engine result
// (TestDaF TDN or telc percent) — the grader itself NEVER states a total or pass/fail.
//
// Mirrors the Goethe Schreiben/Sprechen graders (Sonnet, trait rubric, Zod-after-
// parse) but is exam-neutral and carries the ORIGINALITY + HONESTY clauses so the
// prompt names telc / g.a.s.t. / TestDaF-Institut, not the Goethe-Institut.

import { z } from "zod";
import { getAnthropicClient, recordCost } from "@/lib/ai/anthropic-client";
import { MODELS } from "@/lib/ai/models";
import type { GermanExam } from "@/lib/exams/types";
import {
  BANNED_GRADER_WORDS,
  ORIGINALITY_CLAUSE,
  honestyClause,
} from "@/lib/exams/graders/originality";
import type { ProductivePayload, SpeakingResponse, WritingResponse } from "@/lib/exams/tasks";

const TRAIT = z.enum(["strong", "adequate", "limited"]);
type Trait = z.infer<typeof TRAIT>;

// Four criteria shared by writing and speaking (same axes the Goethe graders use).
export const productiveFeedbackSchema = z.object({
  communication: TRAIT, // task fulfilled, points covered, right register
  coherence: TRAIT, // organised and linked
  range: TRAIT, // vocabulary range/precision for the level
  accuracy: TRAIT, // grammar/structure (NOT pronunciation for speaking)
  strengths: z.array(z.string()),
  improvements: z.array(z.string()),
  overallComment: z.string(),
});
export type ProductiveFeedback = z.infer<typeof productiveFeedbackSchema>;

export type ProductiveScore = {
  fraction: number;
  feedback: ProductiveFeedback;
  telemetry: { aiModel: string; costCents: number; latencyMs: number };
};

const LEVEL_VALUE: Record<Trait, number> = { strong: 1.0, adequate: 0.6, limited: 0.3 };

const EXAM_NAME: Record<GermanExam, string> = {
  TESTDAF: "TestDaF",
  TELC_B1: "telc Deutsch B1",
  TELC_B2: "telc Deutsch B2",
  TELC_C1_HOCHSCHULE: "telc Deutsch C1 Hochschule",
};

type Skill = "writing" | "speaking";

function buildSystem(exam: GermanExam, skill: Skill, levelLabel: string): string {
  const examName = EXAM_NAME[exam];
  const skillLine =
    skill === "speaking"
      ? `You are grading TEXT from an automatic transcript of German speech. You CANNOT hear the audio: NEVER judge or mention accent, pronunciation, or audio quality. The transcript may contain recognition errors or filler — judge the substance, not artifacts.`
      : `You are grading a written German response.`;
  return `You are an honest ${skill} assessor for AlmiGoethe, a practice tool for ${examName} (${levelLabel}).

${skillLine}
- Judge the German against the level/standard of ${examName}. Give feedback in clear English (you may quote short German phrases).
- ${ORIGINALITY_CLAUSE}
- ${honestyClause(exam)}
- ${BANNED_GRADER_WORDS}
- Judge only what the candidate produced.

Rate these four criteria, each "strong" | "adequate" | "limited":
- communication: task fulfilled, required points covered, register appropriate to the situation and level.
- coherence: organised and linked so it is easy to follow.
- range: vocabulary range, precision and appropriacy for the level.
- accuracy: grammar, spelling/word order and sentence structure${skill === "speaking" ? " (NOT pronunciation)" : ""}.

Return ONLY a JSON object with exactly these keys:
{
  "communication": "...", "coherence": "...", "range": "...", "accuracy": "...",
  "strengths": string[],      // 1-3 short, specific
  "improvements": string[],   // 1-3 short, specific, actionable
  "overallComment": string    // one or two honest sentences
}`;
}

function extractJson(text: string): unknown {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) {
    throw new Error("No JSON object found in model output");
  }
  return JSON.parse(text.slice(start, end + 1));
}

function wordCount(s: string): number {
  return s.trim() ? s.trim().split(/\s+/).length : 0;
}

/** Grade a productive response with Sonnet into a 0..1 fraction + trait feedback. */
export async function evaluateProductive(input: {
  exam: GermanExam;
  section: string;
  skill: Skill;
  levelLabel: string;
  payload: ProductivePayload;
  response: WritingResponse | SpeakingResponse;
  userId: string;
}): Promise<ProductiveScore> {
  const { exam, section, skill, levelLabel, payload, response, userId } = input;
  const text = "text" in response ? response.text : response.transcript;
  const words = wordCount(text);
  const feature = `exam.${exam.toLowerCase()}.${section.toLowerCase()}`;

  const bounds =
    skill === "writing" && payload.wordMin != null && payload.wordMax != null
      ? ` The candidate produced ${words} words (expected ${payload.wordMin}–${payload.wordMax}).`
      : ` The candidate produced ${words} words.`;

  const userMessage = `${EXAM_NAME[exam]} — ${section} (${levelLabel}).${bounds}
SITUATION:
${payload.situation}
TASK INSTRUCTION:
${payload.instruction}

CANDIDATE'S GERMAN ${skill === "speaking" ? "TRANSCRIPT" : "RESPONSE"}:
${text}

Assess it against the four criteria and return the JSON object.`;

  const client = getAnthropicClient();
  const started = Date.now();
  let raw = "";
  let usage = { inputTokens: 0, outputTokens: 0, cacheReadTokens: 0, cacheWriteTokens: 0 };
  try {
    const msg = await client.messages.create({
      model: MODELS.SONNET,
      max_tokens: 700,
      system: [
        { type: "text", text: buildSystem(exam, skill, levelLabel), cache_control: { type: "ephemeral" } },
      ],
      messages: [{ role: "user", content: userMessage }],
    });
    const block = msg.content.find((c) => c.type === "text");
    raw = block && block.type === "text" ? block.text : "";
    usage = {
      inputTokens: msg.usage.input_tokens,
      outputTokens: msg.usage.output_tokens,
      cacheReadTokens: msg.usage.cache_read_input_tokens ?? 0,
      cacheWriteTokens: msg.usage.cache_creation_input_tokens ?? 0,
    };
  } catch (err) {
    await recordCost({
      userId,
      feature,
      model: MODELS.SONNET,
      usage,
      success: false,
      errorMessage: err instanceof Error ? err.message : String(err),
    });
    throw err;
  }

  const costCents = await recordCost({ userId, feature, model: MODELS.SONNET, usage, success: true });

  const feedback = productiveFeedbackSchema.parse(extractJson(raw));
  const traits = [feedback.communication, feedback.coherence, feedback.range, feedback.accuracy];
  let fraction = traits.reduce((s, t) => s + LEVEL_VALUE[t], 0) / traits.length;
  // A writing response well under the task length can't demonstrate the criteria.
  if (skill === "writing" && payload.wordMin != null && words < payload.wordMin * 0.6) {
    fraction *= 0.6;
  }
  fraction = Math.min(1, Math.max(0, fraction));

  return {
    fraction,
    feedback,
    telemetry: { aiModel: MODELS.SONNET, costCents, latencyMs: Date.now() - started },
  };
}
