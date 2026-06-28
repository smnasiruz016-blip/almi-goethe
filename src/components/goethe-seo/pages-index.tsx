// /goethe — the hub of the whole SEO surface. Links into all three Wave-1 layers
// (levels, purposes, shortage occupations, German universities) so crawlers reach
// every branch from one indexable page.

import { LEVELS, LEVEL_INFO, PURPOSES } from "@/lib/goethe/seo/levels";
import { OCCUPATIONS } from "@/lib/goethe/seo/occupations";
import { GERMAN_UNIS } from "@/lib/goethe/seo/universities";
import {
  levelHubUrl,
  occupationHubUrl,
  uniHubUrl,
  levelPurposeOriginUrl,
} from "@/lib/goethe/seo/urls";
import type { CountryEntry } from "@/lib/goethe/seo/countries";
import {
  SeoShell,
  Breadcrumb,
  Hero,
  LinkChips,
  PrepCta,
  CrossLinkFooter,
  Disclaimer,
} from "./kit";

const REF: CountryEntry = { code: "PK", name: "Pakistan" };

export function GoetheIndex() {
  const fields = Array.from(new Set(OCCUPATIONS.map((o) => o.field)));
  const cities = Array.from(new Set(GERMAN_UNIS.map((u) => u.city).filter(Boolean))) as string[];
  return (
    <SeoShell>
      <Breadcrumb trail={[{ label: "Goethe for Germany" }]} />
      <Hero
        eyebrow="German for Germany"
        title="Goethe-Zertifikat practice & German requirements for Germany"
        intro={
          <>
            Free, original practice for every Goethe-Zertifikat level (A1–C2) across all four modules —
            Lesen, Hören, Schreiben and Sprechen — plus honest guidance on the German level you actually need
            to study, work, or settle in Germany. Pick your level, your goal, your profession, or your
            target university.
          </>
        }
      />

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-almi-ink">By Goethe level</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {LEVELS.map((l) => (
            <a
              key={l}
              href={levelHubUrl(l)}
              className="rounded-2xl border border-almi-bg-peach bg-almi-paper p-4 hover:border-almi-coral"
            >
              <p className="font-semibold text-almi-ink">{LEVEL_INFO[l].label}</p>
              <p className="mt-1 text-sm text-almi-text">{LEVEL_INFO[l].blurb}</p>
            </a>
          ))}
        </div>
      </section>

      <LinkChips
        title="By goal (the real German level inside)"
        links={PURPOSES.map((p) => ({
          label: `${p.name} — ${p.typicalLevel}`,
          href: levelPurposeOriginUrl(p.typicalLevel === "A1" ? "A1" : "B1", p, REF),
        }))}
      />

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-almi-ink">By profession (German shortage occupations)</h2>
        <p className="mt-1 text-sm text-almi-text">
          Occupations Germany recruits for from abroad, each with its real required German level.
        </p>
        {fields.map((f) => (
          <LinkChips
            key={f}
            title={f}
            links={OCCUPATIONS.filter((o) => o.field === f).map((o) => ({
              label: o.name,
              href: occupationHubUrl(o),
            }))}
          />
        ))}
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-almi-ink">By university</h2>
        <p className="mt-1 text-sm text-almi-text">
          German level guidance for {GERMAN_UNIS.length} German universities across {cities.length} cities.
        </p>
        <LinkChips
          title="Some German universities"
          links={GERMAN_UNIS.slice(0, 40).map((u) => ({ label: u.name, href: uniHubUrl(u) }))}
        />
      </section>

      <PrepCta />
      <CrossLinkFooter />
      <Disclaimer />
    </SeoShell>
  );
}
