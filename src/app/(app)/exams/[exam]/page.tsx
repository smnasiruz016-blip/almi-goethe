// Section picker for one exam. Lists the exam's sections (from the registry) with
// per-section scoring mode, plus the exam's philosophy banner:
//   • TestDaF → "independent per-section levels, no total, no pass/fail"
//   • telc B2 → "the official pass threshold is pending confirmation"

import Link from "next/link";
import { notFound } from "next/navigation";
import { requireUser } from "@/lib/auth";
import { examBySlug } from "@/lib/exams/registry";
import { getTelcConfig, isTelc, isTestDaf } from "@/lib/exams/scoring";

export default async function ExamSectionsPage({
  params,
}: {
  params: Promise<{ exam: string }>;
}) {
  await requireUser();
  const { exam: examSlug } = await params;
  const def = examBySlug(examSlug);
  if (!def) notFound();

  const testDaf = isTestDaf(def.exam);
  const thresholdPending = isTelc(def.exam) && !getTelcConfig(def.exam).thresholdVerified;

  return (
    <div className="space-y-7">
      <header>
        <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">
          AlmiGoethe · {def.displayName}
        </p>
        <h1 className="mt-1 text-3xl font-semibold text-almi-ink">Choose a section</h1>
      </header>

      {testDaf && (
        <div className="rounded-2xl border border-almi-accent/40 bg-almi-accent/5 p-5 text-sm text-almi-text">
          <p className="font-semibold text-almi-ink">How TestDaF is scored</p>
          <p className="mt-1">
            Each section is scored independently on a 0–20 scale and reported as a TestDaF-Niveaustufe
            (TDN 3–5, or “unter TDN 3”). There is <span className="font-semibold text-almi-ink">no overall
            score and no pass or fail</span> — you get four separate section results.
          </p>
        </div>
      )}

      {thresholdPending && (
        <div className="rounded-2xl border border-amber-300 bg-amber-50 p-5 text-sm text-amber-800">
          <p className="font-semibold">telc B2 pass threshold — pending confirmation</p>
          <p className="mt-1">
            The section weights are confirmed, but we are still verifying the exact official pass
            threshold from the telc B2 Handbuch. Until then, estimates use telc&apos;s usual 60% guidance
            and are clearly marked as not-yet-official — we never silently imply a threshold.
          </p>
        </div>
      )}

      <div className="grid gap-3 sm:grid-cols-2">
        {def.sections.map((s) => (
          <Link
            key={s.key}
            href={`/exams/${examSlug}/${s.slug}`}
            className="rounded-2xl border border-almi-bg-peach bg-almi-paper p-5 shadow-sm transition hover:border-almi-accent"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-base font-semibold text-almi-ink">{s.label}</h3>
              <span className="text-[11px] text-almi-text-muted">
                {s.scoringMode === "AI" ? "AI feedback · Pro" : "Auto-marked · Free"}
              </span>
            </div>
            <p className="mt-2 text-sm font-semibold text-almi-coral">Practise →</p>
          </Link>
        ))}
      </div>

      <p className="text-xs text-almi-text-muted">
        Original to AlmiGoethe — never copied from official exam material. Practice estimates only.
      </p>
    </div>
  );
}
