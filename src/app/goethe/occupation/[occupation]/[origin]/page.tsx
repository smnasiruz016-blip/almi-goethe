import { notFound } from "next/navigation";
import { findOccupationBySlug } from "@/lib/goethe/seo/occupations";
import { findCountryByOriginParam } from "@/lib/goethe/seo/countries";
import { occupationOriginUrl } from "@/lib/goethe/seo/urls";
import { buildMetadata } from "@/lib/goethe/seo/meta";
import { OccupationOriginPage } from "@/components/goethe-seo/pages-occupation";

export const revalidate = false;
export const dynamicParams = true;

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ occupation: string; origin: string }>;
}) {
  const { occupation, origin } = await params;
  const o = findOccupationBySlug(occupation);
  const country = findCountryByOriginParam(origin);
  if (!o || !country) return {};
  return buildMetadata({
    title: `German for ${o.name} in Germany from ${country.name} — level & recognition`,
    description: `Working as ${o.name.toLowerCase()} in Germany from ${country.name}: the German level the role expects (${o.germanLevel}), the recognition and visa route, and free original Goethe practice.`,
    path: occupationOriginUrl(o, country),
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ occupation: string; origin: string }>;
}) {
  const { occupation, origin } = await params;
  const o = findOccupationBySlug(occupation);
  const country = findCountryByOriginParam(origin);
  if (!o || !country) notFound();
  return <OccupationOriginPage occupation={o} country={country} />;
}
