import { buildMetadata } from "@/lib/goethe/seo/meta";
import { GOETHE_INDEX } from "@/lib/goethe/seo/urls";
import { GoetheIndex } from "@/components/goethe-seo/pages-index";

export const revalidate = 86400;

export function generateMetadata() {
  return buildMetadata({
    title: "Goethe-Zertifikat practice & German requirements for Germany — AlmiGoethe",
    description:
      "Free, original Goethe-Zertifikat practice for every level (A1–C2) and all four modules, plus honest guidance on the German level you need to study, work or settle in Germany — by level, goal, profession and university.",
    path: GOETHE_INDEX,
  });
}

export default function Page() {
  return <GoetheIndex />;
}
