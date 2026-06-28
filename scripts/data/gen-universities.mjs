import fs from "fs";
const unis = JSON.parse(fs.readFileSync("./scripts/data/de-unis-clean.json", "utf8"));
const J = (v) => (v == null ? "null" : JSON.stringify(v));
const body = unis.map((u) =>
  `  { slug: ${JSON.stringify(u.slug)}, name: ${JSON.stringify(u.name)}, city: ${J(u.city)}, website: ${J(u.website)} },`
).join("\n");
const header = [
  "// Real German higher-education institutions — sourced from Wikidata (CC0, public",
  "// domain) via SPARQL: instances of the university subclass-tree located in Germany,",
  "// currently operating (has an official website, not dissolved). REAL Layer-1a basis",
  "// for AlmiGoethe study-in-Germany SEO — no fabrication. Granular per-programme data",
  "// (the ~21k Hochschulkompass programmes) is a later, licence-gated wave.",
  "",
  "export type GermanUni = { slug: string; name: string; city: string | null; website: string | null };",
  "",
  "export const GERMAN_UNIS: GermanUni[] = [",
].join("\n");
const footer = [
  "];",
  "",
  "export const UNI_SLUGS: readonly string[] = GERMAN_UNIS.map((u) => u.slug);",
  "const BY_SLUG = new Map(GERMAN_UNIS.map((u) => [u.slug, u]));",
  "export function findUniBySlug(slug: string): GermanUni | null {",
  "  return BY_SLUG.get(slug) ?? null;",
  "}",
  "",
].join("\n");
fs.writeFileSync("./src/lib/goethe/seo/universities.ts", header + "\n" + body + "\n" + footer);
console.log("universities.ts written:", unis.length, "unis,", fs.statSync("./src/lib/goethe/seo/universities.ts").size, "bytes");
