import { MetadataRoute } from "next";
import { getAllPosts, getAllProjects } from "@/lib/content";
import { locales } from "@/i18n";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://cstannahill-software-dev.vercel.app";

  // Base routes for each locale
  const localeRoutes = locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/${locale}/readme`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/${locale}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/${locale}/projects`,
      lastModified: new Date(),
    },
  ]);

  // Blog posts
  const posts = await getAllPosts();
  const postRoutes = locales.flatMap((locale) =>
    posts.map((post) => ({
      url: `${baseUrl}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.date || new Date()),
    }))
  );

  // Projects
  const projects = await getAllProjects();
  const projectRoutes = locales.flatMap((locale) =>
    projects.map((project) => ({
      url: `${baseUrl}/${locale}/projects/${project.slug}`,
      lastModified: new Date(project.date || new Date()),
    }))
  );

  return [...localeRoutes, ...postRoutes, ...projectRoutes];
}
