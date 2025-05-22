// app/[locale]/projects/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { getProjectBySlug, getAllProjects } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { MDXContent } from "@/components/content/MDXContent";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ExternalLink, Github } from "lucide-react";

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  try {
    const { metadata } = await getProjectBySlug(slug, locale);

    return {
      title: `${metadata.title} | Christian Tannahill`,
      description: metadata.excerpt || metadata.summary || "",
    };
  } catch (error) {
    return {
      title: "Project Not Found | Christian Tannahill",
      description: "The requested project could not be found.",
    };
  }
}

// Generate static paths for all projects
export async function generateStaticParams() {
  const projects = await getAllProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  try {
    const { metadata, content } = await getProjectBySlug(slug, locale);

    return (
      <article className="container max-w-4xl py-12">
        {/* Back Button */}
        <Link
          href={`/${locale}/projects`}
          className="mb-8 flex items-center text-sm text-foreground hover:text-primary"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Projects
        </Link>

        {/* Project Header */}
        <header className="mb-8">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            {metadata.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-foreground">
            <time
              dateTime={metadata.publishedAt || metadata.date}
              className="text-sm"
            >
              {formatDate(metadata.publishedAt || metadata.date || new Date())}
            </time>

            {metadata.technologies && metadata.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {metadata.technologies.slice(0, 5).map((tech: string) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {metadata.technologies.length > 5 && (
                  <Badge variant="outline" className="text-xs">
                    +{metadata.technologies.length - 5}
                  </Badge>
                )}
              </div>
            )}
          </div>

          {/* Project Links */}
          {(metadata.demoUrl || metadata.sourceUrl) && (
            <div className="mt-6 flex flex-wrap gap-4">
              {metadata.demoUrl && (
                <a
                  href={metadata.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Demo
                </a>
              )}

              {metadata.sourceUrl && (
                <a
                  href={metadata.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"
                >
                  <Github className="h-4 w-4" />
                  Source Code
                </a>
              )}
            </div>
          )}
        </header>

        {/* Cover Image */}
        {metadata.images && metadata.images.length > 0 && (
          <div className="mb-8 overflow-hidden rounded-lg">
            <Image
              src={metadata.images[0]}
              alt={metadata.title}
              width={1200}
              height={630}
              className="w-full object-cover"
              priority
            />
          </div>
        )}

        {/* Project Content */}
        <div className="prose prose-invert max-w-none">
          <MDXContent source={content} />
        </div>
      </article>
    );
  } catch (error) {
    console.error("Error loading project:", error);
    notFound();
  }
}
