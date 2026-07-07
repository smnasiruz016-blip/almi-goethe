import type { MetadataRoute } from "next";
import { buildAllSitemapUrls, SITEMAP_CHUNK, sitemapChunkCount } from "@/lib/goethe/seo/sitemap-urls";

// Chunked sitemap for the full SEO surface (Goethe Wave-1 + the four new TestDaF/telc
// engines). Next 16 calls the generateSitemaps id as a Promise — coerce with
// Number(await Promise.resolve(id)).
export async function generateSitemaps() {
  return Array.from({ length: sitemapChunkCount() }, (_, i) => ({ id: i }));
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
  const chunk = Number(await Promise.resolve(id));
  const all = buildAllSitemapUrls();
  return all.slice(chunk * SITEMAP_CHUNK, (chunk + 1) * SITEMAP_CHUNK);
}
