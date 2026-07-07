import { buildExamMetadata } from "@/lib/exams/seo/meta";
import { EXAMS_INDEX } from "@/lib/exams/seo/exams-data";
import { ExamsIndexPage } from "@/components/exams-seo/pages";

export const revalidate = 86400;

export function generateMetadata() {
  return buildExamMetadata({
    title: "TestDaF & telc — German exams for study, work and citizenship in Germany",
    description:
      "TestDaF, telc Deutsch B1, B2 and C1 Hochschule compared: real format, honest scoring, what each opens up, and free original practice — from your country.",
    path: EXAMS_INDEX,
  });
}

export default function Page() {
  return <ExamsIndexPage />;
}
