# App Directory Structure Setup

This document outlines the approach for organizing the Next.js app directory in the new portfolio implementation. The project uses the app directory pattern without the src/ folder, following Next.js 13+ best practices.

## Base Directory Structure

```
cstannahill-portfolio/
├── app/                    # App Router directory
│   ├── [locale]/           # Dynamic route for localization
│   │   ├── page.tsx        # Home page for each locale
│   │   ├── layout.tsx      # Layout for localized pages
│   │   ├── blog/           # Blog pages
│   │   │   ├── page.tsx    # Blog index
│   │   │   └── [slug]/     # Dynamic blog post routes
│   │   └── projects/           # Projects/portfolio pages
│   │       ├── page.tsx    # Projects index
│   │       └── [slug]/     # Dynamic project routes
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Root page (typically redirects to default locale)
│   ├── robots.ts           # SEO: Robots configuration
│   └── sitemap.ts          # SEO: Sitemap configuration
├── components/             # React components (not in src/)
│   ├── ui/                 # shadcn/ui components
│   ├── layout/             # Layout components (Header, Footer, etc.)
│   ├── content/            # Content rendering components
│   └── shared/             # Shared utility components
├── content/                # Content files (not in src/)
│   ├── blog/               # Blog post MDX files
│   └── projects/           # Project MDX files
├── lib/                    # Utility functions and shared logic (not in src/)
│   ├── utils.ts            # General utility functions
│   └── content.ts          # Content loading utilities
├── i18n/                   # Internationalization configuration (not in src/)
│   └── index.ts            # i18n setup and configuration
├── public/                 # Static assets
│   ├── images/             # Images for the site
│   └── fonts/              # Font files
└── docs/                   # Project documentation
    ├── migration/          # Migration planning documents
    └── design-reference/   # Design screenshots and references
```

## Key Differences from Previous Structure

1. **No src/ Directory:**

   - All core app code is at the root level rather than in a src/ folder
   - This matches Next.js 14+ default conventions

2. **App Router Focus:**

   - Uses the app/ directory exclusively (no pages/ directory)
   - Server Components by default

3. **Component Organization:**

   - Components are at the root level in components/
   - The ui/ subdirectory contains shadcn/ui components

4. **Content and Data:**
   - Content files are at the root level in content/
   - Utility functions are at the root level in lib/

## Migration Considerations

When migrating from the previous structure:

1. **Path Updates:**

   - Update all import paths to reflect the new structure
   - Example: `import { Button } from "@/components/ui/button"`

2. **Content Loading:**

   - Update content loading utilities to point to the new content paths
   - Ensure MDX processors work correctly with the new directory structure

3. **Route Mapping:**

   - The [locale]/ directory approach remains similar
   - dynamic routes ([slug]) work the same way as before

4. **Server vs. Client Components:**
   - Be explicit about which components need to be client-side ("use client")
   - Take advantage of server components where possible

## Component Example

```tsx
// /components/layout/Header.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

/**
 * Main navigation header component
 * @see Design reference: /docs/design-reference/components/header.png
 * @see Mobile design: /docs/design-reference/components/header-mobile.png
 */
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Implementation goes here

  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Header content */}
    </header>
  );
}
```

## App Router Page Example

```tsx
// /app/[locale]/work/page.tsx

import { Metadata } from "next";
import { getProjects } from "@/lib/content";
import { ProjectCard } from "@/components/content/ProjectCard";

export const metadata: Metadata = {
  title: "My Work | Portfolio",
  description: "Explore my projects and work",
};

export default async function WorkPage() {
  const projects = await getProjects();

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">My Work</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
```

---

This approach maintains the benefits of the app directory pattern while simplifying the overall structure by removing the src/ directory layer.
