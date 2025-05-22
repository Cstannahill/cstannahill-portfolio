// components/home/HMLatestPosts.tsx
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { PostMetadata } from "@/lib/content";

// Use PostMetadata directly instead of redefining BlogPostPreview
interface HMLatestPostsProps {
  posts: PostMetadata[];
  locale: string;
}

const HMLatestPosts = ({ posts, locale }: HMLatestPostsProps) => {
  return (
    <section className="py-12 ">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <SectionHeading
            title="Latest Insights"
            subtitle="Thoughts and articles on development and technology"
            alignment="left"
          />
          <Link
            href={`/${locale}/blog`}
            className="text-sm font-medium text-accent hover:text-accent-light hover:underline flex items-center"
          >
            View All Posts
            <ExternalLink className="ml-1 h-4 w-4" />
          </Link>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.slice(0, 2).map((post) => (
              <Card
                key={post.slug || `post-${Math.random()}`}
                className="hover:border-accent/20 transition-all duration-300"
              >
                <CardHeader className="p-4">
                  <div className="text-sm text-foreground mb-2">
                    {formatDate(post.publishedAt || post.date || "")}
                  </div>
                  <Link
                    href={
                      post.slug
                        ? `/${locale}/blog/${post.slug}`
                        : `/${locale}/blog`
                    }
                  >
                    <h3 className="text-xl font-bold hover:text-accent-light transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-foreground line-clamp-2">{post.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-foreground">Blog posts coming soon!</p>
        )}
      </div>
    </section>
  );
};

export default HMLatestPosts;
