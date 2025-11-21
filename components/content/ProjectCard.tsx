"use client"
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
import { motion } from "motion/react";

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
    <Card className="group p-3 flex h-full flex-col overflow-hidden rounded-lg border border-silver bg-card transition-all duration-300 hover:border-accent/20 hover:bg-secondary/40 hover:shadow-lg hover:shadow-accent/5">
      {coverImage && (
        <motion.div
          className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-white"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <Image
            src={coverImage}
            alt={cardTitle}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent"
          />
          {summary && (
            <motion.div
              initial={{ y: "100%" }}
              whileHover={{ y: "0%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-0 left-0 right-0 bg-card/90 p-4 text-left text-sm text-foreground/90 backdrop-blur"
            >
              {summary}
            </motion.div>
          )}
        </motion.div>
      )}
      <CardHeader className="p-4">
        <Link href={`/${locale}/projects/${cardSlug}`}>
          <motion.h3
            layoutId={`project-title-${cardSlug}`}
            className="relative inline-block line-clamp-1 text-xl font-bold transition-colors group-hover:text-accent-light"
          >
            {cardTitle}
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent-light/60 transition-all duration-300 group-hover:w-full"></span>
          </motion.h3>
        </Link>
        {publishedAt && (
          <p className="text-sm text-silver">{formatDate(publishedAt)}</p>
        )}
      </CardHeader>
      {summary && (
        <CardContent className="flex-grow p-4 pt-0">
          <p className="line-clamp-3 text-sm text-foreground/80">{summary}</p>

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
                  className="text-xs transition-colors hover:bg-silver/10"
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
          className="flex items-center text-sm font-medium text-accent-light transition-transform duration-300 group-hover:translate-x-1"
        >
          View Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
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
