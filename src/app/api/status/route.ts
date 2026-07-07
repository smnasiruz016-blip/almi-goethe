// Lightweight ops/health endpoint: confirms the practice item bank is seeded and
// reports active counts per sub-test (no PII, counts only). Used to verify a
// deploy's auto-seed step landed.

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(): Promise<NextResponse> {
  try {
    const [byModule, total, approvedReviews, byExam, examTotal] = await Promise.all([
      prisma.goetheItem.groupBy({
        by: ["level", "module"],
        where: { active: true },
        _count: true,
      }),
      prisma.goetheItem.count({ where: { active: true } }),
      prisma.review.count({ where: { approved: true } }),
      // The four new German-exam engines (TestDaF + telc B1/B2/C1H) — separate
      // ExamItem bank; lets a deploy confirm the exam-append seed step landed.
      prisma.examItem.groupBy({
        by: ["exam", "section"],
        where: { active: true },
        _count: true,
      }),
      prisma.examItem.count({ where: { active: true } }),
    ]);
    const items: Record<string, number> = {};
    for (const r of byModule) items[`${r.level}.${r.module}`] = r._count;
    const examItems: Record<string, number> = {};
    for (const r of byExam) examItems[`${r.exam}.${r.section}`] = r._count;
    return NextResponse.json(
      { ok: true, itemsActive: total, items, examItemsActive: examTotal, examItems, approvedReviews },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: e instanceof Error ? e.message : "error" },
      { status: 500 },
    );
  }
}
