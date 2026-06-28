import type { MetadataRoute } from "next";

const SITE_URL = "https://almigoethe.almiworld.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/practice/", "/account", "/admin", "/api/"] }],
    sitemap: `${SITE_URL}/sitemap-index.xml`,
  };
}
