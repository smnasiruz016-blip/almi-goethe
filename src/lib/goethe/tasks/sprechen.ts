// SPRECHEN (Speaking) — AI. Level-aware German speaking: self-introduction (A1–A2),
// ask & answer / plan together, a short presentation (B1+), or an opinion
// discussion (B2+). The candidate records audio; it is transcribed (Whisper, de)
// and we grade the TRANSCRIPT against the FOUR Goethe speaking criteria — never
// accent or audio. The real exam is paired/live; we honestly grade the single
// recorded response and say so.
//
// Structured output validated with Zod AFTER parsing.

import { z } from "zod";
import type { GoetheLevel } from "@prisma/client";
import { getAnthropicClient, recordCost } from "@/lib/ai/anthropic-client";
import { MODELS } from "@/lib/ai/models";

export const sprechenPayloadSchema = z.object({
  taskPrompt: z.string(),
  prepSeconds: z.number().int().nonnegative(),
  speakSeconds: z.number().int().nonnegative(),
  imageUrl: z.string().optional(),
  imageAlt: z.string().optional(),
});
export type SprechenPayload = z.infer<typeof sprechenPayloadSchema>;

export const speakingResponseSchema = z.object({ transcript: z.string() });
export type SpeakingResponse = z.infer<typeof speakingResponseSchema>;

const TRAIT = z.enum(["strong", "adequate", "limited"]);

// The four Goethe speaking criteria (judged from the German words only).
export const sprechenFeedbackSchema = z.object({
  communication: TRAIT, // Erfüllung — task done, all points covered, right register
  coherence: TRAIT, // Kohärenz/Interaktion — organised, linked, easy to follow
  range: TRAIT, // Wortschatz — vocabulary range/precision for the level
  accuracy: TRAIT, // Strukturen — grammar/structure (NOT pronunciation)
  strengths: z.array(z.string()),
  improvements: z.array(z.string()),
  overallComment: z.string(),
});
export type SprechenFeedback = z.infer<typeof sprechenFeedbackSchema>;

export type AiScore = {
  pointsEarned: number;
  pointsMax: number;
  fraction: number;
  feedback: SprechenFeedback;
  telemetry: { aiModel: string; costCents: number; latencyMs: number };
};

const POINTS_MAX = 12; // 4 criteria × 3 trait levels
const LEVEL_VALUE: Record<z.infer<typeof TRAIT>, number> = {
  strong: 1.0,
  adequate: 0.6,
  limited: 0.3,
};

const SYSTEM = `You are an honest speaking assessor for AlmiGoethe, a practice tool for the Goethe-Zertifikat German exams (CEFR A1–C2).

The candidate recorded a short spoken German answer; it has been automatically transcribed and you are judging the TRANSCRIPT against the FOUR Goethe speaking criteria, AT THE CANDIDATE'S CEFR LEVEL. Rules:
- You are grading TEXT from an automatic transcript of German speech. You CANNOT hear the audio. NEVER judge or mention accent, pronunciation, or audio quality — you have no access to them and Goethe fairness forbids penalising accent.
- The transcript comes from speech recognition and may contain small errors or filler words. Do not penalise likely transcription artifacts; judge the substance.
- Judge against the stated CEFR level — an A1 self-introduction and a C1 discussion are held to very different standards.
- Give feedback in clear English (you may quote short German phrases).
- All content is original to AlmiGoethe; never reference real Goethe-Institut material.
- This is a PRACTICE ESTIMATE, not an official Goethe result. Never claim the candidate passed the real exam.
- The real Sprechen exam is usually paired/live; here we grade one recorded response. Be honest and constructive. Banned words: "weak", "poor", "wrong", "failed".

The four criteria (judged from the words only):
- communication (Erfüllung): is the task fulfilled, with the required points and an appropriate register?
- coherence (Kohärenz): organised and linked so it is easy to follow?
- range (Wortschatz): vocabulary range/precision for the level.
- accuracy (Strukturen): grammar, word order, sentence structure — NOT pronunciation.

Return ONLY a JSON object, no prose around it, with exactly these keys:
{
  "communication": "strong" | "adequate" | "limited",
  "coherence": "strong" | "adequate" | "limited",
  "range": "strong" | "adequate" | "limited",
  "accuracy": "strong" | "adequate" | "limited",
  "strengths": string[],
  "improvements": string[],
  "overallComment": string
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

/** Evaluate a German Sprechen transcript against the four Goethe criteria with
 *  Claude Sonnet, at the candidate's CEFR level. Words only — never accent. */
export async function evaluateSprechen(input: {
  level: GoetheLevel;
  payload: SprechenPayload;
  response: SpeakingResponse;
  userId: string;
}): Promise<AiScore> {
  const { level, payload, response, userId } = input;
  const words = wordCount(response.transcript);

  const sceneContext = payload.imageAlt
    ? `\nThe task refers to an image. You cannot see it; for context only, it shows: "${payload.imageAlt}". Do not penalise details you cannot verify.`
    : "";

  const userMessage = `Goethe-Zertifikat ${level} — Sprechen. Prep ${payload.prepSeconds}s, speaking ${payload.speakSeconds}s. Transcript is ${words} words.
TASK PROMPT:
${payload.taskPrompt}${sceneContext}

CANDIDATE'S TRANSCRIBED GERMAN RESPONSE:
${response.transcript}

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
      feature: "sprechen.evaluate",
      model: MODELS.SONNET,
      usage,
      success: false,
      errorMessage: err instanceof Error ? err.message : String(err),
    });
    throw err;
  }

  const costCents = await recordCost({
    userId,
    feature: "sprechen.evaluate",
    model: MODELS.SONNET,
    usage,
    success: true,
  });

  const feedback = sprechenFeedbackSchema.parse(extractJson(raw));

  const traits = [feedback.communication, feedback.coherence, feedback.range, feedback.accuracy];
  let fraction = traits.reduce((s, t) => s + LEVEL_VALUE[t], 0) / traits.length;
  const expectedWords = payload.speakSeconds * 1.3;
  if (words < expectedWords * 0.4) fraction *= 0.6;
  fraction = Math.min(1, Math.max(0, fraction));

  return {
    pointsEarned: Math.round(fraction * POINTS_MAX),
    pointsMax: POINTS_MAX,
    fraction,
    feedback,
    telemetry: { aiModel: MODELS.SONNET, costCents, latencyMs: Date.now() - started },
  };
}
