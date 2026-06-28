// Self-canonical metadata for every /goethe SEO page. Every Wave-1 page is backed
// by real data (real level rule, real shortage occupation, real Wikidata university),
// so every page is indexable and self-canonical — there are no thin duplicate URLs
// to canonicalise away. Invalid params 404 at the route instead.

import type { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://almigoethe.almiworld.com";

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: { title, description, url, siteName: "AlmiGoethe", type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}
