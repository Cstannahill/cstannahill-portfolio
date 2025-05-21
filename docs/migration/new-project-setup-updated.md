# New Project Setup Guide (Updated)

This document provides a comprehensive guide for setting up the new portfolio project with shadcn/ui and Tailwind CSS, ensuring a clean start while preserving reference to the current implementation.

## Repository & Codespace Setup

### 1. Create a New Next.js Project

```bash
# Create a new Next.js project with TypeScript, ESLint, and Tailwind CSS
npx create-next-app@latest cstannahill-portfolio --typescript --eslint --tailwind --app

# Navigate to the project directory
cd cstannahill-portfolio

# Initialize Git repository (if not already initialized)
git init
git add .
git commit -m "Initial commit: Next.js with Tailwind CSS"
```

### 2. Install and Configure shadcn/ui

```bash
# Install shadcn/ui CLI
npm install shadcn-ui@latest

# Initialize shadcn/ui
npx shadcn-ui@latest init

# Follow the interactive prompts:
# - TypeScript: Yes
# - Style: Default or customize your theme colors
# - Global CSS: Yes
# - CSS Variables: Yes
# - Location of tailwind.config.ts: tailwind.config.ts
# - Location of global CSS file: app/globals.css
# - Directory for components: components
# - Directory for utils: lib/utils
# - Include React Server Components: Yes
```

### 3. Install Core Dependencies

```bash
# Install common dependencies
npm install next-intl@latest next-mdx-remote@latest rehype-highlight@latest rehype-pretty-code@latest rehype-slug@latest remark-gfm@latest
```

### 4. Additional Setup for Feature Parity

```bash
# For internationalization
npm install next-intl

# For metadata and sitemap
npm install next-sitemap

# For markdown processing
npm install rehype-highlight rehype-pretty-code rehype-slug remark-gfm
```

## Project Structure Setup

Create the following directory structure to match the existing project organization:

```
app/
├── [locale]/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── blog/
│   └── work/
├── globals.css
├── layout.tsx
└── page.tsx
components/
├── ui/          # shadcn/ui components
├── layout/      # Layout components like Header, Footer
├── content/     # Content rendering components
└── shared/      # Shared utility components
content/
├── blog/        # Blog post MDX files
└── projects/    # Project MDX files
lib/
├── utils.ts     # Utility functions
└── content.ts   # Content loading utilities
i18n/
└── index.ts     # Internationalization config
```

### Directory Creation Commands

```bash
# Create the necessary directories for your content
mkdir -p content/blog content/projects

# Create component directories
mkdir -p components/layout components/content components/shared

# Create i18n directory for localization
mkdir -p i18n

# Create docs directory to transfer documentation
mkdir -p docs/migration docs/design-reference/components docs/design-reference/pages
```

## Documentation Transfer

Transfer the following documentation from the current project:

```bash
# Create documentation directory
mkdir -p docs/migration

# Copy migration documentation
cp -r /path/to/current/docs/migration/* docs/migration/
```

## Design Reference Setup

Create a design reference directory to capture the current design for reference:

```bash
# Create design reference directory
mkdir -p docs/design-reference/components
mkdir -p docs/design-reference/pages
```

Capture screenshots of key components and pages from the current site and organize them in this directory.

## Repository Management Strategy

### Parallel Development Approach

1. **Keep both repositories active** until the migration is complete:

   - Current portfolio remains the production site
   - New implementation is developed in parallel

2. **Shared documentation** between repositories to maintain context:

   - Migration documents
   - Component mappings
   - Design references

3. **Content synchronization strategy**:

   - Copy content files (MDX, images) as they are
   - Implement identical content loading mechanisms
   - Test with identical content to ensure parity

4. **Deployment strategy**:
   - Deploy new implementation to staging URL
   - Validate thoroughly before switching the primary domain
   - Maintain the old repository as a backup

## GitHub Copilot Context Optimization

To ensure GitHub Copilot has the right context for assisting with development:

1. **Create detailed component files** with comments explaining:

   - Component purpose
   - Visual design goals
   - Mobile responsive requirements
   - Key interactions

2. **Use consistent naming conventions** that match the current project

3. **Include reference links** to design screenshots in component files:

   ```tsx
   // components/layout/Header.tsx

   /**
    * Main navigation header component
    * @see Design reference: /docs/design-reference/components/header.png
    * @see Mobile design: /docs/design-reference/components/header-mobile.png
    */
   ```

4. **Document key challenges** for specific components:
   ```tsx
   /**
    * ProjectCard component
    *
    * Current issues to solve:
    * - Card doesn't scale properly on mobile
    * - Image aspect ratio is inconsistent
    * - Text truncation needs improvement
    */
   ```

## Getting Started Workflow

1. Set up the new repository and project structure
2. Transfer documentation and create design references
3. Implement the tailwind.config.ts with the appropriate theme variables
4. Create core layout components (Header, Footer)
5. Implement the internationalization structure
6. Set up the content loading utilities
7. Implement one example of each content type (project, blog post)
8. Validate the responsive behavior before proceeding with full content migration

## App Router Organization

For detailed guidance on the app directory structure, refer to the [App Directory Setup Guide](./app-directory-setup.md).

---

This setup guide provides a comprehensive approach to starting the new project while maintaining reference to the current implementation. Adjust as needed based on specific requirements and preferences.
