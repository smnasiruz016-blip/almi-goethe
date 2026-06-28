import { notFound } from "next/navigation";
import type { GoetheLevel } from "@prisma/client";
import { LEVELS, LEVEL_INFO } from "@/lib/goethe/seo/levels";
import { levelHubUrl } from "@/lib/goethe/seo/urls";
import { buildMetadata } from "@/lib/goethe/seo/meta";
import { LevelHub } from "@/components/goethe-seo/pages-level";

export const revalidate = 86400;
export const dynamicParams = true;

// Prebuild the six level hubs; everything below them is on-demand ISR.
export function generateStaticParams() {
  return LEVELS.map((l) => ({ level: l.toLowerCase() }));
}

function resolve(levelParam: string): GoetheLevel | null {
  const up = levelParam.toUpperCase() as GoetheLevel;
  return LEVELS.includes(up) ? up : null;
}

export async function generateMetadata({ params }: { params: Promise<{ level: string }> }) {
  const { level } = await params;
  const lvl = resolve(level);
  if (!lvl) return {};
  return buildMetadata({
    title: `Goethe-Zertifikat ${lvl} — purpose, requirements & free practice`,
    description: `What Goethe-Zertifikat ${lvl} is for, the German levels real goals (study, work, visa, citizenship) require, and free original practice for all four modules. ${LEVEL_INFO[lvl].blurb}`,
    path: levelHubUrl(lvl),
  });
}

export default async function Page({ params }: { params: Promise<{ level: string }> }) {
  const { level } = await params;
  const lvl = resolve(level);
  if (!lvl) notFound();
  return <LevelHub level={lvl} />;
}
