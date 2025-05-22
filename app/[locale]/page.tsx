// app/[locale]/page.tsx
import { Metadata } from "next";
import { getFeaturedProjects, getLatestPosts } from "@/lib/content";
import HMHero from "@/components/home/HMHero";
import HMIntroduction from "@/components/home/HMIntroduction";
import HMFeaturedProjects from "@/components/home/HMFeaturedProjects";
import HMTechnicalSkills from "@/components/home/HMTechnicalSkills";
import HMProfessionalExperience from "@/components/home/HMProfessionalExperience";
import HMTechStack from "@/components/home/HMTechStack";
import HMLatestPosts from "@/components/home/HMLatestPosts";
import HMContact from "@/components/home/HMContact";
import HMEducationSkills from "@/components/home/HMEducationSkills";
import HMAreasOfInterest from "@/components/home/HMAreasOfInterest";
import SectionDivider from "@/components/shared/SectionDivider";

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
    title: "Christian Tannahill | Full-Stack Software Engineer",
    description:
      "Portfolio showcasing my work as a Full-Stack Software Engineer, crafting intuitive UIs & robust APIs",
    openGraph: {
      title: "Christian Tannahill | Full-Stack Software Engineer",
      description:
        "Portfolio showcasing my work as a Full-Stack Software Engineer, crafting intuitive UIs & robust APIs",
      type: "website",
      url: `${baseURL}/${locale}`,
      images: [
        {
          url: `${baseURL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Christian Tannahill - Full-Stack Software Engineer",
        },
      ],
      siteName: "Christian Tannahill",
      locale: locale === "fr" ? "fr_FR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Christian Tannahill | Full-Stack Software Engineer",
      description:
        "Portfolio showcasing my work as a Full-Stack Software Engineer, crafting intuitive UIs & robust APIs",
      images: [`${baseURL}/og-image.png`],
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const featuredProjects = await getFeaturedProjects(locale, 3);
  const latestPosts = await getLatestPosts(locale, 2);

  return (
    <div className="py-12">
      {/* Hero Section */}
      <HMHero locale={locale} />
      <SectionDivider />

      {/* Introduction Section */}
      <HMIntroduction />

      {/* Featured Projects Section */}
      <HMFeaturedProjects projects={featuredProjects} locale={locale} />

      {/* Tech Stack Section */}
      <HMTechStack />

      {/* Technical Skills Section */}
      <HMTechnicalSkills />

      {/* Professional Experience Section */}
      <HMProfessionalExperience />

      {/* Education & Skills - MERGED */}
      <HMEducationSkills />

      {/* Areas of Interest - NEW */}
      <HMAreasOfInterest />

      {/* Latest Blog Posts */}
      <HMLatestPosts posts={latestPosts} locale={locale} />

      {/* Contact/CTA Section */}
      <HMContact />
    </div>
  );
}
