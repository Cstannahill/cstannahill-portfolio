// app/[locale]/blog/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { getPostBySlug, getAllPosts } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { MDXContent } from "@/components/content/MDXContent";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft } from "lucide-react";

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  try {
    const { metadata } = await getPostBySlug(slug, locale);

    return {
      title: `${metadata.title} | Christian Tannahill`,
      description: metadata.excerpt || metadata.summary || "",
    };
  } catch (error) {
    return {
      title: "Blog Post Not Found | Christian Tannahill",
      description: "The requested blog post could not be found.",
    };
  }
}

// Generate static paths for all posts
export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  try {
    const { metadata, content } = await getPostBySlug(slug, locale);

    return (
      <article className="py-12">
        {/* Back Button */}
        <Link
          href={`/${locale}/blog`}
          className="mb-8 flex items-center text-sm text-foreground hover:text-primary"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Blog
        </Link>

        {/* Post Header */}
        <header className="mb-12 text-center">
          <div className="mb-4 flex justify-center space-x-2 text-sm text-foreground">
            <time dateTime={metadata.publishedAt || metadata.date}>
              {formatDate(metadata.publishedAt || metadata.date || "")}
            </time>

            {metadata.tags && metadata.tags.length > 0 && <span>•</span>}

            {metadata.tags && metadata.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {metadata.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            )}
          </div>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            {metadata.title}
          </h1>

          {metadata.excerpt && (
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              {metadata.excerpt}
            </p>
          )}
        </header>

        {/* Cover Image */}
        {metadata.coverImage && (
          <div className="mb-12 overflow-hidden rounded-lg">
            <Image
              src={metadata.coverImage}
              alt={metadata.title}
              width={1200}
              height={630}
              className="w-full object-cover"
              priority
            />
          </div>
        )}

        {/* Post Content */}
        <div className="prose prose-invert max-w-3xl mx-auto">
          <MDXContent source={content} />
        </div>
      </article>
    );
  } catch (error) {
    console.error("Error loading blog post:", error);
    notFound();
  }
}
