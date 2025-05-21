# Portfolio Migration Documentation (Updated)

This directory contains comprehensive documentation for migrating the portfolio from Once UI to shadcn/ui and Tailwind CSS with a clean Next.js app directory structure.

## 📚 Documentation Index

The repository of the original portfolio site is located at [cstannahill-portfolio](https://github.com/cstannahill/portfolio-nextjs).

The live site is hosted at [cstannahill-software-dev.vercel.app](https://cstannahill-software-dev.vercel.app/en).

### Overview and Planning

- [Migration Overview](./migration-overview.md) - Strategic overview of the migration project
- [Technical Conflicts](./technical-conflicts.md) - Details on conflicts between Once UI and Tailwind CSS
- [Responsive Mobile Plan](./responsive-mobile-plan.md) - Plan for implementing mobile-first responsive design

### Project Setup and Structure

- [New Project Setup (Updated)](./new-project-setup-updated.md) - Instructions for setting up the new project without src/ directory
- [App Directory Setup](./app-directory-setup.md) - Details on organizing the Next.js app directory

### Component and Content Mapping

- [Component Mapping (Updated)](./component-mapping-updated.md) - Table mapping old components to new location/implementation
- [Content Mapping](./content-mapping.md) - Plan for migrating content (blog posts, projects, etc.)

### Process and Checklist

- [Feature Parity Checklist](./feature-parity-checklist.md) - Checklist to ensure all features are implemented
- [Post-Migration Actions](./post-migration-actions.md) - Tasks to complete after migration
- [Deployment Notes](./deployment-notes.md) - Guidelines for deployment

### Future Development

- [Improvements and Feature Ideas](./improvements-and-feature-ideas.md) - Future enhancements to consider

## 🔄 Key Updates in This Version

1. **Removed src/ Directory**

   - Updated all documentation to reflect the Next.js app directory structure without src/
   - Modified file paths and directory organization accordingly

2. **Simplified Project Structure**

   - Components, content, and utilities now at the root level
   - Cleaner import paths (e.g., `@/components/ui/button` instead of `@/src/components/ui/button`)
   - Better alignment with Next.js 14+ conventions

3. **Enhanced Mobile-First Focus**
   - Additional details on mobile responsiveness
   - More specific notes on component-level mobile issues

## 🚀 Getting Started

If you're just starting the migration process:

1. Read the [Migration Overview](./migration-overview.md) first to understand the goals
2. Review the [Technical Conflicts](./technical-conflicts.md) to understand what issues are being addressed
3. Follow the [New Project Setup (Updated)](./new-project-setup-updated.md) guide to create your new project
4. Use the [App Directory Setup](./app-directory-setup.md) for guidance on organizing your code
5. Refer to the [Component Mapping (Updated)](./component-mapping-updated.md) as you rebuild components

## 📋 Implementation Best Practices

1. **Mobile-First Development**

   - Always start with mobile layouts and enhance for larger screens
   - Test components on multiple device sizes during development

2. **Component Implementation Order**

   1. Core layout components (Header, Footer)
   2. Basic typography and content components
   3. Navigation and interaction components
   4. Complex content components (Project cards, etc.)
   5. Page-level components and templates

3. **Testing Strategy**
   - Test on real devices or emulators
   - Validate accessibility with built-in tools
   - Ensure performance metrics remain high

## 🔗 External Resources

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next.js App Router Documentation](https://nextjs.org/docs/app)

---

This documentation is continuously updated as the migration progresses. Last updated: May 21, 2025.
