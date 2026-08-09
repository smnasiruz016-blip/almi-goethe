import { notFound } from "next/navigation";
import { findCountryByOriginParam } from "@/lib/goethe/seo/countries";
import { buildExamMetadata } from "@/lib/exams/seo/meta";
import { examSeoBySlug } from "@/lib/exams/seo/exams-data";
import { examOriginUrl } from "@/lib/exams/seo/urls";
import { ExamOriginPage } from "@/components/exams-seo/pages";

export const revalidate = false;
// HOLDING 2026-08-09 — ISR page-generation frozen (exam x from-country). Nothing is prerendered and
// nothing renders on demand, so every URL under this route 404s and no ISR write can occur.
// Data and templates are untouched. Reverse by restoring `dynamicParams = true`.
export const dynamicParams = false;

export function generateStaticParams() {
  return [];
}

// seg here is an origin "from-<country>". A "for-<purpose>" seg is handled one level
// deeper (needs an origin too), so it 404s here.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ exam: string; seg: string }>;
}) {
  const { exam, seg } = await params;
  const e = examSeoBySlug(exam);
  const country = findCountryByOriginParam(seg);
  if (!e || !country) return {};
  return buildExamMetadata({
    title: `${e.name} from ${country.name} — requirement, route and free practice`,
    description: `${e.name} from ${country.name}: real format and scoring, how it fits study or work in Germany, and free original practice.`,
    path: examOriginUrl(e.exam, country),
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ exam: string; seg: string }>;
}) {
  const { exam, seg } = await params;
  const e = examSeoBySlug(exam);
  const country = findCountryByOriginParam(seg);
  if (!e || !country) notFound();
  return <ExamOriginPage exam={e} country={country} />;
}
