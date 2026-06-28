import { notFound } from "next/navigation";
import { findUniBySlug } from "@/lib/goethe/seo/universities";
import { uniHubUrl } from "@/lib/goethe/seo/urls";
import { buildMetadata } from "@/lib/goethe/seo/meta";
import { UniversityHub } from "@/components/goethe-seo/pages-university";

export const revalidate = 86400;
export const dynamicParams = true;

// 498 hubs prebuilt at deploy; the × origin matrix (≈96k) is on-demand ISR.
export function generateStaticParams() {
  // Keep the build fast: hubs are generated on first request too.
  return [];
}

export async function generateMetadata({ params }: { params: Promise<{ uni: string }> }) {
  const { uni } = await params;
  const u = findUniBySlug(uni);
  if (!u) return {};
  return buildMetadata({
    title: `German requirements for ${u.name}${u.city ? ` (${u.city})` : ""}`,
    description: `The German level needed to study at ${u.name}${u.city ? ` in ${u.city}` : ""}: German-taught degrees typically need around C1, while many English-taught programmes need less. Confirm per programme on the university site. Free original Goethe practice.`,
    path: uniHubUrl(u),
  });
}

export default async function Page({ params }: { params: Promise<{ uni: string }> }) {
  const { uni } = await params;
  const u = findUniBySlug(uni);
  if (!u) notFound();
  return <UniversityHub uni={u} />;
}
