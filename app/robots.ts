import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/api/*", "/_next/", "/_next/*"],
    },
    sitemap: "https://cstannahill-software-dev.vercel.app/sitemap.xml",
  };
}
