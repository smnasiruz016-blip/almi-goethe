// RR-398 · the AlmiWorld family footer (the same columns and links as almiworld.com), from the one generated kit
// (src/lib/almiworld-family.ts + src/components/almiworld/, made by almiworld-site/tools/make-family-kit.mjs). No eBooks, no old
// WordPress links. AlmiGoethe's own links (including its two SEO hubs) sit in one row under the columns.
import { AlmiWorldFooter } from "@/components/almiworld/AlmiWorldFooter";

export function GlobalFooter() {
  return (
    <AlmiWorldFooter
      own={[
        { label: "AlmiGoethe", href: "/" },
        { label: "Practice", href: "/practice" },
        { label: "German requirements guide", href: "/goethe" },
        { label: "German & Austrian exams", href: "/pruefung" },
        { label: "Pricing", href: "/pricing" },
      ]}
    />
  );
}
