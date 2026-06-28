// Per-origin REAL localization for the study/work-in-Germany angle. These are
// public, established facts (EU/EEA free movement; the APS certificate required
// from specific countries; the visa requirement for non-EU nationals). They make
// each origin page genuinely different — not duplicated boilerplate — while the
// exact, case-specific details always defer to uni-assist / anabin / the German
// mission. No fabrication: where a country's status is nuanced, the page says
// "check anabin / uni-assist".

import type { CountryEntry } from "./countries";

// EU + EEA + Switzerland — free movement: no visa/residence permit needed to study
// or work in Germany.
const EU_EEA_CH = new Set([
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU",
  "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES",
  "SE", "IS", "LI", "NO", "CH",
]);

// Countries where the Akademische Prüfstelle (APS) certificate is required before a
// study application. (Operated for these origins; others verify differently.)
const APS_COUNTRIES = new Set(["CN", "IN", "VN", "MN"]);

export type OriginProfile = {
  isEuEea: boolean;
  apsRequired: boolean;
  needsVisa: boolean;
};

export function originProfile(c: CountryEntry): OriginProfile {
  const isEuEea = EU_EEA_CH.has(c.code);
  return {
    isEuEea,
    apsRequired: APS_COUNTRIES.has(c.code),
    needsVisa: !isEuEea && c.code !== "DE",
  };
}

/** Honest study-from-origin paragraph, derived from real status. */
export function studyAngle(c: CountryEntry): string {
  const p = originProfile(c);
  if (p.isEuEea) {
    return `As an applicant from ${c.name} (EU/EEA), you do not need a visa or residence permit to study in Germany, and you enjoy free movement. You still need to meet the language requirement of your programme and apply for admission — many international applicants use uni-assist.`;
  }
  const aps = p.apsRequired
    ? ` Applicants from ${c.name} must obtain an APS certificate (Akademische Prüfstelle) before applying — plan this step early.`
    : "";
  return `Coming from ${c.name}, you will normally need a German student visa and should apply for admission well in advance; most international applicants go through uni-assist.${aps} Whether your school-leaving qualification grants direct entry or requires a Studienkolleg (and Feststellungsprüfung) depends on how it is rated — check anabin and confirm with the university.`;
}

/** Honest work-from-origin paragraph, derived from real status. */
export function workAngle(c: CountryEntry): string {
  const p = originProfile(c);
  if (p.isEuEea) {
    return `As an EU/EEA national from ${c.name}, you can live and work in Germany without a visa. The main hurdle is having your qualification recognised where the job is regulated, and meeting the German level the role requires.`;
  }
  return `From ${c.name}, a skilled-work route to Germany usually means a visa such as the EU Blue Card (for academic roles) or the Chancenkarte (Opportunity Card). Regulated jobs require formal recognition of your qualification first — start the recognition process (anerkennung-in-deutschland.de) and confirm the German level with your employer or the competent authority.`;
}
