// One place that builds every internal SEO URL under /goethe, so links and the
// sitemap can never drift. Origin segments are "from-<country>"; purpose segments
// "for-<purpose>".

import { originParam, type CountryEntry } from "./countries";
import type { GoetheLevel } from "@prisma/client";
import type { Purpose } from "./levels";
import type { Occupation } from "./occupations";
import type { GermanUni } from "./universities";

export const GOETHE_INDEX = "/goethe";

const lvl = (level: GoetheLevel) => level.toLowerCase();

export const levelHubUrl = (level: GoetheLevel) => `/goethe/${lvl(level)}`;
export const levelOriginUrl = (level: GoetheLevel, c: CountryEntry) => `/goethe/${lvl(level)}/${originParam(c)}`;
export const levelPurposeOriginUrl = (level: GoetheLevel, p: Purpose, c: CountryEntry) =>
  `/goethe/${lvl(level)}/for-${p.slug}/${originParam(c)}`;

export const occupationHubUrl = (o: Occupation) => `/goethe/occupation/${o.slug}`;
export const occupationOriginUrl = (o: Occupation, c: CountryEntry) => `/goethe/occupation/${o.slug}/${originParam(c)}`;

export const uniHubUrl = (u: GermanUni) => `/goethe/university/${u.slug}`;
export const uniOriginUrl = (u: GermanUni, c: CountryEntry) => `/goethe/university/${u.slug}/${originParam(c)}`;
