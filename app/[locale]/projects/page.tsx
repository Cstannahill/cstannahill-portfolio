import { Metadata } from "next";
import { getAllProjects } from "@/lib/content";
import { ProjectCard } from "@/components/content/ProjectCard";

export const metadata: Metadata = {
  title: "Projects | Christian Tannahill",
  description: "View my portfolio of software development projects",
};

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
        <p className="text-center text-muted-foreground">
          No projects found. Check back soon!
        </p>
      )}
    </div>
  );
}
