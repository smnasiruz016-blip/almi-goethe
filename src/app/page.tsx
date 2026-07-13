import type { Metadata } from "next";
import Link from "next/link";
import { MODULE_DEFS } from "@/lib/goethe/registry";
import { MODULE_ORDER, MODULE_LABEL, LEVELS, LEVEL_LABEL } from "@/lib/goethe/types";
import { TestimonialsSection } from "@/components/reviews/TestimonialsSection";

// Re-render hourly so newly approved testimonials appear without a redeploy.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: {
    absolute: "Goethe Exam Practice (A1–C2) — Real CEFR Levels | AlmiGoethe",
  },
  description:
    "Goethe-Zertifikat practice, all six CEFR levels (A1–C2) — honest per-module estimates for reading, writing, listening and speaking on real formats. Original material.",
  openGraph: {
    title: "AlmiGoethe — honest Goethe-Zertifikat practice (A1–C2)",
    description:
      "Original German practice for all four modules at six CEFR levels, with a points estimate shown as a range — not an inflated score.",
  },
};

const PROMISES = [
  {
    title: "Built around the real Goethe-Zertifikat",
    detail:
      "Four modules in the real task formats — Lesen and Hören questions, a Schreiben writing task, and Sprechen speaking tasks — at all six CEFR levels, A1 to C2.",
  },
  {
    title: "Honest estimates, shown as ranges",
    detail:
      "We never invent a precise score. You see each module as a points range with the 60% pass mark — because honest prep means showing the uncertainty.",
  },
  {
    title: "Original German material",
    detail:
      "Every audio, reading text, writing task and speaking prompt is written from scratch in German — never copied from the Goethe-Institut.",
  },
  {
    title: "Feedback you can act on",
    detail:
      "AI feedback on Schreiben and Sprechen points to what to fix next — against the official Goethe criteria, level-aware, constructive and never inflated.",
  },
] as const;

const PRICING_LINES = [
  "Honest AI feedback on Schreiben and Sprechen, level-aware (A1–C2)",
  "Free, auto-marked Lesen and Hören practice",
  "A per-module points estimate with the 60% pass mark, shown as ranges",
  "Full mock for any level — all four modules in exam order",
  "Original German practice material — never copied from the Goethe-Institut",
  "$12/month with a 7-day free trial, cancel anytime",
] as const;

const FAQ = [
  {
    q: "How is the Goethe-Zertifikat scored?",
    a: "Each of the four modules (Lesen, Hören, Schreiben, Sprechen) is scored to a points maximum, and 60% is the pass mark. At B1 and above the modules are passed independently. AlmiGoethe estimates each module from your practice and shows it as a points range with the 60% pass mark — a practice estimate, not an official result.",
  },
  {
    q: "Which levels does AlmiGoethe cover?",
    a: "All six CEFR levels: A1, A2, B1, B2, C1 and C2. You choose your level in your account, and your practice and full mock run at that level. The standards the AI applies are level-aware — an A1 short message and a C1 essay are judged very differently.",
  },
  {
    q: "Is the content in German?",
    a: "Yes. The reading texts, audio, and writing and speaking prompts are in German. Your feedback is given in clear English so a learner at any level can act on it.",
  },
  {
    q: "Is AlmiGoethe practice copied from the Goethe-Institut?",
    a: "No. Every audio, text, writing task and speaking prompt is original, written from scratch to mirror the real task types. We never copy or reproduce Goethe-Institut material.",
  },
  {
    q: "Is my AlmiGoethe estimate my real Goethe result?",
    a: "No. It's a practice estimate to guide your prep. Your real result comes only from an official, calibrated Goethe-Zertifikat exam — confirm the level you need with the Goethe-Institut, your university, or the relevant German authority.",
  },
  {
    q: "How much does AlmiGoethe cost?",
    a: "$12 per month with a 7-day free trial, monthly only, cancel anytime. Lesen and Hören practice is free; AI feedback on Schreiben and Sprechen is part of the subscription.",
  },
] as const;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// Illustrative sample — clearly labelled, never a real user, never a real result.
const SAMPLE = [
  { name: "Lesen", range: "78–94 / 100" },
  { name: "Hören", range: "70–86 / 100" },
  { name: "Schreiben", range: "55–71 / 100" },
  { name: "Sprechen", range: "62–78 / 100" },
];

function ScoreMockup() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="rounded-3xl border border-almi-bg-peach bg-almi-paper p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-wider text-almi-text-muted">Sample estimate · B1</p>
          <span className="rounded-full bg-almi-bg-peach px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-almi-ink">Sample</span>
        </div>
        <ul className="mt-4 space-y-2.5">
          {SAMPLE.map((s) => (
            <li key={s.name} className="flex items-baseline justify-between text-sm">
              <span className="font-medium text-almi-ink">{s.name}</span>
              <span className="font-semibold text-almi-coral-deep">{s.range}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 rounded-xl border border-almi-bg-peach bg-almi-bg px-4 py-3">
          <p className="text-xs text-almi-text-muted">
            A points range per module with the 60% pass mark — never one inflated number, and no fake overall.
          </p>
        </div>
      </div>
      <p className="mt-2 text-center text-xs text-almi-text-muted">Illustrative example — not a real score.</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-almi-bg text-almi-text">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-almi-bg via-almi-bg to-almi-bg-peach px-6 pt-16 pb-20 sm:pt-20">
        <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 z-0 h-96 w-96 rounded-full bg-almi-accent/20 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-16 -left-16 z-0 h-80 w-80 rounded-full bg-almi-coral/10 blur-3xl" />
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-almi-accent-deep">AlmiGoethe · Goethe-Zertifikat German practice</p>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.08] text-almi-ink sm:text-5xl">
              Practise the Goethe-Zertifikat with <span className="text-almi-coral">honest AI feedback.</span>
            </h1>
            <p className="mt-5 text-lg text-almi-text">
              Original German practice for all four modules at every CEFR level (A1–C2), with a
              per-module points estimate and the 60% pass mark — so you know exactly what to work on next.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/signup"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-almi-coral px-7 py-3 text-base font-semibold text-almi-ink hover:bg-almi-coral-deep focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-almi-coral/30"
              >
                Practise free
              </Link>
              <Link href="/login" className="text-sm font-medium text-almi-coral hover:underline">
                Already have an account? Log in →
              </Link>
            </div>
            <p className="mt-4 text-sm text-almi-text-muted">
              $12/month, 7-day free trial, cancel anytime · Lesen &amp; Hören free · Original German material, never copied
            </p>
          </div>
          <ScoreMockup />
        </div>
      </section>

      {/* Honest hook */}
      <section className="border-t border-almi-bg-peach bg-almi-paper px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-semibold text-almi-ink">An honest estimate, not a fake score</h2>
          <p className="mt-5 text-base text-almi-text">
            The Goethe-Zertifikat scores each module to a points maximum, with 60% as the pass mark.
            The real exam is calibrated by the Goethe-Institut — so anyone promising you a precise
            result from practice is guessing. AlmiGoethe does the honest thing instead: we estimate each
            module from your practice and show it as a points range with the 60% pass mark.
          </p>
          <p className="mt-4 text-base text-almi-text">
            One principle runs through it: <strong className="text-almi-ink">tell you the truth.</strong> Honest,
            level-aware feedback, original German material, and a clear read on what to work on next — then
            confirm the level you need with the Goethe-Institut.
          </p>
        </div>
      </section>

      {/* Module cards */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-semibold text-almi-ink">The four Goethe modules</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base text-almi-text-muted">
            Lesen and Hören are auto-marked and free to practise. Schreiben and Sprechen are graded with
            honest AI feedback against the official Goethe criteria.
          </p>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {MODULE_ORDER.map((m) => {
              const def = MODULE_DEFS[m];
              return (
                <li key={m} className="flex h-full flex-col rounded-2xl border border-almi-bg-peach bg-almi-paper p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-lg font-semibold text-almi-ink">{MODULE_LABEL[m]}</h3>
                    <span className="text-xs text-almi-text-muted">{def.scoringMode === "AI" ? "AI feedback · Pro" : "Auto-marked · Free"}</span>
                  </div>
                  <p className="mt-2 flex-1 text-sm text-almi-text">{def.blurb}</p>
                  <span className="mt-3 text-xs text-almi-text-muted">Points estimate · 60% pass mark</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Levels A1–C2 */}
      <section className="border-t border-almi-bg-peach bg-almi-bg-peach/40 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-semibold text-almi-ink">Six levels, one place to prepare</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base text-almi-text-muted">
            Choose your CEFR level and every module and full mock runs at that standard.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {LEVELS.map((v) => (
              <li key={v} className="rounded-2xl border border-almi-bg-peach bg-almi-paper p-5">
                <h3 className="text-base font-semibold text-almi-ink">{LEVEL_LABEL[v]}</h3>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-almi-text-muted">
            Not sure which level you need? Confirm with the Goethe-Institut, your university, or the relevant German authority.
          </p>
        </div>
      </section>

      {/* German requirements guide → /goethe SEO hub, and TestDaF/telc → /pruefung */}
      <section className="border-t border-almi-bg-peach px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-almi-ink">Which German level do you actually need?</h2>
          <p className="mt-3 text-base text-almi-text">
            Studying at a German university, working in a shortage occupation, a family or citizenship route —
            each needs a different level. Our free guide gives honest, sourced guidance by goal, profession
            and university, with the official authority to confirm with. Taking a specific exam? See the
            TestDaF and telc guides too.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/goethe"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-almi-ink/15 bg-almi-paper px-7 py-3 text-base font-semibold text-almi-ink hover:border-almi-coral"
            >
              German for Germany — requirements guide →
            </Link>
            <Link
              href="/pruefung"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-almi-ink/15 bg-almi-paper px-7 py-3 text-base font-semibold text-almi-ink hover:border-almi-coral"
            >
              TestDaF &amp; telc — exam guides →
            </Link>
          </div>
        </div>
      </section>

      {/* Why honest */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-semibold text-almi-ink">Honest scoring, level by level</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {PROMISES.map((p) => (
              <li key={p.title} className="flex items-start gap-3 rounded-2xl border border-almi-bg-peach bg-almi-paper p-5">
                <span aria-hidden className="mt-0.5 flex-shrink-0 select-none font-bold text-almi-teal">✓</span>
                <p className="text-sm text-almi-text">
                  <span className="font-semibold text-almi-ink">{p.title}</span>
                  {" — "}
                  {p.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t border-almi-bg-peach bg-almi-paper px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-almi-ink">Simple, honest pricing</h2>
          <p className="mt-3 text-xl font-semibold text-almi-ink">$12/month — 7-day free trial, cancel anytime.</p>
          <ul className="mx-auto mt-6 max-w-xl space-y-2 text-left text-sm text-almi-text">
            {PRICING_LINES.map((line) => (
              <li key={line} className="flex items-start gap-2">
                <span aria-hidden className="mt-0.5 flex-shrink-0 select-none font-bold text-almi-teal">✓</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link href="/signup" className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-almi-coral px-7 py-3 text-base font-semibold text-almi-ink hover:bg-almi-coral-deep">
              Practise free
            </Link>
          </div>
          <p className="mt-4 text-sm text-almi-text-muted">
            <Link href="/pricing" className="underline hover:text-almi-ink">See full pricing</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-semibold text-almi-ink">Common questions</h2>
          <dl className="mt-10 space-y-6">
            {FAQ.map((f) => (
              <div key={f.q} className="rounded-2xl border border-almi-bg-peach bg-almi-bg p-6">
                <dt className="text-lg font-semibold text-almi-ink">{f.q}</dt>
                <dd className="mt-2 text-sm text-almi-text">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <TestimonialsSection />

      {/* Final CTA */}
      <section className="border-t border-almi-bg-peach bg-almi-paper px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-almi-ink">Practise honestly. Walk in ready.</h2>
          <p className="mt-3 text-base text-almi-text">
            Real Goethe modules at your level, honest per-module points estimates, original German
            material — for $12/month with a 7-day free trial.
          </p>
          <div className="mt-8">
            <Link href="/signup" className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-almi-coral px-7 py-3 text-base font-semibold text-almi-ink hover:bg-almi-coral-deep">
              Practise free
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
