
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
import { AnimatedProjectTitle } from "@/components/shared/AnimatedProjectTitle";

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const baseURL =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://cstannahill-software-dev.vercel.app";

  try {
    const { metadata } = await getProjectBySlug(slug, locale);

    // Default image or first project image
    const ogImage =
      metadata?.ogImage ||
      (metadata.images && metadata.images.length > 0
        ? metadata.images[0]
        : `${baseURL}/og-image.png`);

    return {
      metadataBase: new URL(baseURL),
      title: `${metadata.title} | Christian Tannahill`,
      description: metadata.excerpt || metadata.summary || "",
      openGraph: {
        title: metadata.title,
        description: metadata.excerpt || metadata.summary || "",
        type: "article",
        publishedTime: metadata.publishedAt || metadata.date,
        url: `${baseURL}/${locale}/projects/${slug}`,
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: metadata.title,
          },
        ],
        siteName: "Christian Tannahill",
        locale: locale === "fr" ? "fr_FR" : "en_US",
      },
      twitter: {
        card: "summary_large_image",
        title: metadata.title,
        description: metadata.excerpt || metadata.summary || "",
        images: [ogImage],
      },
    };
  } catch (error) {
    return {
      title: "Project Not Found | Christian Tannahill",
      description: "The requested project could not be found.",
      openGraph: {
        title: "Project Not Found | Christian Tannahill",
        description: "The requested project could not be found.",
        type: "website",
        url: `${baseURL}/${locale}/projects`,
        siteName: "Christian Tannahill",
        locale: locale === "fr" ? "fr_FR" : "en_US",
      },
      twitter: {
        card: "summary",
        title: "Project Not Found | Christian Tannahill",
        description: "The requested project could not be found.",
      },
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
          <AnimatedProjectTitle
            slug={metadata.slug}
            title={metadata.title}
            className="mb-4 text-4xl font-bold md:text-5xl"
          />

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
          {(metadata.demoUrl ||
            metadata.sourceUrl ||
            metadata.siteUrl ||
            metadata.docsUrl ||
            metadata.npmUrl ||
            metadata.pypiUrl) && (
              <div className="mt-6 flex flex-wrap gap-4">
                {metadata.siteUrl && (
                  <a
                    href={metadata.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Site
                  </a>
                )}

                {metadata.docsUrl && (
                  <a
                    href={metadata.docsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    Documentation
                  </a>
                )}

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
                )}                {metadata.npmUrl && (
                  <a
                    href={metadata.npmUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-red-600/20 bg-red-950/20 px-4 py-2 text-sm font-medium text-red-400 hover:bg-red-950/30 hover:border-red-600/30"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z" />
                    </svg>
                    NPM Package
                  </a>
                )}

                {metadata.pypiUrl && (
                  <a
                    href={metadata.pypiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-blue-600/20 bg-blue-950/20 px-4 py-2 text-sm font-medium text-blue-400 hover:bg-blue-950/30 hover:border-blue-600/30"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 17.21h-2v-2h2v2zm0-3.71h-2v-2h2v2zm0-3.29h-2v-2h2v2zm3.71 7h-2v-2h2v2zm0-3.71h-2v-2h2v2zm0-3.29h-2v-2h2v2zm3.29 7h-2v-2h2v2zm0-3.71h-2v-2h2v2zm0-3.29h-2v-2h2v2z" />
                    </svg>
                    PyPI Package
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
