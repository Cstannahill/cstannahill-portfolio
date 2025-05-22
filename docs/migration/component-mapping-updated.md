## Page Mapping

| Current Page Route  | New File Path                         | Migration Status | Notes                           |
| ------------------- | ------------------------------------- | ---------------- | ------------------------------- |
| /en                 | app/[locale]/page.tsx                 | ☐                | Home page with locale parameter |
| /en/readme          | app/[locale]/readme/page.tsx          | ☐                | About/readme page               |
| /en/blog            | app/[locale]/blog/page.tsx            | ☐                | Blog index page                 |
| /en/blog/[slug]     | app/[locale]/blog/[slug]/page.tsx     | ☐                | Individual blog post page       |
| /en/projects        | app/[locale]/projects/page.tsx        | ☐                | Projects index page (renamed)   |
| /en/projects/[slug] | app/[locale]/projects/[slug]/page.tsx | ☐                | Individual project detail page  |

## Utility Files Mapping

// ... existing utility mapping ...# Component Mapping Table (Updated)

This table provides a detailed mapping of all components in the current portfolio, their migration status, new implementation approach (TailwindCSS/shadcn/ui), and the updated file paths for the new structure without src/ directory.

| Current Component/File               | New File Path                           | Type/Role        | Migration Status | New Approach (Tailwind/shadcn/ui) | Notes                                                     |
| ------------------------------------ | --------------------------------------- | ---------------- | ---------------- | --------------------------------- | --------------------------------------------------------- |
| src/components/Footer.tsx            | components/layout/Footer.tsx            | Layout/UI        | ☐                | Tailwind (custom)                 | Remove SCSS, use Tailwind for layout, spacing, and colors |
| src/components/Header.tsx            | components/layout/Header.tsx            | Layout/UI        | ☐                | Tailwind (custom)                 | Rebuild with Tailwind flex/grid for mobile-first design   |
| src/components/ProjectCard.tsx       | components/content/ProjectCard.tsx      | Content/UI       | ☐                | Tailwind + shadcn/ui Card         | Use shadcn/ui Card component as base                      |
| src/components/MDXComponents.tsx     | components/content/MDXComponents.tsx    | Content Renderer | ☐                | Tailwind (typography, code)       | Ensure all MDX elements use Tailwind classes              |
| src/components/Mailchimp.tsx         | components/shared/NewsletterForm.tsx    | Integration/Form | ☐                | Tailwind + shadcn/ui Form         | Refactor using shadcn/ui Form components                  |
| src/components/RouteGuard.tsx        | components/shared/RouteGuard.tsx        | Navigation/Auth  | ☐                | Logic only, minimal styling       | Convert to React Server Component if possible             |
| src/components/ScrollToHash.tsx      | components/shared/ScrollToHash.tsx      | Navigation/UX    | ☐                | Logic only, minimal styling       | Add "use client" directive                                |
| src/components/ProjectCarousel.tsx   | components/content/ProjectCarousel.tsx  | Content/Showcase | ☐                | Tailwind (custom)                 | Consider shadcn/ui Carousel if available                  |
| src/components/ProjectGallery.tsx    | components/content/ProjectGallery.tsx   | Content/Showcase | ☐                | Tailwind (custom)                 | Ensure responsive grid on mobile                          |
| src/components/ComponentShowcase.tsx | components/shared/ComponentShowcase.tsx | Demo/Showcase    | ☐                | Tailwind (custom)                 | Ensure accessibility and responsive layout                |
| src/components/HeadingLink.tsx       | components/content/HeadingLink.tsx      | Content/UX       | ☐                | Tailwind (custom)                 | Use Tailwind for anchor styling                           |
| src/components/ClientImage.tsx       | components/shared/ResponsiveImage.tsx   | Media/Utility    | ☐                | Tailwind (custom)                 | Use Next.js Image with proper responsive props            |
| src/components/MDXContent.tsx        | components/content/MDXContent.tsx       | Content Renderer | ☐                | Tailwind (typography, code)       | Use with next-mdx-remote                                  |
| src/components/not-found.tsx         | app/not-found.tsx                       | Error/UX         | ☐                | Tailwind (custom)                 | Create global and localized not-found pages               |
| src/components/FeaturedProjects.tsx  | components/content/FeaturedProjects.tsx | Content/Showcase | ☐                | Tailwind (custom)                 | Implement mobile-first responsive grid                    |
| src/components/ImageFromMap.tsx      | components/shared/ImageFromMap.tsx      | Media/Utility    | ☐                | Tailwind (custom)                 | Update to handle responsive image sizing                  |
| src/components/about/                | components/sections/about/              | Page/Content     | ☐                | Tailwind (custom)                 | Convert to flexible section components                    |
| src/components/blocks/               | components/sections/                    | UI Blocks        | ☐                | Tailwind/shadcn/ui                | Organize as reusable section components                   |
| src/components/blog/                 | components/blog/                        | Page/Content     | ☐                | Tailwind (custom)                 | Ensure all blog components are mobile-friendly            |
| src/components/gallery/              | components/gallery/                     | Page/Content     | ☐                | Tailwind (custom)                 | Build with mobile-first responsive grid                   |
| src/components/media/                | components/shared/media/                | Media/Utility    | ☐                | Tailwind (custom)                 | Update for better responsive handling                     |
| src/components/ui/                   | components/ui/                          | UI Primitives    | ☐                | shadcn/ui + Tailwind              | Use shadcn/ui components with custom theme                |
| src/components/work/                 | components/work/                        | Page/Content     | ☐                | Tailwind (custom)                 | Focus on mobile-first responsive design                   |

## Page Mapping

| Current Page Route | New File Path                     | Migration Status | Notes                           |
| ------------------ | --------------------------------- | ---------------- | ------------------------------- |
| /en                | app/[locale]/page.tsx             | ☐                | Home page with locale parameter |
| /en/readme         | app/[locale]/readme/page.tsx      | ☐                | About/readme page               |
| /en/blog           | app/[locale]/blog/page.tsx        | ☐                | Blog index page                 |
| /en/blog/[slug]    | app/[locale]/blog/[slug]/page.tsx | ☐                | Individual blog post page       |
| /en/work           | app/[locale]/work/page.tsx        | ☐                | Projects/work index page        |
| /en/work/[slug]    | app/[locale]/work/[slug]/page.tsx | ☐                | Individual project detail page  |

## Utility Files Mapping

| Current Utility File | New File Path   | Migration Status | Notes                           |
| -------------------- | --------------- | ---------------- | ------------------------------- |
| src/lib/content.ts   | lib/content.ts  | ☐                | Content loading utilities       |
| src/lib/posts.ts     | lib/posts.ts    | ☐                | Blog post utilities             |
| src/lib/projects.ts  | lib/projects.ts | ☐                | Project utilities               |
| src/lib/utils.ts     | lib/utils.ts    | ☐                | General utility functions       |
| src/i18n/routing.ts  | i18n/routing.ts | ☐                | Internationalization routing    |
| src/middleware.ts    | middleware.ts   | ☐                | Next.js middleware (root level) |

**Legend:**

- Migration Status: ☐ = Not started, ☐ = In progress, ☑ = Complete

---

**Implementation Notes:**

1. **Component Organization:**

   - Layout components -> `components/layout/`
   - Content rendering -> `components/content/`
   - Shared utilities -> `components/shared/`
   - shadcn/ui components -> `components/ui/`

2. **Mobile-First Approach:**

   - All components should be built mobile-first
   - Test components at multiple breakpoints
   - Use Tailwind's responsive utilities (sm:, md:, lg:, etc.)

3. **Server vs. Client Components:**

   - Start with Server Components by default
   - Add "use client" directive only when necessary
   - Keep UI state management in client components

4. **Naming Conventions:**
   - Use descriptive, consistent naming
   - Include appropriate React component types
   - Document props with JSDoc comments

This mapping provides a guide for where each component should be placed in the new project structure, with a focus on maintaining organization while flattening the directory structure by removing the src/ folder.
