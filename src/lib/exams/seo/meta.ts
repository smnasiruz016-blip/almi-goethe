// Self-canonical metadata for every /pruefung SEO page. Real-data pages are
// indexable and self-canonical; the `index` flag lets the real-data-or-noindex gate
// mark a thin/unbacked combination noindex without pretending it doesn't exist.

import type { Metadata } from "next";
import { SITE_URL } from "@/lib/goethe/seo/meta";

export { SITE_URL };

const SITE_NAME = "AlmiGoethe";

// The root layout applies a `%s · AlmiGoethe` template to any plain-string title, so
// callers that also spelled out "| AlmiGoethe" rendered it twice
// ("… | AlmiGoethe · AlmiGoethe"). Normalise here — strip a site-name suffix if the
// caller passed one, then apply it exactly once as an absolute title. Callers should
// pass a bare title; this stays as the guarantee that the suffix can never double.
function withSiteName(title: string): string {
  const base = title.replace(/\s*[|·]\s*AlmiGoethe\s*$/, "").trim();
  return `${base} | ${SITE_NAME}`;
}

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
  const fullTitle = withSiteName(title);
  return {
    // `absolute` opts out of the layout's title template — the suffix is already applied.
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    robots: { index, follow: true },
    openGraph: { title: fullTitle, description, url, siteName: SITE_NAME, type: "website" },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };
}
