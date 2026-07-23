// Practice one section item. Loads a random active ExamItem (answer key stripped),
// gates writing/speaking on paid access, and hands off to the client runner, which
// submits to /api/exams/submit and renders the exam's own honest result.

import Link from "next/link";
import { notFound } from "next/navigation";
import { requireUser } from "@/lib/auth";
import { hasPaidAccess } from "@/lib/billing/plans";
import { examBySlug, sectionDefFor } from "@/lib/exams/registry";
import { getTelcConfig, isTelc, isTestDaf } from "@/lib/exams/scoring";
import { pickClientItem, isStateScoped, requestedCountFor } from "@/lib/exams/pick";
import { BUNDESLAENDER, BUNDESLAND_CODES, BUNDESLAND_ITEMS_PER_STATE } from "@/lib/exams/civic-factbase";
import { ExamItemRunner } from "@/components/exams/ExamItemRunner";

export default async function ExamSectionPracticePage({
  params,
  searchParams,
}: {
  params: Promise<{ exam: string; section: string }>;
  searchParams: Promise<{ land?: string }>;
}) {
  const user = await requireUser();
  const { exam: examSlug, section: sectionSlug } = await params;
  const { land } = await searchParams;
  const examDef = examBySlug(examSlug);
  if (!examDef) notFound();
  const sectionDef = sectionDefFor(examDef.exam, sectionSlug);
  if (!sectionDef) notFound();

  const testDaf = isTestDaf(examDef.exam);
  const thresholdPending = isTelc(examDef.exam) && !getTelcConfig(examDef.exam).thresholdVerified;
  const needsPaid = sectionDef.scoringMode === "AI" && !hasPaidAccess(user);
  const stateScoped = isStateScoped(sectionDef.key);

  const result = needsPaid
    ? null
    : await pickClientItem(examDef.exam, sectionDef.key, { bundesland: land });
  const item = result?.kind === "item" ? result.item : null;
  const needsLand = result?.kind === "needs-bundesland";

  // The sourced envelope vs what this Land can honestly supply. Shown, not hidden.
  const requested = stateScoped ? requestedCountFor(examDef.exam, sectionDef.key) : 0;
  const shortfall = stateScoped ? Math.max(0, requested - BUNDESLAND_ITEMS_PER_STATE) : 0;

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
      ) : needsLand ? (
        // No Land chosen — ASK. Never draw "any state": these answers are true of
        // exactly one Bundesland, and the wrong one is a wrong answer.
        <div className="space-y-4">
          <p className="rounded-xl border border-almi-accent/40 bg-almi-accent/10 px-4 py-3 text-sm text-almi-ink">
            The real Einbürgerungstest asks {requested} questions about <strong>your own Bundesland</strong>.
            Choose yours — we never mix Länder, because another state&apos;s answer is simply the wrong answer.
          </p>
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {BUNDESLAND_CODES.map((c) => (
              <li key={c}>
                <Link
                  href={`/exams/${examSlug}/${sectionSlug}?land=${c}`}
                  className="flex min-h-[44px] items-center justify-center rounded-xl border border-almi-bg-peach bg-almi-paper px-3 py-2 text-center text-sm font-medium text-almi-ink hover:border-almi-coral"
                >
                  {BUNDESLAENDER[c].name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : !item ? (
        <p className="rounded-xl border border-almi-coral/40 bg-almi-coral/5 px-4 py-3 text-sm text-almi-coral-deep">
          No practice items are seeded for this section yet. Check back soon.
        </p>
      ) : (
        <>
          {stateScoped && land && (
            <p className="rounded-xl border border-almi-bg-peach bg-almi-bg px-4 py-3 text-sm text-almi-text">
              Practising <strong>{BUNDESLAENDER[land as keyof typeof BUNDESLAENDER]?.name}</strong>.{" "}
              <Link href={`/exams/${examSlug}/${sectionSlug}`} className="underline">
                Change Bundesland
              </Link>
              {shortfall > 0 && (
                <>
                  {" "}— we have {BUNDESLAND_ITEMS_PER_STATE} sourced questions per Land (Landeshauptstadt and
                  Landesparlament) against the {requested} the real test asks. We will not invent the{" "}
                  {shortfall === 1 ? "third" : "others"}; the official remaining one is picture-based
                  (Landeswappen), which a text engine cannot ask honestly.
                </>
              )}
            </p>
          )}
          <ExamItemRunner item={item} isTestDaf={testDaf} thresholdPending={thresholdPending} />
        </>
      )}

      <p className="text-xs text-almi-text-muted">
        Original to AlmiGoethe — never copied from official exam material. Practice estimate, not an
        official result.
      </p>
    </div>
  );
}
