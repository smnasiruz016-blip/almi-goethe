/**
 * RR-397 · how many AI scorings of a kind a free account has already RECEIVED, across BOTH engines (the Goethe modules and the
 * other German exams: TestDaF, telc, DTZ, DSH, ÖSD). Counted from SCORED attempts — real results, never clicks — so the free
 * 48 hours give 1 AI-scored Writing and 1 AI-scored Speaking per account in total, not one per engine.
 */
import { prisma } from "@/lib/prisma";
import { productiveSectionKeys } from "@/lib/exams/registry";
import type { TasteAiKind } from "./taste";

export async function countAiScored(userId: string, kind: TasteAiKind): Promise<number> {
  const goetheModule = kind === "WRITING" ? "SCHREIBEN" : "SPRECHEN";
  const sections = productiveSectionKeys(kind === "WRITING" ? "writing" : "speaking");
  const [goethe, exams] = await Promise.all([
    prisma.goetheAttempt.count({ where: { userId, module: goetheModule, status: "SCORED" } }),
    prisma.examAttempt.count({ where: { userId, status: "SCORED", section: { in: sections } } }),
  ]);
  return goethe + exams;
}
