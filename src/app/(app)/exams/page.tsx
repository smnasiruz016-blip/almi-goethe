// Exam-engine picker — the four NEW German exams that run ALONGSIDE the Goethe-
// Zertifikat practice (which stays at /practice). Each exam is scored on its own
// philosophy: TestDaF reports independent per-section levels (no total, no pass/
// fail); telc B1/B2/C1 Hochschule use a 60% per-part pass mark.

import Link from "next/link";
import { requireUser } from "@/lib/auth";
import { ALL_EXAMS, EXAM_DEFS } from "@/lib/exams/registry";
import type { GermanExam } from "@prisma/client";

const BLURB: Record<GermanExam, string> = {
  TESTDAF:
    "University-entry German (B2–C1). Four sections, each scored 0–20 → a TestDaF-Niveaustufe (TDN). No overall score, no pass or fail.",
  TELC_C1_HOCHSCHULE:
    "Academic C1 for university admission. Reading, language elements, listening, writing and speaking. Pass = 60% overall and 60% in each part.",
  TELC_B1:
    "The B1 certificate (also called Zertifikat Deutsch) — often required for citizenship. Pass = 60% of the written part and 60% of the oral part, independently.",
  TELC_B2:
    "Upper-intermediate B2 for work and study. Confirmed section weights; the exact pass threshold is shown honestly as pending official confirmation.",
  DTZ:
    "Deutsch-Test für Zuwanderer (A2–B1) — the integration exam, often required for citizenship. One paper scored out of 100 and banded into a level: 60+ is B1, 33–59 is A2.",
  EINBUERGERUNGSTEST:
    "The civic naturalisation test — 33 multiple-choice questions about Germany's constitution, history, institutions and society. Not a language test: you pass with 17 correct out of 33.",
};

const TAG: Record<GermanExam, string> = {
  TESTDAF: "Per-section TDN · no total",
  TELC_C1_HOCHSCHULE: "60% overall + each part",
  TELC_B1: "60% per part · citizenship",
  TELC_B2: "Threshold pending confirmation",
  DTZ: "Dual outcome A2/B1 · /100",
  EINBUERGERUNGSTEST: "Civic · pass 17 of 33",
};

export default async function ExamsPage() {
  await requireUser();
  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">
          AlmiGoethe · TestDaF &amp; telc engines
        </p>
        <h1 className="mt-1 text-3xl font-semibold text-almi-ink">Choose an exam</h1>
        <p className="mt-2 max-w-2xl text-sm text-almi-text">
          These sit alongside our Goethe-Zertifikat practice. Each exam is scored the way the real one
          is — we never blend them into a single fabricated total. Reading, listening and language-element
          tasks are auto-marked; writing and speaking get honest AI feedback (Pro).
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {ALL_EXAMS.map((exam) => {
          const def = EXAM_DEFS[exam];
          const slug = exam.toLowerCase().replace(/_/g, "-");
          return (
            <Link
              key={exam}
              href={`/exams/${slug}`}
              className="rounded-2xl border border-almi-bg-peach bg-almi-paper p-5 shadow-sm transition hover:border-almi-accent"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-base font-semibold text-almi-ink">{def.displayName}</h3>
                <span className="text-[11px] text-almi-text-muted">{TAG[exam]}</span>
              </div>
              <p className="mt-2 text-sm text-almi-text">{BLURB[exam]}</p>
              <p className="mt-3 text-sm font-semibold text-almi-coral">Practise →</p>
            </Link>
          );
        })}
      </div>

      <p className="text-xs text-almi-text-muted">
        Every task is original to AlmiGoethe — never copied or derived from TestDaF, telc, g.a.s.t. or
        TestDaF-Institut material. Results are practice estimates, not official results. Confirm the
        level and result you need with the exam provider, your university or the relevant German
        authority.
      </p>
    </div>
  );
}
