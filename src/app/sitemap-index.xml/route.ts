import { SITE_URL } from "@/lib/goethe/seo/meta";
import { sitemapChunkCount } from "@/lib/goethe/seo/sitemap-urls";

// Next 16 with generateSitemaps emits chunk files at /sitemap/<id>.xml. This index
// lists every chunk so one URL can be submitted to Google Search Console.
export const revalidate = false;

export function GET() {
  const count = sitemapChunkCount();
  const now = new Date().toISOString();
  const entries = Array.from({ length: count }, (_, i) =>
    `  <sitemap><loc>${SITE_URL}/sitemap/${i}.xml</loc><lastmod>${now}</lastmod></sitemap>`,
  ).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</sitemapindex>`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=86400" },
  });
}
