import type { MetadataRoute } from "next";

// Minimal static sitemap for Phase 0 — the public marketing + auth surface. The
// programmatic German/Goethe SEO surface (level × purpose × origin) is a later phase.
const SITE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://almigoethe.almiworld.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ["", "/pricing", "/login", "/signup"].map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.7,
  }));
}
