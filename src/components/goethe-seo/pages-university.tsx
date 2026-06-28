// Layer 1a — real German universities (Wikidata CC0, free to use). University hub
// and university × origin. We never fabricate programmes or per-uni German cut-offs;
// we state the established study-in-Germany German requirement (typically C1 for a
// German-taught degree; English-taught programmes may not need German) and link to
// the university's own site for the exact, current requirement.

import type { CountryEntry } from "@/lib/goethe/seo/countries";
import { GERMAN_UNIS, type GermanUni } from "@/lib/goethe/seo/universities";
import { studyAngle, originProfile } from "@/lib/goethe/seo/recognition";
import { uniHubUrl, uniOriginUrl, GOETHE_INDEX, levelHubUrl } from "@/lib/goethe/seo/urls";
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

function germanRequirementCard(uni: GermanUni, country?: CountryEntry) {
  return (
    <RequirementCard
      heading={`German for studying at ${uni.name}`}
      headline="German-taught degree: typically C1"
      detail={`Most German-taught Bachelor's and Master's programmes require around C1 German, usually proven with the Goethe-Zertifikat C1, TestDaF or DSH. Some Master's and many international programmes are taught in English and may require little or no German — but you will still need German for daily life${uni.city ? ` in ${uni.city}` : ""}.`}
      note={`${uni.name} sets its own admission and language requirements per programme, and these change. Always confirm the exact German level for your specific programme on the university's official website.`}
      links={[
        ...(uni.website ? [{ label: `${uni.name} — official website`, href: uni.website }] : []),
        { label: "Compare programmes on AlmiStudy", href: "https://almistudy.almiworld.com/" },
      ]}
    />
  );
}

export function UniversityHub({ uni }: { uni: GermanUni }) {
  const nearby = GERMAN_UNIS.filter((u) => u.city && u.city === uni.city && u.slug !== uni.slug).slice(0, 10);
  return (
    <SeoShell>
      <Breadcrumb
        trail={[{ label: "Goethe for Germany", href: GOETHE_INDEX }, { label: uni.name }]}
      />
      <Hero
        eyebrow={uni.city ? `Study in ${uni.city}, Germany` : "Study in Germany"}
        title={`German requirements for ${uni.name}`}
        intro={
          <>
            Planning to study at {uni.name}{uni.city ? ` in ${uni.city}` : ""}? Here is the German level a
            German-taught degree typically needs, where to confirm your programme's exact requirement, and
            free practice toward it.
          </>
        }
      />
      {germanRequirementCard(uni)}
      <PrepCta levelHint="C1" />
      <LinkChips
        title="Goethe levels"
        links={(["A1", "A2", "B1", "B2", "C1", "C2"] as const).map((l) => ({
          label: `Goethe ${l}`,
          href: levelHubUrl(l),
        }))}
      />
      {nearby.length > 0 && (
        <LinkChips
          title={`Other universities in ${uni.city}`}
          links={nearby.map((u) => ({ label: u.name, href: uniHubUrl(u) }))}
        />
      )}
      <CountryGrid
        title={`${uni.name} — by country you're coming from`}
        intro="Pick your country for the admission and visa angle."
        hrefFor={(c) => uniOriginUrl(uni, c)}
      />
      <CrossLinkFooter />
      <Disclaimer />
    </SeoShell>
  );
}

export function UniversityOriginPage({ uni, country }: { uni: GermanUni; country: CountryEntry }) {
  const p = originProfile(country);
  return (
    <SeoShell>
      <Breadcrumb
        trail={[
          { label: "Goethe for Germany", href: GOETHE_INDEX },
          { label: uni.name, href: uniHubUrl(uni) },
          { label: country.name },
        ]}
      />
      <Hero
        eyebrow={`${uni.name} · from ${country.name}`}
        title={`Studying at ${uni.name} from ${country.name}`}
        intro={
          <>
            Applying to {uni.name}{uni.city ? ` in ${uni.city}` : ""} from {country.name}? Here is the German
            level a German-taught degree typically needs, the admission and visa route for your country, and
            free practice toward it.
          </>
        }
      />
      {germanRequirementCard(uni, country)}
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-almi-ink">Applying from {country.name}</h2>
        <p className="mt-2 text-sm text-almi-text">{studyAngle(country)}</p>
        {p.apsRequired && (
          <p className="mt-2 text-sm text-almi-text">
            Because you are applying from {country.name}, factor the APS certificate into your timeline before
            you submit your application to {uni.name}.
          </p>
        )}
      </section>
      <PrepCta levelHint="C1" />
      <LinkChips
        title="Goethe levels"
        links={(["A1", "A2", "B1", "B2", "C1", "C2"] as const).map((l) => ({
          label: `Goethe ${l}`,
          href: levelHubUrl(l),
        }))}
      />
      <CrossLinkFooter country={country} />
      <Disclaimer />
    </SeoShell>
  );
}
