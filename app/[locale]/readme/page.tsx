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

export const metadata: Metadata = {
  title: "README | Christian Tannahill",
  description:
    "GitHub README-style overview of my development journey, skills, and projects",
};

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
