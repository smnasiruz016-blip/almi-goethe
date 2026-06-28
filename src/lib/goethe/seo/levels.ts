// Layer 3 — the CEFR level as the search topic itself, and the real
// German-level-per-PURPOSE requirements. These are established, public rules; the
// page always adds "confirm with the competent authority". No fabrication.

import type { GoetheLevel } from "@prisma/client";

export const LEVELS: GoetheLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

export const LEVEL_INFO: Record<GoetheLevel, { label: string; blurb: string }> = {
  A1: { label: "A1 — Beginner", blurb: "Everyday phrases and very simple exchanges. Often the level for a spouse/family visa." },
  A2: { label: "A2 — Elementary", blurb: "Simple, routine communication. A common stepping stone and part of the Chancenkarte points." },
  B1: { label: "B1 — Intermediate", blurb: "Independent everyday and work communication. The usual level for citizenship and many skilled-work routes." },
  B2: { label: "B2 — Upper Intermediate", blurb: "Confident professional communication. Frequently required for recognised health and skilled occupations." },
  C1: { label: "C1 — Advanced", blurb: "Fluent, nuanced German. The typical requirement for German-taught university study and the medical Approbation." },
  C2: { label: "C2 — Mastery", blurb: "Near-native command. Expected for teaching and some highly language-intensive professions." },
};

export type Purpose = {
  slug: string; // used in URL as for-<slug>
  name: string;
  typicalLevel: GoetheLevel | string;
  detail: string;
  authority: string;
  authorityUrl: string;
};

export const PURPOSES: Purpose[] = [
  {
    slug: "university",
    name: "University study (German-taught)",
    typicalLevel: "C1",
    detail:
      "German-taught degree programmes usually require around C1 (commonly DSH-2 or TestDaF level 4). Many English-taught programmes accept B1–B2 for daily life instead — always check the specific programme.",
    authority: "the university / uni-assist",
    authorityUrl: "https://www.uni-assist.de/en/",
  },
  {
    slug: "skilled-work",
    name: "Skilled-worker visa / Chancenkarte",
    typicalLevel: "B1–B2",
    detail:
      "Skilled-worker routes commonly expect around B1–B2 depending on the occupation; the Chancenkarte (Opportunity Card) points system rewards German from A1 upward. Regulated jobs (e.g. nursing) set their own level.",
    authority: "make-it-in-germany / the German mission",
    authorityUrl: "https://www.make-it-in-germany.com/en/",
  },
  {
    slug: "medical-approbation",
    name: "Medical licence (Approbation)",
    typicalLevel: "C1",
    detail:
      "The Approbation for doctors, dentists and pharmacists requires C1 general German plus a medical-language examination (Fachsprachprüfung) set by the regional medical chamber.",
    authority: "the regional medical chamber (Ärztekammer)",
    authorityUrl: "https://www.anerkennung-in-deutschland.de/en/",
  },
  {
    slug: "family-visa",
    name: "Spouse / family reunion visa",
    typicalLevel: "A1",
    detail:
      "Joining a spouse in Germany generally requires basic German at A1 before the visa, with some exemptions. Confirm the current rule for your case with the German mission.",
    authority: "the German embassy / consulate",
    authorityUrl: "https://www.auswaertiges-amt.de/en",
  },
  {
    slug: "citizenship",
    name: "German citizenship",
    typicalLevel: "B1",
    detail:
      "Naturalisation generally requires German at B1 (alongside other criteria). Confirm the current requirement with the naturalisation authority.",
    authority: "the naturalisation authority (Einbürgerungsbehörde)",
    authorityUrl: "https://www.bamf.de/EN/",
  },
];

export const PURPOSE_SLUGS: readonly string[] = PURPOSES.map((p) => p.slug);
const BY_SLUG = new Map(PURPOSES.map((p) => [p.slug, p]));
export function findPurposeBySlug(slug: string): Purpose | null {
  return BY_SLUG.get(slug) ?? null;
}
