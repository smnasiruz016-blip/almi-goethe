// Layer 2 — official German shortage occupations (Engpassberufe). Occupation hub
// and occupation × origin. The German-level requirement is the real, occupation-
// specific one (e.g. nursing B1–B2, doctor C1 + Fachsprachprüfung), not invented.

import type { CountryEntry } from "@/lib/goethe/seo/countries";
import {
  OCCUPATIONS,
  type Occupation,
  ENGPASS_SOURCE_URL,
  MAKE_IT_IN_GERMANY_URL,
  RECOGNITION_PORTAL_URL,
} from "@/lib/goethe/seo/occupations";
import { workAngle } from "@/lib/goethe/seo/recognition";
import { occupationHubUrl, occupationOriginUrl, GOETHE_INDEX } from "@/lib/goethe/seo/urls";
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

function levelCard(o: Occupation, country?: CountryEntry) {
  const regTail = o.regulated
    ? " This is a regulated profession in Germany, so you also need formal recognition of your qualification before you can work."
    : " Recognition requirements depend on the employer and the federal state.";
  return (
    <RequirementCard
      heading={`German level for ${o.name}`}
      headline={o.germanLevel}
      detail={`${o.levelDetail}${regTail}`}
      note={
        country
          ? `This is the established guidance and can change. Confirm the exact German level and recognition path for ${o.name.toLowerCase()} from ${country.name} with the competent authority and your employer.`
          : `This is the established guidance and can change. Confirm the exact German level and recognition path with the competent authority and your employer.`
      }
      links={[
        { label: "Make it in Germany — official portal", href: MAKE_IT_IN_GERMANY_URL },
        { label: "Recognition in Germany", href: RECOGNITION_PORTAL_URL },
      ]}
    />
  );
}

export function OccupationHub({ occupation }: { occupation: Occupation }) {
  const others = OCCUPATIONS.filter((o) => o.field === occupation.field && o.slug !== occupation.slug).slice(0, 12);
  return (
    <SeoShell>
      <Breadcrumb
        trail={[{ label: "Goethe for Germany", href: GOETHE_INDEX }, { label: occupation.name }]}
      />
      <Hero
        eyebrow={`Shortage occupation · ${occupation.field}`}
        title={`German for ${occupation.name} in Germany (${occupation.nameDe})`}
        intro={
          <>
            {occupation.name} is among the occupations Germany actively recruits for from abroad. Here is the
            German level the role typically expects, the recognition path, and free practice toward it.
          </>
        }
      />
      {levelCard(occupation)}
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-almi-ink">Why German matters for this role</h2>
        <p className="mt-2 text-sm text-almi-text">
          Whatever your technical skill, day-to-day work in Germany — with patients, colleagues, authorities
          and paperwork — happens in German. Meeting the level this role expects is usually a condition of
          recognition and of the visa. The list of shortage occupations is published by the German
          government.
        </p>
      </section>
      <PrepCta levelHint={occupation.germanLevel.split("–")[0].trim()} />
      <LinkChips
        title={`Other ${occupation.field.toLowerCase()} occupations`}
        links={others.map((o) => ({ label: o.name, href: occupationHubUrl(o) }))}
      />
      <CountryGrid
        title={`${occupation.name} — by country you're coming from`}
        intro="Pick your country for the recognition and visa angle."
        hrefFor={(c) => occupationOriginUrl(occupation, c)}
      />
      <p className="mt-6 text-xs text-almi-text-muted">
        Shortage-occupation list:{" "}
        <a href={ENGPASS_SOURCE_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
          Bundesagentur für Arbeit ↗
        </a>
      </p>
      <CrossLinkFooter />
      <Disclaimer />
    </SeoShell>
  );
}

export function OccupationOriginPage({
  occupation,
  country,
}: {
  occupation: Occupation;
  country: CountryEntry;
}) {
  return (
    <SeoShell>
      <Breadcrumb
        trail={[
          { label: "Goethe for Germany", href: GOETHE_INDEX },
          { label: occupation.name, href: occupationHubUrl(occupation) },
          { label: country.name },
        ]}
      />
      <Hero
        eyebrow={`${occupation.name} · from ${country.name}`}
        title={`German for ${occupation.name} in Germany — from ${country.name}`}
        intro={
          <>
            Planning to work as {occupation.name.toLowerCase()} in Germany from {country.name}? Here is the
            German level this role expects, the recognition and visa route for your country, and free
            practice toward it.
          </>
        }
      />
      {levelCard(occupation, country)}
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-almi-ink">Your route from {country.name}</h2>
        <p className="mt-2 text-sm text-almi-text">{workAngle(country)}</p>
      </section>
      <PrepCta levelHint={occupation.germanLevel.split("–")[0].trim()} />
      <CrossLinkFooter country={country} />
      <Disclaimer />
    </SeoShell>
  );
}
