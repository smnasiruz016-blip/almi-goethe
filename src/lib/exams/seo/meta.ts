// Self-canonical metadata for every /pruefung SEO page. Real-data pages are
// indexable and self-canonical; the `index` flag lets the real-data-or-noindex gate
// mark a thin/unbacked combination noindex without pretending it doesn't exist.

import type { Metadata } from "next";
import { SITE_URL } from "@/lib/goethe/seo/meta";

export { SITE_URL };

export function buildExamMetadata({
  title,
  description,
  path,
  index = true,
}: {
  title: string;
  description: string;
  path: string;
  index?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index, follow: true },
    openGraph: { title, description, url, siteName: "AlmiGoethe", type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}
