# Technical Conflicts & Challenges

This document details the specific technical conflicts, challenges, and limitations in the current portfolio implementation that are driving the migration to a pure shadcn/ui and Tailwind CSS approach.

## Once UI and Tailwind CSS Conflicts

### Responsive Design Conflicts

- **Competing Responsive Systems:** Once UI implements its own responsive layout system that conflicts with Tailwind's responsive utilities (`sm:`, `md:`, `lg:`, etc.)
- **Override Challenges:** Tailwind utilities often need `!important` flags to override Once UI styles, creating specificity wars
- **Inconsistent Breakpoints:** Once UI and Tailwind use different breakpoint definitions, causing unpredictable behavior at screen size transitions
- **Mobile-First Limitations:** Once UI components aren't consistently built with a mobile-first approach, making responsive adaptations difficult

### Styling Methodology Conflicts

- **CSS Module vs. Utility Approach:** Once UI heavily relies on CSS modules with deep selector nesting while Tailwind focuses on utility classes
- **Global Style Leakage:** Once UI has global styles that affect Tailwind components in unexpected ways
- **Theme Variable Conflicts:** Different approaches to theming and dark/light mode handling
- **Scaling Issues:** Once UI styling approach makes it difficult to maintain visual consistency when adding new components

## Mobile Experience Issues

- **Header Behavior:** Current header implementation doesn't collapse properly on mobile, causing layout and usability issues
- **Navigation Challenges:** Mobile navigation drawer doesn't integrate well with the rest of the mobile experience
- **Touch Target Issues:** Some interactive elements don't meet minimum touch target size recommendations for mobile
- **Horizontal Overflow:** Several components cause horizontal scrolling on mobile due to fixed width or inappropriate container handling
- **Text Readability:** Font sizing and spacing don't scale appropriately for mobile viewports

## Maintenance & Extensibility Problems

- **Undocumented Components:** Many Once UI components lack proper documentation, making modifications difficult
- **Deep Nesting:** CSS modules with deep nesting patterns make targeted changes challenging
- **Dependency Updates:** Difficult to update dependencies without breaking style integrations
- **Context Overhead:** Multiple nested context providers create unnecessary complexity
- **New Feature Integration:** Adding new components often requires significant custom styling to match existing design

## Performance Considerations

- **Style Bundle Size:** Duplicate style approaches (Once UI + Tailwind) increase CSS bundle size
- **Rendering Efficiency:** Multiple style systems create additional work for the browser's rendering engine
- **Unused CSS:** Difficult to identify and remove unused styles due to complex selector relationships
- **Layout Shifts:** Competing style systems can cause layout shifts during rendering

## Solution Approach with shadcn/ui & Tailwind CSS

- **Unified System:** shadcn/ui is built on Tailwind CSS, ensuring complete compatibility
- **Mobile-First By Design:** Tailwind's mobile-first utilities align with the responsive implementation plan
- **Minimal Framework:** shadcn/ui provides unstyled, accessible components that can be customized entirely with Tailwind
- **Consistent Variables:** Single source of truth for design tokens in `tailwind.config.ts`
- **Better Developer Experience:** Simplified debugging, predictable behavior, and better IDE support

---

This document helps explain the technical rationale behind the migration decision and serves as a reference for avoiding similar conflicts in the future implementation.
