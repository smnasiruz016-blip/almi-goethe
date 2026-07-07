import { notFound } from "next/navigation";
import { findCountryByOriginParam } from "@/lib/goethe/seo/countries";
import { findPurposeBySlug } from "@/lib/goethe/seo/levels";
import { buildExamMetadata } from "@/lib/exams/seo/meta";
import { examSeoBySlug, isRealExamPurpose } from "@/lib/exams/seo/exams-data";
import { examPurposeOriginUrl } from "@/lib/exams/seo/urls";
import { ExamPurposeOriginPage } from "@/components/exams-seo/pages";

export const revalidate = 86400;
export const dynamicParams = true;

export function generateStaticParams() {
  return [];
}

// seg is "for-<purpose>", origin is "from-<country>". Real-data-or-noindex gate:
// only exam→purpose mappings that genuinely hold are indexed and listed in the
// sitemap; a real-but-unmapped purpose renders for orientation but is noindex; an
// unknown exam/purpose/country 404s.
function resolvePurpose(seg: string) {
  if (!seg.startsWith("for-")) return null;
  return findPurposeBySlug(seg.slice("for-".length));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ exam: string; seg: string; origin: string }>;
}) {
  const { exam, seg, origin } = await params;
  const e = examSeoBySlug(exam);
  const purpose = resolvePurpose(seg);
  const country = findCountryByOriginParam(origin);
  if (!e || !purpose || !country) return {};
  const real = isRealExamPurpose(e.exam, purpose.slug);
  return buildExamMetadata({
    title: `${e.name} for ${purpose.name} from ${country.name} — German requirement | AlmiGoethe`,
    description: `The real German level ${purpose.name.toLowerCase()} in Germany requires, how ${e.name} fits, the route from ${country.name}, and free practice. Always confirm with ${purpose.authority}.`,
    path: examPurposeOriginUrl(e.exam, purpose, country),
    index: real,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ exam: string; seg: string; origin: string }>;
}) {
  const { exam, seg, origin } = await params;
  const e = examSeoBySlug(exam);
  const purpose = resolvePurpose(seg);
  const country = findCountryByOriginParam(origin);
  if (!e || !purpose || !country) notFound();
  const real = isRealExamPurpose(e.exam, purpose.slug);
  return <ExamPurposeOriginPage exam={e} purpose={purpose} country={country} real={real} />;
}
