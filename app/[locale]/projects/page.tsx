import { Metadata } from "next";
import { getAllProjects } from "@/lib/content";
import { ProjectCard } from "@/components/content/ProjectCard";

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
    title: "Projects | Christian Tannahill",
    description: "View my portfolio of software development projects",
    openGraph: {
      title: "Projects | Christian Tannahill",
      description: "View my portfolio of software development projects",
      type: "website",
      url: `${baseURL}/${locale}/projects`,
      images: [
        {
          url: `${baseURL}/og-projects.png`,
          width: 1200,
          height: 630,
          alt: "Christian Tannahill's Projects",
        },
      ],
      siteName: "Christian Tannahill",
      locale: locale === "fr" ? "fr_FR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Projects | Christian Tannahill",
      description: "View my portfolio of software development projects",
      images: [`${baseURL}/og-projects.png`],
    },
  };
}
export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const projects = await getAllProjects(locale);
  return (
    <div className="py-12 w-full">
      <h1 className="mb-8 text-4xl font-bold">Projects</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} locale={locale} />
        ))}
      </div>

      {projects.length === 0 && (
        <p className="text-center text-foreground">
          No projects found. Check back soon!
        </p>
      )}
    </div>
  );
}
