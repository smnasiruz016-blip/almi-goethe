// One place that builds every internal SEO URL under /goethe, so links and the
// sitemap can never drift. Only the level hubs remain: the level x origin, purpose,
// occupation and university URLs were removed (cost fix, Oct 2026) and answer 410 Gone.

import type { GoetheLevel } from "@prisma/client";

export const GOETHE_INDEX = "/goethe";

const lvl = (level: GoetheLevel) => level.toLowerCase();

export const levelHubUrl = (level: GoetheLevel) => `/goethe/${lvl(level)}`;
