// app/[locale]/page.tsx
import { Metadata } from "next";
import { getFeaturedProjects } from "@/lib/content";
import HMHero from "@/components/home/HMHero";
import HMIntroduction from "@/components/home/HMIntroduction";
import HMFeaturedProjects from "@/components/home/HMFeaturedProjects";
import HMTechnicalSkills from "@/components/home/HMTechnicalSkills";
import HMProfessionalExperience from "@/components/home/HMProfessionalExperience";
import HMEducation from "@/components/home/HMEducation";

export const metadata: Metadata = {
  title: "Christian Tannahill | Full-Stack Software Engineer",
  description:
    "Portfolio showcasing my work as a Full-Stack Software Engineer, crafting intuitive UIs & robust APIs",
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const featuredProjects = await getFeaturedProjects(locale, 3);

  return (
    <div className="py-12">
      {/* Hero Section */}
      <HMHero locale={locale} />

      {/* Introduction Section */}
      <HMIntroduction />

      {/* Featured Projects Section */}
      <HMFeaturedProjects projects={featuredProjects} locale={locale} />

      {/* Technical Skills Section */}
      <HMTechnicalSkills />

      {/* Professional Experience Section */}
      <HMProfessionalExperience />

      {/* Education Section */}
      <HMEducation />
    </div>
  );
}
