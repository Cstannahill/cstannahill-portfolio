// lib/content.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Types for content
export type PostMetadata = {
  title: string;
  date?: string;
  publishedAt?: string;
  excerpt?: string;
  summary?: string;
  slug: string;
  tags?: string[];
  coverImage?: string;
  images?: string[];
};

export type ProjectMetadata = {
  title: string;
  date?: string;
  publishedAt?: string;
  excerpt?: string;
  summary?: string;
  slug: string;
  tags?: string[];
  technologies?: string[];
  coverImage?: string;
  images?: string[];
  demoUrl?: string;
  sourceUrl?: string;
  siteUrl?: string;
  docsUrl?: string;
  npmUrl?: string;
  pypiUrl?: string;
  ogImage?: string;
  featured?: boolean;
};

const postsDirectory = path.join(process.cwd(), "content/blog");
const projectsDirectory = path.join(process.cwd(), "content/projects");

// Get all blog posts
export async function getAllPosts(
  locale: string = "en"
): Promise<PostMetadata[]> {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith(".mdx"))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);

        return {
          slug,
          ...(data as Omit<PostMetadata, "slug">),
        };
      });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
      const dateA = new Date(a.publishedAt || a.date || 0);
      const dateB = new Date(b.publishedAt || b.date || 0);
      return dateB.getTime() - dateA.getTime();
    });
  } catch (error) {
    console.error("Error getting all posts:", error);
    return [];
  }
}

// Get the latest blog posts
export async function getLatestPosts(
  locale: string = "en",
  count: number = 2
): Promise<PostMetadata[]> {
  const allPosts = await getAllPosts(locale);
  // Map posts to ensure they all have an excerpt
  const postsWithExcerpt = allPosts.map((post) => ({
    ...post,
    // Use summary as fallback or provide a default excerpt if neither exists
    excerpt: post.excerpt || post.summary || "Read more about this topic...",
  }));
  return postsWithExcerpt.slice(0, count);
}

// Get a single blog post by slug
export async function getPostBySlug(
  slug: string,
  locale: string = "en"
): Promise<{ metadata: PostMetadata; content: string }> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    metadata: {
      slug,
      ...(data as Omit<PostMetadata, "slug">),
    },
    content,
  };
}

// Get all projects
export async function getAllProjects(
  locale: string = "en"
): Promise<ProjectMetadata[]> {
  try {
    if (!fs.existsSync(projectsDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(projectsDirectory);

    const allProjectsData = fileNames
      .filter((fileName) => fileName.endsWith(".mdx"))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, "");
        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);

        return {
          slug,
          ...(data as Omit<ProjectMetadata, "slug">),
        };
      });

    // Sort projects by date
    return allProjectsData.sort((a, b) => {
      const dateA = new Date(a.publishedAt || a.date || 0);
      const dateB = new Date(b.publishedAt || b.date || 0);
      return dateB.getTime() - dateA.getTime();
    });
  } catch (error) {
    console.error("Error getting all projects:", error);
    return [];
  }
}

// Get a single project by slug
export async function getProjectBySlug(
  slug: string,
  locale: string = "en"
): Promise<{ metadata: ProjectMetadata; content: string }> {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    metadata: {
      slug,
      ...(data as Omit<ProjectMetadata, "slug">),
    },
    content,
  };
}

// Get featured projects (for home page)
export async function getFeaturedProjects(
  locale: string = "en",
  count: number = 3
): Promise<ProjectMetadata[]> {
  const allProjects = await getAllProjects(locale);

  // Filter projects that are explicitly marked as featured
  const featuredProjects = allProjects.filter(
    (project) => project.featured === true
  );

  // If we have enough featured projects, return them sorted by date
  if (featuredProjects.length >= count) {
    return featuredProjects
      .sort((a, b) => {
        const dateA = new Date(a.publishedAt || a.date || 0);
        const dateB = new Date(b.publishedAt || b.date || 0);
        return dateB.getTime() - dateA.getTime();
      })
      .slice(0, count);
  }

  // If we don't have enough featured projects, fill with projects that are NOT explicitly set to false
  // This includes projects with featured: undefined (default) but excludes featured: false
  const nonFeaturedProjects = allProjects.filter(
    (project) => project.featured !== true && project.featured !== false
  );

  // Combine featured projects (sorted by date) with non-featured projects (sorted by date)
  const combinedProjects = [
    ...featuredProjects.sort((a, b) => {
      const dateA = new Date(a.publishedAt || a.date || 0);
      const dateB = new Date(b.publishedAt || b.date || 0);
      return dateB.getTime() - dateA.getTime();
    }),
    ...nonFeaturedProjects
      .sort((a, b) => {
        const dateA = new Date(a.publishedAt || a.date || 0);
        const dateB = new Date(b.publishedAt || b.date || 0);
        return dateB.getTime() - dateA.getTime();
      })
      .slice(0, count - featuredProjects.length),
  ];

  return combinedProjects;
}
