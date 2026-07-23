import { buildExamMetadata } from "@/lib/exams/seo/meta";
import { EXAMS_INDEX } from "@/lib/exams/seo/exams-data";
import { ExamsIndexPage } from "@/components/exams-seo/pages";

export const revalidate = false;

export function generateMetadata() {
  return buildExamMetadata({
    title: "German & Austrian exams — TestDaF, telc, DTZ, DSH, Einbürgerungstest & ÖSD",
    description:
      "Eight German and Austrian exams: TestDaF, telc B1/B2/C1 Hochschule, the DTZ, DSH, the Einbürgerungstest and ÖSD B1 — real format, honest scoring, free practice.",
    path: EXAMS_INDEX,
  });
}

export default function Page() {
  return <ExamsIndexPage />;
}
