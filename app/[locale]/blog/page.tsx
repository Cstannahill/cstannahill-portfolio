// app/[locale]/blog/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Christian Tannahill",
  description: "Thoughts and insights on software development and technology",
};

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const posts = await getAllPosts(locale);

  return (
    <div className="py-12 max-w-5xl mx-auto">
      <div className="flex items-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-accent-light bg-clip-text text-transparent">
          Blog
        </h1>
      </div>

      {posts.length === 0 ? (
        <p className="text-center text-muted-foreground mt-12">
          No blog posts found. Check back soon!
        </p>
      ) : (
        <div className="space-y-10">
          {posts.map((post) => (
            <Card
              key={post.slug}
              className="overflow-hidden bg-card/50 backdrop-blur border-accent/10 hover:border-accent/30 transition-all duration-300 rounded-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
                {post.coverImage ? (
                  <div className="relative aspect-[16/9] md:aspect-square overflow-hidden md:rounded-l-lg rounded-t-lg">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className="hidden md:flex items-center justify-center bg-secondary/30 md:rounded-l-lg rounded-t-lg">
                    <div className="p-6 text-center">
                      <div className="w-12 h-12 mx-auto mb-3 text-accent-light opacity-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        No cover image
                      </p>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <time
                          dateTime={post.publishedAt || post.date}
                          className="text-sm text-muted-foreground"
                        >
                          {formatDate(post.publishedAt || post.date || "")}
                        </time>

                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                            {post.tags.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{post.tags.length - 3}
                              </Badge>
                            )}
                          </div>
                        )}
                      </div>

                      <Link
                        href={`/${locale}/blog/${post.slug}`}
                        className="block"
                      >
                        <h2 className="text-2xl font-bold hover:text-accent-light transition-colors group-hover:text-accent-light">
                          {post.title}
                        </h2>
                      </Link>
                    </div>
                  </CardHeader>

                  <CardContent className="p-0 mb-4">
                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt || post.summary}
                    </p>
                  </CardContent>

                  <CardFooter className="p-0">
                    <Link
                      href={`/${locale}/blog/${post.slug}`}
                      className="group flex items-center text-xl font-bold hover:text-accent-light transition-colors"
                    >
                      Read more
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
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
