// app/[locale]/readme/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import RMIntroduction from "@/components/readme/RMIntoduction";
import SectionDivider from "@/components/shared/SectionDivider";
import RMCoreStrengths from "@/components/readme/RMCoreStrengths";
import RMTechnologiesILove from "@/components/readme/RMTechnologiesILove";
import RMCurrentlyLearning from "@/components/readme/RMCurrentlyLearning";
import RMTechExplored from "@/components/readme/RMTechExplored";
import RMRecentProjects from "@/components/readme/RMRecentProjects";
import RMGithubMetrics from "@/components/readme/RMGitHubMetrics";
import RMCollab from "@/components/readme/RMCollab";
import RMQuote from "@/components/readme/RMQuote";
import RMHeader from "@/components/readme/RMHeader";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const baseURL =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://cstannahill-software-dev.vercel.app";

  return {
    metadataBase: new URL(baseURL),
    title: "README | Christian Tannahill",
    description:
      "GitHub README-style overview of my development journey, skills, and projects",
    openGraph: {
      title: "README | Christian Tannahill",
      description:
        "GitHub README-style overview of my development journey, skills, and projects",
      type: "website",
      url: `${baseURL}/${locale}/readme`,
      images: [
        {
          url: `${baseURL}/og-readme.png`,
          width: 1200,
          height: 630,
          alt: "Christian Tannahill's README",
        },
      ],
      siteName: "Christian Tannahill",
      locale: locale === "fr" ? "fr_FR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "README | Christian Tannahill",
      description:
        "GitHub README-style overview of my development journey, skills, and projects",
      images: [`${baseURL}/og-readme.png`],
    },
  };
}

export default async function ReadmePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <div className="py-12 max-w-4xl mx-auto">
        {/* Header */}
        <RMHeader />

        <div className="prose prose-invert max-w-none space-y-12">
          {/* Introduction */}
          <RMIntroduction />

          <SectionDivider />
          {/* Core Strengths */}
          <RMCoreStrengths />

          <SectionDivider />

          {/* About Me */}

          {/* Technologies I Love Working With */}
          <RMTechnologiesILove />

          <SectionDivider />
          {/* Currently Learning */}
          <RMCurrentlyLearning />

          <SectionDivider />
          {/* Tech Explored - Grid Layout */}
          <RMTechExplored />

          <SectionDivider />
          {/* Recent Projects */}
          <RMRecentProjects />

          <SectionDivider />
          {/* GitHub Metrics */}
          <RMGithubMetrics />

          <SectionDivider />
          {/* Collaboration */}
          <RMCollab />

          <SectionDivider />

          {/* About Me */}

          {/* Quote */}
          <RMQuote />
        </div>
      </div>
    </>
  );
}
