// components/content/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";
import { ProjectMetadata } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project?: ProjectMetadata;
  locale?: string;
  title?: string; // Added for direct title usage in MDX
  slug?: string; // Added for direct slug usage in MDX
}

export function ProjectCard({
  project,
  locale = "en",
  title,
  slug,
}: ProjectCardProps) {
  // Handle both ways of providing data: either as a full 'project' object
  // or as individual 'title' and 'slug' props
  const cardTitle = project?.title || title || "";
  const cardSlug = project?.slug || slug || "";
  const publishedAt = project?.publishedAt || project?.date;
  const summary = project?.summary || project?.excerpt;
  const coverImage =
    project?.images && project?.images.length > 0 ? project?.images[0] : null;
  const technologies = project?.technologies || [];

  return (
    <Card className="flex h-full flex-col bg-card hover:bg-secondary/40 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:border-accent/20 group rounded-lg">
      {coverImage && (
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
          <Image
            src={coverImage}
            alt={cardTitle}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105 "
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      )}
      <CardHeader className="p-4">
        <Link href={`/${locale}/projects/${cardSlug}`}>
          <h3 className="line-clamp-1 text-xl font-bold transition-colors group-hover:text-accent-light relative inline-block">
            {cardTitle}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-light/60 transition-all duration-300 group-hover:w-full"></span>
          </h3>
        </Link>
        {publishedAt && (
          <p className="text-sm text-silver">{formatDate(publishedAt)}</p>
        )}
      </CardHeader>
      {summary && (
        <CardContent className="flex-grow p-4 pt-0">
          <p className="line-clamp-3 text-sm text-foreground">{summary}</p>

          {technologies.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.slice(0, 4).map((tech, index) => {
                // Alternate between different colors for badges
                const variants = ["secondary", "teal", "purple", "gold"];
                const variant = variants[index % variants.length];
                return (
                  <Badge
                    key={tech}
                    variant={
                      variant as "secondary" | "teal" | "purple" | "gold"
                    }
                    className="text-xs transition-colors"
                  >
                    {tech}
                  </Badge>
                );
              })}
              {technologies.length > 4 && (
                <Badge
                  variant="outline"
                  className="text-xs hover:bg-silver/10 transition-colors"
                >
                  +{technologies.length - 4}
                </Badge>
              )}
            </div>
          )}
        </CardContent>
      )}
      <CardFooter className="p-4 pt-0">
        <Link
          href={`/${locale}/projects/${cardSlug}`}
          className="text-sm font-medium text-accent-light hover:text-accent-light flex items-center group-hover:translate-x-1 transition-transform duration-300"
        >
          View Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </CardFooter>
    </Card>
  );
}
