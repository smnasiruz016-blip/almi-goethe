import { notFound } from "next/navigation";
import { OCCUPATIONS, findOccupationBySlug } from "@/lib/goethe/seo/occupations";
import { occupationHubUrl } from "@/lib/goethe/seo/urls";
import { buildMetadata } from "@/lib/goethe/seo/meta";
import { OccupationHub } from "@/components/goethe-seo/pages-occupation";

export const revalidate = 86400;
export const dynamicParams = true;

// Prebuild the occupation hubs; the × origin matrix is on-demand.
export function generateStaticParams() {
  return OCCUPATIONS.map((o) => ({ occupation: o.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ occupation: string }> }) {
  const { occupation } = await params;
  const o = findOccupationBySlug(occupation);
  if (!o) return {};
  return buildMetadata({
    title: `German for ${o.name} in Germany — required level (${o.germanLevel})`,
    description: `${o.name} (${o.nameDe}) is a recognised German shortage occupation. The German level it typically requires is ${o.germanLevel}: ${o.levelDetail} Free original practice for all four Goethe modules.`,
    path: occupationHubUrl(o),
  });
}

export default async function Page({ params }: { params: Promise<{ occupation: string }> }) {
  const { occupation } = await params;
  const o = findOccupationBySlug(occupation);
  if (!o) notFound();
  return <OccupationHub occupation={o} />;
}
