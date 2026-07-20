import type { MetadataRoute } from "next";

const SITE_URL = "https://almigoethe.almiworld.com";

// Private / app-only paths — blocked for ALL bots (unchanged from the original rule).
const PRIVATE = ["/practice/", "/account", "/admin", "/api/"];

// Deep per-origin long-tail leaves (the ×occupation / ×university / ×level·seg / ×exam·seg
// fan-out crossed with [origin]). Goethe has NO literal "from/" marker like the siblings —
// the [origin] leaf is simply the 3rd path segment under /goethe and /pruefung, while every
// hub (landing, /goethe, /goethe/<level>, /goethe/<level>/<seg>, /goethe/occupation/<occ>,
// /goethe/university/<uni>, /pruefung/<exam>, /pruefung/<exam>/<seg>) is 1–2 segments deep.
// So "/goethe/*/*/" and "/pruefung/*/*/" trim ONLY the 3-deep [origin] leaves for generic
// bots; 1–2-deep hubs stay crawlable (a trailing segment is required to match).
const DEEP_LEAVES = ["/goethe/*/*/", "/pruefung/*/*/"];

// Heavy crawlers that burn Vercel invocations + edge requests with ~no SEO upside.
// robots.txt is advisory — these DO obey it; truly abusive scrapers need BotID/WAF.
// Google-Extended = Gemini/Vertex TRAINING token, NOT search — blocking it does not
// affect ranking. Trim this list if you want AI-search (ChatGPT/Perplexity) citations.
const HEAVY_BOTS = [
  "GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "anthropic-ai",
  "CCBot", "Bytespider", "Amazonbot", "PerplexityBot", "Google-Extended",
  "AhrefsBot", "SemrushBot", "MJ12bot", "DotBot", "DataForSeoBot", "PetalBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Real search engines: full access to the long-tail leaves — that IS the pSEO product.
      { userAgent: ["Googlebot", "Bingbot"], allow: "/", disallow: PRIVATE },
      // Everyone else: landing + hubs only, skip the per-origin leaves, gentle pace.
      { userAgent: "*", allow: "/", disallow: [...PRIVATE, ...DEEP_LEAVES], crawlDelay: 10 },
      // Heavy, no-SEO-value crawlers: off entirely.
      { userAgent: HEAVY_BOTS, disallow: "/" },
    ],
    // Next 16's generateSitemaps has no auto-index at /sitemap.xml — point crawlers
    // at our explicit sitemap index, which lists all sharded sitemaps.
    sitemap: `${SITE_URL}/sitemap-index.xml`,
  };
}
