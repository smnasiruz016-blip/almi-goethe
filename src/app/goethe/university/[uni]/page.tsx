import { notFound } from "next/navigation";
import { findUniBySlug, UNI_SLUGS } from "@/lib/goethe/seo/universities";
import { uniHubUrl } from "@/lib/goethe/seo/urls";
import { buildMetadata } from "@/lib/goethe/seo/meta";
import { UniversityHub } from "@/components/goethe-seo/pages-university";

export const revalidate = false;
// HOLDING 2026-08-09 — keep-set (498 university hubs). Bounded tier, so it is prerendered at build
// and served as static HTML: no on-demand rendering, therefore no ISR writes. Anything
// outside the set 404s. Reverse by restoring `dynamicParams = true` + `return []`.
export const dynamicParams = false;

// 498 hubs prebuilt at deploy; the × origin matrix (≈96k) is on-demand ISR.
export function generateStaticParams() {
  // Under holding these 498 hubs ARE the build — they can no longer be generated on first
  // request, so they must be prerendered here or they would 404.
  return UNI_SLUGS.map((uni) => ({ uni }));
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
