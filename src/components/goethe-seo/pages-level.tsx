// Layer 3 — level as the topic. Level hub, level × origin, level × purpose × origin.

import type { GoetheLevel } from "@prisma/client";
import type { CountryEntry } from "@/lib/goethe/seo/countries";
import { LEVEL_INFO, LEVELS, PURPOSES, type Purpose } from "@/lib/goethe/seo/levels";
import { studyAngle, workAngle } from "@/lib/goethe/seo/recognition";
import { HomeRecognitionBlock } from "./HomeRecognitionBlock";
import {
  levelHubUrl,
  levelOriginUrl,
  levelPurposeOriginUrl,
  GOETHE_INDEX,
} from "@/lib/goethe/seo/urls";
import {
  SeoShell,
  Breadcrumb,
  Hero,
  RequirementCard,
  PrepCta,
  LinkChips,
  CountryGrid,
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
      </section>
      <LinkChips
        title="By purpose (real required level inside)"
        links={PURPOSES.map((p) => ({ label: `${p.name} — ${p.typicalLevel}`, href: levelPurposeOriginUrl(level, p, { code: "PK", name: "Pakistan" } as CountryEntry) }))}
      />
      <PrepCta levelHint={`Goethe ${level}`} />
      <LinkChips
        title="Other levels"
        links={LEVELS.filter((l) => l !== level).map((l) => ({ label: `Goethe ${l}`, href: levelHubUrl(l) }))}
      />
      <CountryGrid
        title={`Goethe ${level} — by country you're coming from`}
        intro="Pick your country for the local study/work-in-Germany angle."
        hrefFor={(c) => levelOriginUrl(level, c)}
      />
      <CrossLinkFooter />
      <Disclaimer />
    </SeoShell>
  );
}

export function LevelOriginPage({ level, country }: { level: GoetheLevel; country: CountryEntry }) {
  const info = LEVEL_INFO[level];
  return (
    <SeoShell>
      <Breadcrumb
        trail={[
          { label: "Goethe for Germany", href: GOETHE_INDEX },
          { label: `Goethe ${level}`, href: levelHubUrl(level) },
          { label: country.name },
        ]}
      />
      <Hero
        eyebrow={`Goethe ${level} · from ${country.name}`}
        title={`Goethe-Zertifikat ${level} from ${country.name}`}
        intro={<>{info.blurb} Here is how {level} fits a move to Germany from {country.name}, and free practice toward it.</>}
      />
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-almi-ink">Studying in Germany from {country.name}</h2>
        <p className="mt-2 text-sm text-almi-text">{studyAngle(country)}</p>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-almi-ink">Working in Germany from {country.name}</h2>
        <p className="mt-2 text-sm text-almi-text">{workAngle(country)}</p>
      </section>
      <LinkChips
        title={`Goethe ${level} by purpose — from ${country.name}`}
        links={PURPOSES.map((p) => ({ label: p.name, href: levelPurposeOriginUrl(level, p, country) }))}
      />
      <PrepCta levelHint={`Goethe ${level}`} />
      <LinkChips
        title={`Other levels — from ${country.name}`}
        links={LEVELS.filter((l) => l !== level).map((l) => ({ label: `Goethe ${l}`, href: levelOriginUrl(l, country) }))}
      />
      <CrossLinkFooter country={country} />
      <Disclaimer />
    </SeoShell>
  );
}

export function LevelPurposeOriginPage({
  level,
  purpose,
  country,
}: {
  level: GoetheLevel;
  purpose: Purpose;
  country: CountryEntry;
}) {
  const isStudy = purpose.slug === "university";
  return (
    <SeoShell>
      <Breadcrumb
        trail={[
          { label: "Goethe for Germany", href: GOETHE_INDEX },
          { label: `Goethe ${level}`, href: levelHubUrl(level) },
          { label: country.name, href: levelOriginUrl(level, country) },
          { label: purpose.name },
        ]}
      />
      <Hero
        eyebrow={`${purpose.name} · from ${country.name}`}
        title={`Goethe ${level} for ${purpose.name} — from ${country.name}`}
        intro={
          <>
            Aiming for Goethe {level} and planning {purpose.name.toLowerCase()} in Germany from{" "}
            {country.name}? Here is the real German level this route requires, how your {level} target
            relates, and free practice.
          </>
        }
      />
      <RequirementCard
        heading={`${purpose.name} — German requirement`}
        headline={`Typically ${purpose.typicalLevel}`}
        detail={purpose.detail}
        note={`Requirements can change and depend on your exact case. Confirm the German level you need for ${purpose.name.toLowerCase()} with ${purpose.authority}.`}
        links={[{ label: purpose.authority, href: purpose.authorityUrl }]}
      />
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-almi-ink">How your Goethe {level} target relates</h2>
        <p className="mt-2 text-sm text-almi-text">
          This route generally expects around {purpose.typicalLevel}. If you are working toward {level},
          you can see how far that is from the requirement and plan your practice accordingly — the
          Goethe-Zertifikat is taken per level, and each level builds on the last.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-almi-ink">From {country.name}</h2>
        <p className="mt-2 text-sm text-almi-text">{isStudy ? studyAngle(country) : workAngle(country)}</p>
      </section>
      <HomeRecognitionBlock country={country} />
      <PrepCta levelHint={`Goethe ${level}`} />
      <LinkChips
        title={`Other purposes — Goethe ${level} from ${country.name}`}
        links={PURPOSES.filter((p) => p.slug !== purpose.slug).map((p) => ({
          label: p.name,
          href: levelPurposeOriginUrl(level, p, country),
        }))}
      />
      <CrossLinkFooter country={country} />
      <Disclaimer />
    </SeoShell>
  );
}
