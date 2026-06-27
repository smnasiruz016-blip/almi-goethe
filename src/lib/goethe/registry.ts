// The data-driven module registry — the single place that knows about the four
// Goethe modules. Pages, the practice hub, the mock plan and the submit route read
// from here; nothing branches on module with a hand-written if-chain. The CEFR
// LEVEL lives on the item, not here — this describes module STRUCTURE, which
// recurs across all six levels.

import type { GoetheLevel, GoetheModule } from "@prisma/client";
import { lesenPayloadSchema, scoreLesen } from "@/lib/goethe/tasks/lesen";
import { hoerenPayloadSchema, scoreHoeren } from "@/lib/goethe/tasks/hoeren";
import { objectiveResponseSchema } from "@/lib/goethe/tasks/objective";
import {
  schreibenPayloadSchema,
  writingResponseSchema,
  evaluateSchreiben,
} from "@/lib/goethe/tasks/schreiben";
import {
  sprechenPayloadSchema,
  speakingResponseSchema,
  evaluateSprechen,
} from "@/lib/goethe/tasks/sprechen";
import { MODULE_ORDER } from "@/lib/goethe/types";

export type ScoringMode = "DETERMINISTIC" | "AI";

export type ModuleDef = {
  module: GoetheModule;
  slug: string;
  label: string;
  scoringMode: ScoringMode;
  live: boolean;
  blurb: string;
};

// All four modules ship live: Lesen + Hören are deterministic (German MCQ /
// matching / richtig-falsch with German TTS audio); Schreiben + Sprechen are Sonnet
// AI graders against the four Goethe criteria, level-aware (Sprechen grades the
// Whisper transcript only, never accent). Content is filled level-by-level (A1→C2).
export const MODULE_DEFS: Record<GoetheModule, ModuleDef> = {
  LESEN: {
    module: "LESEN",
    slug: "lesen",
    label: "Lesen (Reading)",
    scoringMode: "DETERMINISTIC",
    live: true,
    blurb: "Read German texts and answer multiple-choice, matching and richtig/falsch questions.",
  },
  HOEREN: {
    module: "HOEREN",
    slug: "hoeren",
    label: "Hören (Listening)",
    scoringMode: "DETERMINISTIC",
    live: true,
    blurb: "Listen to German audio and answer questions. Audio is generated for each task.",
  },
  SCHREIBEN: {
    module: "SCHREIBEN",
    slug: "schreiben",
    label: "Schreiben (Writing)",
    scoringMode: "AI",
    live: true,
    blurb: "Write a German message, letter or essay. Honest AI feedback on the four Goethe criteria.",
  },
  SPRECHEN: {
    module: "SPRECHEN",
    slug: "sprechen",
    label: "Sprechen (Speaking)",
    scoringMode: "AI",
    live: true,
    blurb: "Record a spoken German answer. Graded on the four Goethe criteria — never your accent.",
  },
};

export function moduleBySlug(slug: string): ModuleDef | undefined {
  return Object.values(MODULE_DEFS).find((m) => m.slug === slug);
}

// A full mock for a level = all four modules in exam order. (Level chosen at the
// session, not here.) Returned as modules; the session engine picks an item per
// module at the chosen level.
export function mockPlan(): GoetheModule[] {
  return [...MODULE_ORDER];
}

// ---- Server scoring dispatch ----

export type TaskRunResult = {
  pointsEarned: number;
  pointsMax: number;
  fraction: number;
  detail?: unknown;
  feedback?: unknown;
  telemetry?: { aiModel: string; costCents: number; latencyMs: number };
};

export type ModuleHandler = {
  mode: ScoringMode;
  run: (input: {
    payload: unknown;
    response: unknown;
    userId: string;
    level: GoetheLevel;
  }) => Promise<TaskRunResult>;
};

const lesenHandler: ModuleHandler = {
  mode: "DETERMINISTIC",
  run: async ({ payload, response }) =>
    scoreLesen(lesenPayloadSchema.parse(payload), objectiveResponseSchema.parse(response)),
};
const hoerenHandler: ModuleHandler = {
  mode: "DETERMINISTIC",
  run: async ({ payload, response }) =>
    scoreHoeren(hoerenPayloadSchema.parse(payload), objectiveResponseSchema.parse(response)),
};
const schreibenHandler: ModuleHandler = {
  mode: "AI",
  run: async ({ payload, response, userId, level }) => {
    const p = schreibenPayloadSchema.parse(payload);
    const r = writingResponseSchema.parse(response);
    const s = await evaluateSchreiben({ level, payload: p, response: r, userId });
    return { pointsEarned: s.pointsEarned, pointsMax: s.pointsMax, fraction: s.fraction, feedback: s.feedback, telemetry: s.telemetry };
  },
};
const sprechenHandler: ModuleHandler = {
  mode: "AI",
  run: async ({ payload, response, userId, level }) => {
    const p = sprechenPayloadSchema.parse(payload);
    const r = speakingResponseSchema.parse(response);
    const s = await evaluateSprechen({ level, payload: p, response: r, userId });
    return { pointsEarned: s.pointsEarned, pointsMax: s.pointsMax, fraction: s.fraction, feedback: s.feedback, telemetry: s.telemetry };
  },
};

export const MODULE_HANDLERS: Record<GoetheModule, ModuleHandler> = {
  LESEN: lesenHandler,
  HOEREN: hoerenHandler,
  SCHREIBEN: schreibenHandler,
  SPRECHEN: sprechenHandler,
};
