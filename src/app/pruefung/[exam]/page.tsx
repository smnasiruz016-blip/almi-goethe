import { notFound } from "next/navigation";
import { buildExamMetadata } from "@/lib/exams/seo/meta";
import { ALL_EXAM_SEO, examSeoBySlug } from "@/lib/exams/seo/exams-data";
import { examHubUrl } from "@/lib/exams/seo/urls";
import { ExamHubPage } from "@/components/exams-seo/pages";

export const revalidate = 86400;
export const dynamicParams = true;

// Prebuild the four exam hubs (the only prebuilt routes — the rest is on-demand ISR).
export function generateStaticParams() {
  return ALL_EXAM_SEO.map((e) => ({ exam: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ exam: string }> }) {
  const { exam } = await params;
  const e = examSeoBySlug(exam);
  if (!e) return {};
  return buildExamMetadata({
    title: `${e.name} — format, scoring and what it's for | AlmiGoethe`,
    description: `${e.tagline} Free original ${e.name} practice with honest per-section feedback.`,
    path: examHubUrl(e.exam),
  });
}

export default async function Page({ params }: { params: Promise<{ exam: string }> }) {
  const { exam } = await params;
  const e = examSeoBySlug(exam);
  if (!e) notFound();
  return <ExamHubPage exam={e} />;
}
