// Layer 3 — level as the topic: the level hub /goethe/<level>.
// (The level × origin and level × purpose × origin pages were removed — cost fix,
// Oct 2026 — and answer 410 Gone, so nothing here links to them.)

import type { GoetheLevel } from "@prisma/client";
import { LEVEL_INFO, LEVELS, PURPOSES } from "@/lib/goethe/seo/levels";
import { levelHubUrl, GOETHE_INDEX } from "@/lib/goethe/seo/urls";
import {
  SeoShell,
  Breadcrumb,
  Hero,
  PrepCta,
  LinkChips,
  CrossLinkFooter,
  Disclaimer,
} from "./kit";

export function LevelHub({ level }: { level: GoetheLevel }) {
  const info = LEVEL_INFO[level];
  return (
    <SeoShell>
      <Breadcrumb trail={[{ label: "Goethe for Germany", href: GOETHE_INDEX }, { label: `Goethe ${level}` }]} />
      <Hero
        eyebrow="Goethe-Zertifikat level"
        title={`Goethe-Zertifikat ${level} — what it's for and how to reach it`}
        intro={info.blurb}
      />
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-almi-ink">What {level} typically opens up</h2>
        <p className="mt-2 text-sm text-almi-text">
          Different goals require different German levels. {level} sits where it does on the CEFR scale
          (A1–C2); here is how the main purposes map to a required level — each carries its own real
          requirement, which you should confirm with the relevant authority.
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {PURPOSES.map((p) => (
            <li key={p.slug} className="rounded-full border border-almi-bg-peach bg-almi-paper px-3 py-1 text-sm text-almi-text">
              {p.name} — {p.typicalLevel}
            </li>
          ))}
        </ul>
      </section>
      <PrepCta levelHint={`Goethe ${level}`} />
      <LinkChips
        title="Other levels"
        links={LEVELS.filter((l) => l !== level).map((l) => ({ label: `Goethe ${l}`, href: levelHubUrl(l) }))}
      />
      <CrossLinkFooter />
      <Disclaimer />
    </SeoShell>
  );
}
