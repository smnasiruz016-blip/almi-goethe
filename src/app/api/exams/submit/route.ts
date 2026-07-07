// Submit endpoint for the new exam engines (TestDaF + telc B1/B2/C1H). Re-loads the
// ExamItem by id server-side (the client never holds the answer key), gates AI
// sections on paid access, scores via the registry's scoreSection dispatch, and
// persists an ExamAttempt. Returns the exam's OWN result shape — a TestDaF per-
// section TDN (no total, no pass/fail) or a telc percentage against 60%.

import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { getCurrentUser } from "@/lib/auth";
import { hasPaidAccess } from "@/lib/billing/plans";
import { prisma } from "@/lib/prisma";
import { scoreSection, sectionDefFor } from "@/lib/exams/registry";

export const runtime = "nodejs";

export async function POST(req: Request): Promise<NextResponse> {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ ok: false, error: "Not authenticated" }, { status: 401 });
  }

  let body: { itemId?: unknown; response?: unknown; timeSpentSeconds?: unknown };
  try {
    body = (await req.json()) as typeof body;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }
  const itemId = typeof body.itemId === "string" ? body.itemId : "";
  const responseValue = body.response ?? {};
  const timeSpent = typeof body.timeSpentSeconds === "number" ? body.timeSpentSeconds : 0;
  if (!itemId) {
    return NextResponse.json({ ok: false, error: "Missing itemId" }, { status: 400 });
  }

  const item = await prisma.examItem.findUnique({ where: { id: itemId } });
  if (!item || !item.active) {
    return NextResponse.json({ ok: false, error: "Item not found" }, { status: 404 });
  }

  const def = sectionDefFor(item.exam, item.section);
  if (!def) {
    return NextResponse.json({ ok: false, error: "Section not available" }, { status: 400 });
  }

  // AI feedback (writing/speaking) is a paid feature; objective marking is free.
  if (def.scoringMode === "AI" && !hasPaidAccess(user)) {
    return NextResponse.json(
      { ok: false, error: "AI feedback needs a subscription", upgradeUrl: "/pricing" },
      { status: 402 },
    );
  }

  let outcome;
  try {
    outcome = await scoreSection({
      exam: item.exam,
      section: item.section,
      payload: item.payload,
      response: responseValue,
      userId: user.id,
    });
  } catch (err) {
    console.error("[exams.submit] scoring failed:", err);
    return NextResponse.json(
      { ok: false, error: "Could not score this attempt. Try again in a moment." },
      { status: 500 },
    );
  }

  const timeSpentSeconds = Number.isFinite(timeSpent) && timeSpent >= 0 ? Math.round(timeSpent) : 0;

  await prisma.examAttempt.create({
    data: {
      userId: user.id,
      itemId: item.id,
      exam: item.exam,
      level: item.level,
      section: item.section,
      status: "SCORED",
      response: (responseValue ?? {}) as Prisma.InputJsonValue,
      result: outcome as unknown as Prisma.InputJsonValue,
      feedback: (outcome.feedback ?? Prisma.JsonNull) as Prisma.InputJsonValue,
      aiModel: outcome.telemetry?.aiModel ?? null,
      costCents: outcome.telemetry?.costCents ?? null,
      latencyMs: outcome.telemetry?.latencyMs ?? null,
      submittedAt: new Date(),
      timeSpentSeconds,
    },
  });

  return NextResponse.json({ ok: true, outcome });
}
