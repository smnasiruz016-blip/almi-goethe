// SEO page components for the eight German and Austrian exam engines under /pruefung. These
// reuse the shared Goethe SEO kit (SeoShell, Breadcrumb, Hero, LinkChips,
// CrossLinkFooter) and add two exam-specific pieces: an
// honest PrepCta pointing at the /exams practice hub, and a disclaimer naming the
// real providers (telc / TestDaF-Institut / g.a.s.t.) we are NOT affiliated with.

//
// The exam × origin and exam × purpose × origin pages were removed (cost fix, Oct 2026) and
// answer 410 Gone, so nothing here links to them.

import Link from "next/link";
import {
  SeoShell,
  Breadcrumb,
  Hero,
  LinkChips,
  CrossLinkFooter,
} from "@/components/goethe-seo/kit";
import { EXAM_ESTIMATE_DISCLAIMER } from "@/lib/exams/types";
import {
  ALL_EXAM_SEO,
  EXAMS_INDEX,
  purposesForExam,
  type ExamSeo,
} from "@/lib/exams/seo/exams-data";
import { examHubUrl } from "@/lib/exams/seo/urls";

function ExamPrepCta({ exam }: { exam: ExamSeo }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-almi-ink">Practise for {exam.name} with AlmiGoethe</h2>
      <p className="mt-2 text-sm text-almi-text">
        Original practice for every section — {exam.sectionsLine} — with honest AI feedback on writing and
        speaking.{" "}
        {exam.exam === "TESTDAF"
          ? "You get a TDN estimate per section, with no invented overall score and no pass/fail — exactly how TestDaF reports."
          : "You get a percentage estimate per part against the 60% pass mark."}{" "}
        All material is original — we never copy {exam.provider}&apos;s exam papers.
      </p>
      <Link
        href="/exams"
        className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-full bg-almi-coral px-6 py-2.5 text-sm font-semibold text-almi-ink hover:bg-almi-coral-deep"
      >
        Start practising →
      </Link>
    </section>
  );
}

function ExamDisclaimer({ exam }: { exam: ExamSeo }) {
  return (
    <p className="mt-10 rounded-xl border border-almi-bg-peach bg-almi-paper px-4 py-3 text-xs text-almi-text-muted">
      AlmiGoethe is original practice material and is not affiliated with or endorsed by {exam.provider}.
      We never copy or reproduce {exam.name} test material. {EXAM_ESTIMATE_DISCLAIMER}
    </p>
  );
}

// A compact "how it's scored / what it's for" block used on hub + origin pages.
function ExamFacts({ exam }: { exam: ExamSeo }) {
  return (
    <>
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-almi-ink">Format</h2>
        <p className="mt-2 text-sm text-almi-text">{exam.format}</p>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-almi-ink">How it&apos;s scored</h2>
        <p className="mt-2 text-sm text-almi-text">{exam.scoring}</p>
        {exam.scoringNote && (
          <p className="mt-3 rounded-xl border border-amber-300/60 bg-amber-50 px-4 py-3 text-sm text-almi-text">
            {exam.scoringNote}
          </p>
        )}
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-almi-ink">What {exam.name} is for</h2>
        <p className="mt-2 text-sm text-almi-text">{exam.usedFor}</p>
        <div className="mt-3 text-sm font-semibold">
          <a href={exam.officialUrl} target="_blank" rel="noopener noreferrer" className="text-almi-coral hover:underline">
            Official: {exam.officialLabel} ↗
          </a>
        </div>
      </section>
    </>
  );
}

// ---- Index: /pruefung ------------------------------------------------------

export function ExamsIndexPage() {
  return (
    <SeoShell>
      <Breadcrumb trail={[{ label: "German & Austrian exams" }]} />
      <Hero
        eyebrow="German & Austrian exams"
        title="German and Austrian exams — for study, work, citizenship and integration"
        intro="Eight separate exams, each with its own real format and scoring — across Germany and Austria. Pick the one your goal needs, see what it takes from your country, and practise free."
      />
      <section className="mt-10 space-y-4">
        {ALL_EXAM_SEO.map((e) => (
          <Link
            key={e.slug}
            href={examHubUrl(e.exam)}
            className="block rounded-2xl border border-almi-bg-peach bg-almi-paper p-5 hover:border-almi-coral"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">
              {e.eyebrow} · CEFR {e.cefr}
            </p>
            <h2 className="mt-1 text-lg font-semibold text-almi-ink">{e.name}</h2>
            <p className="mt-1 text-sm text-almi-text">{e.tagline}</p>
          </Link>
        ))}
      </section>
      <CrossLinkFooter />
    </SeoShell>
  );
}

// ---- Hub: /pruefung/[exam] -------------------------------------------------

export function ExamHubPage({ exam }: { exam: ExamSeo }) {
  const purposes = purposesForExam(exam.exam);
  return (
    <SeoShell>
      <Breadcrumb trail={[{ label: "German exams", href: EXAMS_INDEX }, { label: exam.name }]} />
      <Hero
        eyebrow={`${exam.eyebrow} · CEFR ${exam.cefr}`}
        title={`${exam.name} — format, scoring and what it's for`}
        intro={exam.tagline}
      />
      <ExamFacts exam={exam} />
      {purposes.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-almi-ink">By purpose</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {purposes.map((p) => (
              <li key={p.slug} className="rounded-full border border-almi-bg-peach bg-almi-paper px-3 py-1 text-sm text-almi-text">
                {p.name}
              </li>
            ))}
          </ul>
        </section>
      )}
      <ExamPrepCta exam={exam} />
      <LinkChips
        title="Other German exams"
        links={ALL_EXAM_SEO.filter((e) => e.slug !== exam.slug).map((e) => ({
          label: e.name,
          href: examHubUrl(e.exam),
        }))}
      />
      <CrossLinkFooter />
      <ExamDisclaimer exam={exam} />
    </SeoShell>
  );
}
