import type { Metadata } from "next";
import { Inter, Allura } from "next/font/google";
import "./globals.css";
import { GlobalHeader } from "@/components/GlobalHeader";
import { GlobalFooter } from "@/components/GlobalFooter";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const allura = Allura({ variable: "--font-allura", subsets: ["latin"], weight: "400", display: "swap" });

const SITE_URL = "https://almigoethe.almiworld.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AlmiGoethe — Goethe-Zertifikat German practice (A1–C2) with honest AI feedback",
    template: "%s · AlmiGoethe",
  },
  description:
    "Practise the Goethe-Zertifikat German exams at all six CEFR levels (A1–C2) — Lesen, Hören, Schreiben and Sprechen — with honest per-module points estimates (60% pass mark) and AI feedback. Original German material, never copied from the Goethe-Institut. Part of the AlmiWorld family.",
  applicationName: "AlmiGoethe",
  authors: [{ name: "AlmiWorld" }],
  keywords: ["Goethe-Zertifikat", "Goethe exam", "German exam practice", "Goethe A1", "Goethe A2", "Goethe B1", "Goethe B2", "Goethe C1", "Goethe C2", "Lesen", "Hören", "Schreiben", "Sprechen", "CEFR", "learn German", "AlmiGoethe", "AlmiWorld"],
  openGraph: {
    title: "AlmiGoethe — honest Goethe-Zertifikat practice (A1–C2)",
    description: "Original German practice with a per-module points estimate and the 60% pass mark, honest AI feedback, all six CEFR levels.",
    url: SITE_URL,
    siteName: "AlmiGoethe",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: "AlmiGoethe — Goethe-Zertifikat German practice (A1–C2)", description: "Honest Goethe practice — a points estimate per module, ranges not inflated numbers." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${allura.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <GlobalHeader />
        <div className="flex flex-1 flex-col">{children}</div>
        <GlobalFooter />
      </body>
    </html>
  );
}
