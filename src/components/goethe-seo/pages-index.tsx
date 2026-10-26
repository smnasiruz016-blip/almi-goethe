// /goethe — the hub of the SEO surface: links to the six level hubs. (The purpose,
// occupation and university pages were removed — cost fix, Oct 2026 — and answer
// 410 Gone, so nothing here links to them.)

import { LEVELS, LEVEL_INFO, PURPOSES } from "@/lib/goethe/seo/levels";
import { levelHubUrl } from "@/lib/goethe/seo/urls";
import {
  SeoShell,
  Breadcrumb,
  Hero,
  PrepCta,
  CrossLinkFooter,
  Disclaimer,
} from "./kit";

export function GoetheIndex() {
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
            to study, work, or settle in Germany. Pick your level to start.
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

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-almi-ink">By goal (the real German level inside)</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {PURPOSES.map((p) => (
            <li key={p.slug} className="rounded-full border border-almi-bg-peach bg-almi-paper px-3 py-1 text-sm text-almi-text">
              {p.name} — {p.typicalLevel}
            </li>
          ))}
        </ul>
      </section>

      <PrepCta />
      <CrossLinkFooter />
      <Disclaimer />
    </SeoShell>
  );
}
