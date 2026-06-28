// Shared building blocks for every AlmiGoethe SEO layer. Doctrine (honesty notes,
// not-affiliated disclaimer, Shamool 25% pledge, cross-links) lives here once and
// applies identically across all ~112k Wave-1 pages.

import Link from "next/link";
import { COUNTRIES, originParam, type CountryEntry } from "@/lib/goethe/seo/countries";

export const FAMILY = {
  study: "https://almistudy.almiworld.com/",
  job: "https://almijob.almiworld.com/",
  cv: "https://almicv.almiworld.com/",
  prep: "https://almiprep.almiworld.com/",
  toefl: "https://almitoefl.almiworld.com/",
  shamool: "https://shamoolfoundation.com/",
};

export function SeoShell({ children }: { children: React.ReactNode }) {
  return <main className="mx-auto max-w-3xl px-4 py-10 sm:py-14">{children}</main>;
}

export function Breadcrumb({ trail }: { trail: { label: string; href?: string }[] }) {
  return (
    <p className="text-xs text-almi-text-muted">
      {trail.map((t, i) => (
        <span key={i}>
          {i > 0 && " · "}
          {t.href ? (
            <Link href={t.href} className="hover:underline">
              {t.label}
            </Link>
          ) : (
            <span>{t.label}</span>
          )}
        </span>
      ))}
    </p>
  );
}

export function Hero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: React.ReactNode;
}) {
  return (
    <header className="mt-3">
      <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">{eyebrow}</p>
      <h1 className="mt-2 text-3xl font-semibold leading-tight text-almi-ink sm:text-4xl">{title}</h1>
      <p className="mt-3 text-base text-almi-text">{intro}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href="/signup"
          className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-almi-coral px-7 py-3 text-base font-semibold text-almi-ink hover:bg-almi-coral-deep"
        >
          Practise German free →
        </Link>
        <Link
          href="/pricing"
          className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-almi-ink/15 bg-almi-paper px-6 py-3 text-base font-semibold text-almi-ink hover:border-almi-coral"
        >
          See plans
        </Link>
      </div>
    </header>
  );
}

export function RequirementCard({
  heading,
  headline,
  detail,
  extra,
  note,
  links,
}: {
  heading: string;
  headline: string;
  detail: string;
  extra?: string;
  note: string;
  links: { label: string; href: string }[];
}) {
  return (
    <section className="mt-10 rounded-2xl border border-almi-coral/30 bg-almi-coral/5 p-6">
      <h2 className="text-xl font-semibold text-almi-ink">{heading}</h2>
      <p className="mt-2 text-lg font-semibold text-almi-coral-deep">{headline}</p>
      <p className="mt-2 text-sm text-almi-text">{detail}</p>
      {extra && <p className="mt-2 text-sm text-almi-text">{extra}</p>}
      <p className="mt-4 rounded-xl border border-almi-bg-peach bg-almi-paper px-4 py-3 text-sm text-almi-text">
        {note}
      </p>
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
        {links.map((l) => (
          <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="text-almi-coral hover:underline">
            {l.label} ↗
          </a>
        ))}
      </div>
    </section>
  );
}

export function PrepCta({ levelHint }: { levelHint?: string }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-almi-ink">Practise toward your level with AlmiGoethe</h2>
      <p className="mt-2 text-sm text-almi-text">
        Original practice for all four Goethe modules — Lesen, Hören, Schreiben and Sprechen — at every
        CEFR level (A1–C2){levelHint ? `, including ${levelHint}` : ""}. Honest AI feedback on writing and
        speaking, a points estimate per module with the 60% pass mark, and a full mock test.
      </p>
      <Link
        href="/signup"
        className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-full bg-almi-coral px-6 py-2.5 text-sm font-semibold text-almi-ink hover:bg-almi-coral-deep"
      >
        Start practising →
      </Link>
    </section>
  );
}

export function LinkChips({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  if (links.length === 0) return null;
  return (
    <section className="mt-10">
      <h2 className="text-sm font-bold uppercase tracking-wider text-almi-text-muted">{title}</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="rounded-full border border-almi-bg-peach bg-almi-paper px-3 py-1 text-xs font-medium text-almi-text hover:border-almi-coral"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

export function CountryGrid({
  title,
  intro,
  hrefFor,
}: {
  title: string;
  intro?: string;
  hrefFor: (c: CountryEntry) => string;
}) {
  const sorted = [...COUNTRIES].sort((a, b) => a.name.localeCompare(b.name));
  return (
    <section className="mt-10 border-t border-almi-bg-peach pt-6">
      <h2 className="text-xl font-semibold text-almi-ink">{title}</h2>
      {intro && <p className="mt-1 text-sm text-almi-text">{intro}</p>}
      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5 sm:grid-cols-3">
        {sorted.map((c) => (
          <Link key={c.code} href={hrefFor(c)} className="text-sm text-almi-text hover:text-almi-coral hover:underline">
            {c.name}
          </Link>
        ))}
      </div>
    </section>
  );
}

export function CrossLinkFooter({ country }: { country?: CountryEntry }) {
  const fromBit = country ? ` from ${country.name}` : "";
  return (
    <section className="mt-12 rounded-2xl border border-almi-bg-peach bg-almi-paper p-6">
      <h2 className="text-base font-semibold text-almi-ink">Your move to Germany{fromBit}, step by step</h2>
      <p className="mt-2 text-sm text-almi-text">
        German is one step. The rest of AlmiWorld helps with everything around it — all original, honest tools:
      </p>
      <ul className="mt-3 space-y-2 text-sm text-almi-text">
        <li>• <a href={FAMILY.study} target="_blank" rel="noopener noreferrer" className="font-semibold text-almi-coral hover:underline">AlmiStudy</a> — compare German universities and entry requirements.</li>
        <li>• <a href={FAMILY.job} target="_blank" rel="noopener noreferrer" className="font-semibold text-almi-coral hover:underline">AlmiJob</a> — find roles and see what German employers ask for.</li>
        <li>• <a href={FAMILY.cv} target="_blank" rel="noopener noreferrer" className="font-semibold text-almi-coral hover:underline">AlmiCV</a> — build a German-format Lebenslauf.</li>
        <li>• <a href={FAMILY.prep} target="_blank" rel="noopener noreferrer" className="font-semibold text-almi-coral hover:underline">AlmiPrep</a> / <a href={FAMILY.toefl} target="_blank" rel="noopener noreferrer" className="font-semibold text-almi-coral hover:underline">AlmiTOEFL</a> — for English-taught programmes (IELTS / TOEFL).</li>
      </ul>
      <p className="mt-4 text-xs text-almi-text-muted">
        AlmiWorld gives 25% of its proceeds to the{" "}
        <a href={FAMILY.shamool} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">
          Shamool Foundation
        </a>
        . When AlmiGoethe helps you, it helps families in need too.
      </p>
    </section>
  );
}

export function Disclaimer() {
  return (
    <p className="mt-10 rounded-xl border border-almi-bg-peach bg-almi-paper px-4 py-3 text-xs text-almi-text-muted">
      AlmiGoethe is original practice material and is not affiliated with or endorsed by the
      Goethe-Institut. We never copy or reproduce Goethe-Institut test material. German-level
      requirements are established guidance that can change — always confirm the exact requirement with
      the university, the recognition authority, or the relevant German authority. Practice results are
      an estimate, not an official Goethe result.
    </p>
  );
}
