// Home-country degree-recognition block (AlmiWorld pSEO Localization Standard).
// Complements the inbound studyAngle/workAngle with the origin's own reference
// points — verified per-origin facts, or an honest-generic hedged line. Never a
// fabricated body, never a name-swap.
import { homeRecognition } from "@/lib/goethe/seo/recognition";
import type { CountryEntry } from "@/lib/goethe/seo/countries";

export function HomeRecognitionBlock({ country }: { country: CountryEntry }) {
  const r = homeRecognition(country);
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold text-almi-ink">Using a German qualification back in {country.name}</h2>
      <p className="mt-2 text-sm text-almi-text">{r.paragraph}</p>
      {r.searchTerms.length > 0 && (
        <p className="mt-2 text-xs text-almi-text-muted">
          People from {country.name} commonly search for: {r.searchTerms.join(" · ")}.
        </p>
      )}
    </section>
  );
}
