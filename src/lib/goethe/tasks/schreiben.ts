// SCHREIBEN (Writing) — AI. Level-aware German writing: a short message / informal
// email (A1–B1), a semi-formal/formal letter, or an opinion/argumentative essay
// (B2–C2). An AI rater returns qualitative TRAIT levels against the FOUR Goethe
// writing criteria + honest notes, converted to a practice fraction (mapped to a
// points estimate by the caller). It assesses the GERMAN text but gives feedback
// in English so learners at any level can act on it.
//
// Structured output validated with Zod AFTER parsing (Anthropic's structured
// endpoint rejects min/max/items; keep the request plain, enforce shape in code).

import { z } from "zod";
import type { GoetheLevel } from "@prisma/client";
import { getAnthropicClient, recordCost } from "@/lib/ai/anthropic-client";
import { MODELS } from "@/lib/ai/models";

export const schreibenPayloadSchema = z.object({
  situation: z.string(),
  instruction: z.string(),
  wordMin: z.number().int().nonnegative(),
  wordMax: z.number().int().nonnegative(),
});
export type SchreibenPayload = z.infer<typeof schreibenPayloadSchema>;

export const writingResponseSchema = z.object({ text: z.string() });
export type WritingResponse = z.infer<typeof writingResponseSchema>;

const TRAIT = z.enum(["strong", "adequate", "limited"]);

// The four Goethe writing assessment criteria.
export const schreibenFeedbackSchema = z.object({
  communication: TRAIT, // Erfüllung — task fulfilled, all points covered, right register
  coherence: TRAIT, // Kohärenz — organised, linked, easy to follow
  range: TRAIT, // Wortschatz — vocabulary range, precision, appropriacy for the level
  accuracy: TRAIT, // Strukturen — grammar, spelling, sentence structure
  strengths: z.array(z.string()),
  improvements: z.array(z.string()),
  overallComment: z.string(),
});
export type SchreibenFeedback = z.infer<typeof schreibenFeedbackSchema>;

export type AiScore = {
  pointsEarned: number;
  pointsMax: number;
  fraction: number;
  feedback: SchreibenFeedback;
  telemetry: { aiModel: string; costCents: number; latencyMs: number };
};

const POINTS_MAX = 12; // 4 criteria × 3 trait levels
const LEVEL_VALUE: Record<z.infer<typeof TRAIT>, number> = {
  strong: 1.0,
  adequate: 0.6,
  limited: 0.3,
};

const SYSTEM = `You are an honest writing assessor for AlmiGoethe, a practice tool for the Goethe-Zertifikat German exams (CEFR A1–C2).

You rate a candidate's German WRITING response against the FOUR Goethe writing criteria, judged AT THE CANDIDATE'S CEFR LEVEL. Rules:
- The candidate's text is in German. Assess the German. Give your feedback in clear English so a learner at any level can act on it; you may quote short German phrases.
- Judge against the stated CEFR level: an A1 short message and a C1 essay are held to very different standards. Do not expect C1 range from an A1 writer, and do not over-credit simple language at C1.
- All content here is original to AlmiGoethe. Never reference or reproduce real Goethe-Institut test material.
- This is a PRACTICE ESTIMATE, not an official Goethe result. Never state an official score or claim the candidate has passed the real exam.
- Be honest and constructive. If something is limited, say so plainly but kindly. Do not inflate.
- Banned words: "weak", "poor", "wrong", "failed". Prefer "improvement opportunity".
- Judge only what the candidate wrote.

The four criteria:
- communication (Erfüllung): is the task fulfilled? Are all required points covered, in a register/tone appropriate to the situation and level?
- coherence (Kohärenz): is the text organised and linked with connectors so it is easy to follow?
- range (Wortschatz): vocabulary range, precision and appropriacy for the level.
- accuracy (Strukturen): grammar, spelling, word order and sentence structure.

Return ONLY a JSON object, no prose around it, with exactly these keys:
{
  "communication": "strong" | "adequate" | "limited",
  "coherence": "strong" | "adequate" | "limited",
  "range": "strong" | "adequate" | "limited",
  "accuracy": "strong" | "adequate" | "limited",
  "strengths": string[],        // 1-3 short, specific
  "improvements": string[],     // 1-3 short, specific, actionable
  "overallComment": string      // one or two honest sentences
}`;

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

/** Evaluate a German Schreiben response against the four Goethe criteria with
 *  Claude Sonnet, at the candidate's CEFR level. */
export async function evaluateSchreiben(input: {
  level: GoetheLevel;
  payload: SchreibenPayload;
  response: WritingResponse;
  userId: string;
}): Promise<AiScore> {
  const { level, payload, response, userId } = input;
  const words = wordCount(response.text);

  const userMessage = `Goethe-Zertifikat ${level} — Schreiben. The candidate wrote ${words} words (expected ${payload.wordMin}–${payload.wordMax}).
SITUATION:
${payload.situation}
TASK INSTRUCTION:
${payload.instruction}

CANDIDATE'S GERMAN RESPONSE:
${response.text}

Assess it at CEFR ${level} against the four criteria and return the JSON object.`;

  const client = getAnthropicClient();
  const started = Date.now();
  let raw = "";
  let usage = { inputTokens: 0, outputTokens: 0, cacheReadTokens: 0, cacheWriteTokens: 0 };
  try {
    const msg = await client.messages.create({
      model: MODELS.SONNET,
      max_tokens: 700,
      system: [{ type: "text", text: SYSTEM, cache_control: { type: "ephemeral" } }],
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
      feature: "schreiben.evaluate",
      model: MODELS.SONNET,
      usage,
      success: false,
      errorMessage: err instanceof Error ? err.message : String(err),
    });
    throw err;
  }

  const costCents = await recordCost({
    userId,
    feature: "schreiben.evaluate",
    model: MODELS.SONNET,
    usage,
    success: true,
  });

  const feedback = schreibenFeedbackSchema.parse(extractJson(raw));

  const traits = [feedback.communication, feedback.coherence, feedback.range, feedback.accuracy];
  let fraction = traits.reduce((s, t) => s + LEVEL_VALUE[t], 0) / traits.length;
  // A response well under the task length can't demonstrate the criteria — cap it.
  if (words < payload.wordMin * 0.6) fraction *= 0.6;
  fraction = Math.min(1, Math.max(0, fraction));

  return {
    pointsEarned: Math.round(fraction * POINTS_MAX),
    pointsMax: POINTS_MAX,
    fraction,
    feedback,
    telemetry: { aiModel: MODELS.SONNET, costCents, latencyMs: Date.now() - started },
  };
}
