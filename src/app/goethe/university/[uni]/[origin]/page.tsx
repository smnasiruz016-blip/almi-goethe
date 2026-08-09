import { notFound } from "next/navigation";
import { findUniBySlug } from "@/lib/goethe/seo/universities";
import { findCountryByOriginParam } from "@/lib/goethe/seo/countries";
import { uniOriginUrl } from "@/lib/goethe/seo/urls";
import { buildMetadata } from "@/lib/goethe/seo/meta";
import { UniversityOriginPage } from "@/components/goethe-seo/pages-university";

export const revalidate = false;
// HOLDING 2026-08-09 — ISR page-generation frozen (university x origin, about 96k URLs). Nothing is prerendered and
// nothing renders on demand, so every URL under this route 404s and no ISR write can occur.
// Data and templates are untouched. Reverse by restoring `dynamicParams = true`.
export const dynamicParams = false;

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ uni: string; origin: string }>;
}) {
  const { uni, origin } = await params;
  const u = findUniBySlug(uni);
  const country = findCountryByOriginParam(origin);
  if (!u || !country) return {};
  return buildMetadata({
    title: `Studying at ${u.name} from ${country.name} — German level & admission`,
    description: `Applying to ${u.name}${u.city ? ` in ${u.city}` : ""} from ${country.name}: the German level a German-taught degree needs (typically C1), the admission and visa route, and free original Goethe practice.`,
    path: uniOriginUrl(u, country),
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ uni: string; origin: string }>;
}) {
  const { uni, origin } = await params;
  const u = findUniBySlug(uni);
  const country = findCountryByOriginParam(origin);
  if (!u || !country) notFound();
  return <UniversityOriginPage uni={u} country={country} />;
}
