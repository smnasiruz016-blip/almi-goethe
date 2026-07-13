import { notFound } from "next/navigation";
import type { GoetheLevel } from "@prisma/client";
import { LEVELS } from "@/lib/goethe/seo/levels";
import { findPurposeBySlug } from "@/lib/goethe/seo/levels";
import { findCountryByOriginParam } from "@/lib/goethe/seo/countries";
import { levelPurposeOriginUrl } from "@/lib/goethe/seo/urls";
import { buildMetadata } from "@/lib/goethe/seo/meta";
import { LevelPurposeOriginPage } from "@/components/goethe-seo/pages-level";

export const revalidate = false;
export const dynamicParams = true;

export function generateStaticParams() {
  return [];
}

function resolveLevel(levelParam: string): GoetheLevel | null {
  const up = levelParam.toUpperCase() as GoetheLevel;
  return LEVELS.includes(up) ? up : null;
}

// seg is "for-<purpose>", origin is "from-<country>".
function resolvePurpose(seg: string) {
  if (!seg.startsWith("for-")) return null;
  return findPurposeBySlug(seg.slice("for-".length));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ level: string; seg: string; origin: string }>;
}) {
  const { level, seg, origin } = await params;
  const lvl = resolveLevel(level);
  const purpose = resolvePurpose(seg);
  const country = findCountryByOriginParam(origin);
  if (!lvl || !purpose || !country) return {};
  return buildMetadata({
    title: `Goethe ${lvl} for ${purpose.name} from ${country.name} — German requirement`,
    description: `The real German level ${purpose.name.toLowerCase()} in Germany requires, how a Goethe ${lvl} target relates, the route from ${country.name}, and free original practice. Always confirm with ${purpose.authority}.`,
    path: levelPurposeOriginUrl(lvl, purpose, country),
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ level: string; seg: string; origin: string }>;
}) {
  const { level, seg, origin } = await params;
  const lvl = resolveLevel(level);
  const purpose = resolvePurpose(seg);
  const country = findCountryByOriginParam(origin);
  if (!lvl || !purpose || !country) notFound();
  return <LevelPurposeOriginPage level={lvl} purpose={purpose} country={country} />;
}
