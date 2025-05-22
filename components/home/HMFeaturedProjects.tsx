// components/home/HMFeaturedProjects.tsx
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { ProjectCard } from "@/components/content/ProjectCard";
import { ProjectMetadata } from "@/lib/content";

interface HMFeaturedProjectsProps {
  projects: ProjectMetadata[];
  locale: string;
}

const HMFeaturedProjects = ({ projects, locale }: HMFeaturedProjectsProps) => {
  return (
    <section className="py-12">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <Link
          href={`/${locale}/projects`}
          className="text-sm font-medium text-primary hover:underline flex items-center"
        >
          View All Projects
          <ExternalLink className="ml-1 h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} locale={locale} />
        ))}
      </div>

      {projects.length === 0 && (
        <p className="text-center text-foreground">
          Featured projects coming soon!
        </p>
      )}
    </section>
  );
};

export default HMFeaturedProjects;
