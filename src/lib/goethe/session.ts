// Session engine for practice sets and the full per-level mock.
//
// PRACTICE_SET: several items of ONE module at the session's LEVEL (difficulty
// varies for variety — not adaptive across levels). MOCK: the full Goethe for one
// LEVEL — all four modules in exam order (Lesen → Hören → Schreiben → Sprechen).
// Each module scored independently — no fabricated composite.

import { Prisma } from "@prisma/client";
import type { GoetheDifficulty, GoetheLevel, GoetheModule, GoetheTaskType } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { MODULE_DEFS, mockPlan } from "@/lib/goethe/registry";
import { fractionToModuleScore } from "@/lib/goethe/goethe-scale";
import type { ModuleScore } from "@/lib/goethe/types";

const DIFFICULTIES: GoetheDifficulty[] = ["FOUNDATION", "CORE", "STRETCH"];
const PRACTICE_SET_STEPS = 3;

function fractionOf(a: { pointsEarned: number; pointsMax: number }): number {
  return a.pointsMax ? a.pointsEarned / a.pointsMax : 0;
}

function adaptDifficulty(current: GoetheDifficulty, fraction: number): GoetheDifficulty {
  let i = DIFFICULTIES.indexOf(current);
  if (fraction >= 0.8) i = Math.min(DIFFICULTIES.length - 1, i + 1);
  else if (fraction < 0.5) i = Math.max(0, i - 1);
  return DIFFICULTIES[i];
}

type Picked = { id: string; taskType: GoetheTaskType };

async function pickItem(
  level: GoetheLevel,
  module: GoetheModule,
  difficulty: GoetheDifficulty,
  excludeIds: string[] = [],
): Promise<Picked | null> {
  const notIn = excludeIds.length ? { id: { notIn: excludeIds } } : {};
  const tries = [
    { level, module, active: true, difficulty, ...notIn },
    { level, module, active: true, ...notIn },
    { level, module, active: true },
  ];
  for (const where of tries) {
    const pool = await prisma.goetheItem.findMany({ where, select: { id: true, taskType: true } });
    if (pool.length > 0) {
      const p = pool[Math.floor(Math.random() * pool.length)];
      return { id: p.id, taskType: p.taskType };
    }
  }
  return null;
}

async function pickPracticeStart(
  userId: string,
  level: GoetheLevel,
  module: GoetheModule,
): Promise<GoetheDifficulty> {
  const recent = await prisma.goetheAttempt.findMany({
    where: { userId, level, module, status: "SCORED" },
    orderBy: { submittedAt: "desc" },
    take: 5,
    select: { pointsEarned: true, pointsMax: true },
  });
  if (recent.length === 0) return "CORE";
  const fr = recent.reduce((s, a) => s + fractionOf(a), 0) / recent.length;
  if (fr >= 0.8) return "STRETCH";
  if (fr < 0.5) return "FOUNDATION";
  return "CORE";
}

async function createStepAttempt(params: {
  userId: string;
  sessionId: string;
  level: GoetheLevel;
  step: number;
  module: GoetheModule;
  difficulty: GoetheDifficulty;
  excludeIds?: string[];
}): Promise<boolean> {
  const picked = await pickItem(params.level, params.module, params.difficulty, params.excludeIds ?? []);
  if (!picked) return false;
  await prisma.goetheAttempt.create({
    data: {
      userId: params.userId,
      itemId: picked.id,
      level: params.level,
      module: params.module,
      taskType: picked.taskType,
      status: "IN_PROGRESS",
      sessionId: params.sessionId,
      sessionStep: params.step,
    },
  });
  return true;
}

export async function startSession(input: {
  userId: string;
  mode: "PRACTICE_SET" | "MOCK";
  level: GoetheLevel;
  module?: GoetheModule;
}): Promise<string | null> {
  if (input.mode === "MOCK") {
    const plan = mockPlan(); // four modules in exam order
    const session = await prisma.goetheSession.create({
      data: {
        userId: input.userId,
        mode: "MOCK",
        level: input.level,
        targetCount: plan.length,
        currentDifficulty: "CORE",
        plan: plan as unknown as Prisma.InputJsonValue,
      },
    });
    const ok = await createStepAttempt({
      userId: input.userId,
      sessionId: session.id,
      level: input.level,
      step: 0,
      module: plan[0],
      difficulty: "CORE",
    });
    if (!ok) {
      await prisma.goetheSession.delete({ where: { id: session.id } });
      return null;
    }
    return session.id;
  }

  const module = input.module;
  if (!module) return null;
  const def = MODULE_DEFS[module];
  const targetCount = def.scoringMode === "DETERMINISTIC" ? PRACTICE_SET_STEPS : 1;
  const startDifficulty = await pickPracticeStart(input.userId, input.level, module);
  const session = await prisma.goetheSession.create({
    data: {
      userId: input.userId,
      mode: "PRACTICE_SET",
      level: input.level,
      module,
      targetCount,
      currentDifficulty: startDifficulty,
    },
  });
  const ok = await createStepAttempt({
    userId: input.userId,
    sessionId: session.id,
    level: input.level,
    step: 0,
    module,
    difficulty: startDifficulty,
  });
  if (!ok) {
    await prisma.goetheSession.delete({ where: { id: session.id } });
    return null;
  }
  return session.id;
}

export async function getSessionView(sessionId: string, userId: string) {
  return prisma.goetheSession.findFirst({
    where: { id: sessionId, userId },
    include: { attempts: { include: { item: true }, orderBy: { sessionStep: "asc" } } },
  });
}

export async function advanceSession(sessionId: string, userId: string): Promise<void> {
  const session = await prisma.goetheSession.findFirst({
    where: { id: sessionId, userId },
    include: { attempts: true },
  });
  if (!session || session.status === "COMPLETED") return;

  const current = session.attempts.find((a) => a.sessionStep === session.currentStep);
  if (!current || current.status !== "SCORED") return;

  const nextStep = session.currentStep + 1;
  if (nextStep >= session.targetCount) {
    await prisma.goetheSession.update({
      where: { id: session.id },
      data: { status: "COMPLETED", completedAt: new Date() },
    });
    return;
  }

  let nextModule: GoetheModule;
  let nextDifficulty: GoetheDifficulty;
  if (session.mode === "MOCK") {
    const plan = (session.plan as GoetheModule[] | null) ?? mockPlan();
    nextModule = plan[nextStep];
    nextDifficulty = "CORE";
  } else {
    nextModule = current.module;
    nextDifficulty = adaptDifficulty(session.currentDifficulty, fractionOf(current));
  }

  const ok = await createStepAttempt({
    userId,
    sessionId: session.id,
    level: session.level,
    step: nextStep,
    module: nextModule,
    difficulty: nextDifficulty,
    excludeIds: session.attempts.map((a) => a.itemId),
  });
  await prisma.goetheSession.update({
    where: { id: session.id },
    data: {
      currentStep: nextStep,
      currentDifficulty: nextDifficulty,
      ...(ok ? {} : { status: "COMPLETED", completedAt: new Date() }),
    },
  });
}

/** Aggregate independent per-module practice scores from a session's scored
 *  attempts at the session's level. Average the fractions within a module, then
 *  map to one honest module score. No composite. */
export function aggregateSession(
  level: GoetheLevel,
  attempts: { module: GoetheModule; status: string; pointsEarned: number; pointsMax: number }[],
): Record<GoetheModule, ModuleScore> {
  const fractionsByModule: Partial<Record<GoetheModule, number[]>> = {};
  for (const a of attempts) {
    if (a.status !== "SCORED") continue;
    (fractionsByModule[a.module] ??= []).push(fractionOf(a));
  }
  const out: Record<GoetheModule, ModuleScore> = {
    LESEN: null,
    HOEREN: null,
    SCHREIBEN: null,
    SPRECHEN: null,
  };
  for (const module of Object.keys(fractionsByModule) as GoetheModule[]) {
    const fractions = fractionsByModule[module]!;
    const avg = fractions.reduce((s, f) => s + f, 0) / fractions.length;
    out[module] = fractionToModuleScore(level, avg);
  }
  return out;
}
