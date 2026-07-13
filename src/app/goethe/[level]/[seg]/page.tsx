import { notFound } from "next/navigation";
import type { GoetheLevel } from "@prisma/client";
import { LEVELS } from "@/lib/goethe/seo/levels";
import { findCountryByOriginParam } from "@/lib/goethe/seo/countries";
import { levelOriginUrl } from "@/lib/goethe/seo/urls";
import { buildMetadata } from "@/lib/goethe/seo/meta";
import { LevelOriginPage } from "@/components/goethe-seo/pages-level";

export const revalidate = false;
export const dynamicParams = true;

// Pure on-demand ISR — the level×origin matrix (6 × 193) is built on first request.
export function generateStaticParams() {
  return [];
}

function resolveLevel(levelParam: string): GoetheLevel | null {
  const up = levelParam.toUpperCase() as GoetheLevel;
  return LEVELS.includes(up) ? up : null;
}

export async function generateMetadata({ params }: { params: Promise<{ level: string; seg: string }> }) {
  const { level, seg } = await params;
  const lvl = resolveLevel(level);
  const country = findCountryByOriginParam(seg);
  if (!lvl || !country) return {};
  return buildMetadata({
    title: `Goethe-Zertifikat ${lvl} from ${country.name} — study & work in Germany`,
    description: `How Goethe ${lvl} fits a move to Germany from ${country.name}: the study and skilled-work routes, recognition and visa basics, and free original practice for all four Goethe modules.`,
    path: levelOriginUrl(lvl, country),
  });
}

export default async function Page({ params }: { params: Promise<{ level: string; seg: string }> }) {
  const { level, seg } = await params;
  const lvl = resolveLevel(level);
  const country = findCountryByOriginParam(seg);
  // seg must be a real "from-<country>"; "for-<purpose>" lives one level deeper.
  if (!lvl || !country) notFound();
  return <LevelOriginPage level={lvl} country={country} />;
}
