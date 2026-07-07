// Practice one section item. Loads a random active ExamItem (answer key stripped),
// gates writing/speaking on paid access, and hands off to the client runner, which
// submits to /api/exams/submit and renders the exam's own honest result.

import Link from "next/link";
import { notFound } from "next/navigation";
import { requireUser } from "@/lib/auth";
import { hasPaidAccess } from "@/lib/billing/plans";
import { examBySlug, sectionDefFor } from "@/lib/exams/registry";
import { getTelcConfig, isTelc, isTestDaf } from "@/lib/exams/scoring";
import { pickClientItem } from "@/lib/exams/pick";
import { ExamItemRunner } from "@/components/exams/ExamItemRunner";

export default async function ExamSectionPracticePage({
  params,
}: {
  params: Promise<{ exam: string; section: string }>;
}) {
  const user = await requireUser();
  const { exam: examSlug, section: sectionSlug } = await params;
  const examDef = examBySlug(examSlug);
  if (!examDef) notFound();
  const sectionDef = sectionDefFor(examDef.exam, sectionSlug);
  if (!sectionDef) notFound();

  const testDaf = isTestDaf(examDef.exam);
  const thresholdPending = isTelc(examDef.exam) && !getTelcConfig(examDef.exam).thresholdVerified;
  const needsPaid = sectionDef.scoringMode === "AI" && !hasPaidAccess(user);

  const item = needsPaid ? null : await pickClientItem(examDef.exam, sectionDef.key);

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">
        {examDef.displayName} · {sectionDef.label}
      </p>
      <div className="flex items-baseline justify-between gap-3">
        <h1 className="text-2xl font-semibold text-almi-ink">{item?.title ?? sectionDef.label}</h1>
        <Link href={`/exams/${examSlug}`} className="text-sm text-almi-text-muted underline">
          ← sections
        </Link>
      </div>
      {item?.prompt && <p className="text-base text-almi-text">{item.prompt}</p>}
      {item?.guidanceNote && (
        <p className="rounded-xl border border-almi-accent/30 bg-almi-accent/5 px-4 py-3 text-sm text-almi-text">
          💡 {item.guidanceNote}
        </p>
      )}

      {needsPaid ? (
        <div className="rounded-xl border border-almi-accent/40 bg-almi-accent/10 px-4 py-3 text-sm text-almi-ink">
          AI feedback on writing and speaking is part of a subscription.{" "}
          <a href="/pricing" className="font-semibold underline">
            See plans
          </a>{" "}
          — reading, listening and language-element practice is free.
        </div>
      ) : !item ? (
        <p className="rounded-xl border border-almi-coral/40 bg-almi-coral/5 px-4 py-3 text-sm text-almi-coral-deep">
          No practice items are seeded for this section yet. Check back soon.
        </p>
      ) : (
        <ExamItemRunner item={item} isTestDaf={testDaf} thresholdPending={thresholdPending} />
      )}

      <p className="text-xs text-almi-text-muted">
        Original to AlmiGoethe — never copied from official exam material. Practice estimate, not an
        official result.
      </p>
    </div>
  );
}
