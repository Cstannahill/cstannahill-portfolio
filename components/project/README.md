# Project UI Components

This directory contains specialized UI components for enhancing project display pages. These components are designed to be used in project MDX files to create more visually appealing and structured project presentations.

## Components Overview

### ProjectTechStack

Displays a project's technology stack with visual indicators for primary, secondary, and tertiary technologies.

```jsx
<ProjectTechStack
  title="Technology Stack"
  technologies={[
    { name: "Next.js", icon: "▲", role: "primary" },
    { name: "TypeScript", icon: "🔷", role: "primary" },
    { name: "Tailwind CSS", icon: "🎨", role: "secondary" },
    { name: "Shadcn UI", icon: "🧩", role: "secondary" },
    { name: "React Server Components", icon: "⚛️", role: "tertiary" },
  ]}
>
  Optional description of the technology stack.
</ProjectTechStack>
```

### ProjectTimeline

Displays a project's development timeline with status indicators for each milestone.

```jsx
<ProjectTimeline
  title="Development Journey"
  items={[
    {
      date: "January 2025",
      title: "Project Kickoff",
      description: "Initial planning and requirements gathering",
      status: "completed",
    },
    {
      date: "March 2025",
      title: "Development",
      description: "Implemented core components and features",
      status: "in-progress",
    },
    {
      date: "May 2025",
      title: "Launch",
      description: "Official launch and promotion",
      status: "planned",
    },
  ]}
/>
```

### ProjectFeatureShowcase

Displays project features in tabbed groups with optional images and status indicators.

```jsx
<ProjectFeatureShowcase
  title="Core Capabilities"
  groups={[
    {
      title: "UI Components",
      image: "/images/projects/example/ui-components.png",
      features: [
        {
          title: "Responsive Design",
          description: "All components are fully responsive",
          status: "implemented",
        },
        {
          title: "Themeable",
          description: "Components support light and dark mode",
          status: "in-progress",
        },
      ],
    },
    {
      title: "Developer Experience",
      features: [
        {
          title: "TypeScript Support",
          description: "Full TypeScript support with proper typing",
          status: "implemented",
        },
      ],
    },
  ]}
/>
```

### ProjectMetrics

Displays quantitative project metrics with optional progress indicators.

```jsx
<ProjectMetrics
  title="Project by the Numbers"
  metrics={[
    { label: "Components", value: "25+", icon: "🧩", progress: 80 },
    { label: "Code Coverage", value: "94%", icon: "✅", progress: 94 },
    { label: "Bundle Size", value: "45KB", icon: "📦", progress: 40 },
    { label: "Development Time", value: "3 months", icon: "⏱️" },
  ]}
/>
```

### ProjectChallengeCard

Highlights project challenges, solutions, and impacts with difficulty and domain indicators.

```jsx
<ProjectChallengeCard
  title="Performance Optimization"
  challenge="Initial component renders were slow on mobile devices."
  solution="Implemented React.memo and optimized re-renders."
  impact="Reduced Time to Interactive by 45%."
  difficulty="hard"
  domain="Performance"
/>
```

## Usage in MDX Files

To use these components in your project MDX files:

1. Make sure they're imported and registered in the MDX components configuration (already done in `src/components/mdx.tsx`).
2. Use them directly in your MDX files without any imports.
3. See the `Example.mdx` file for a complete example of how to use all components together.

## Styling

All components use Tailwind CSS for styling and are designed to work with both light and dark mode. They follow the project's design system and use the same color variables as the rest of the application.

## Accessibility

All components are designed with accessibility in mind and include appropriate ARIA attributes. They also provide visual indicators for different states and support keyboard navigation.
### ProjectVideoPlayer

Showcases MP4 or HLS assets with Vidstack controls, descriptive metadata, highlight chapters, captions, and an optional CTA.

```tsx
<ProjectVideoPlayer
  title="Design Review Walkthrough"
  description="A narrated tour across the new design system."
  src={{
    src: "/videos/design-review.mp4",
    type: "video/mp4",
  }}
  poster="/images/projects/design-review/poster.jpg"
  autoPlay={false}
  muted
  captions={{
    src: "/videos/design-review/captions.vtt",
    label: "English",
  }}
  chapters={[
    { time: 12, label: "Intro", description: "Brief context" },
    { time: 76, label: "Component upgrades" },
    { time: 142, label: "Results" },
  ]}
  cta={{ href: "https://example.com/demo", label: "Launch live demo" }}
/>
```

### ProjectCarousel

Creates a responsive Embla-powered carousel with optional autoplay, slide metadata, and a render-prop for bespoke slides.

```tsx
<ProjectCarousel
  autoPlay
  interval={5000}
  slides={[
    {
      src: "/images/projects/carousel/hero.jpg",
      alt: "Hero UI",
      title: "Reimagined dashboard",
      description: "Tiles, metrics, and personalized actions",
      badge: "v2.5",
      link: { href: "/projects/dashboard", label: "Read case study" },
    },
    {
      src: "/images/projects/carousel/mobile.jpg",
      alt: "Mobile view",
      title: "Mobile-first experience",
      description: "Gestures, offline mode, biometric auth",
    },
  ]}
/>
```

### ProjectTicker

Animates achievements, partner logos, or text snippets using Motion's `useAnimate`, respecting reduced-motion and offering pause-on-hover.
Supports optional `showLabels` and `size` props (`"md"`, `"lg"`, `"xl"`) to control how prominent each marquee tile appears.

```tsx
<ProjectTicker
  size="lg"
  showLabels
  speed={20}
  pauseOnHover
  variant="outline"
  items={[
    { label: "150k+ monthly users" },
    { label: "NPS +32", description: "after redesign" },
    { label: "SOC 2 Type II Ready" },
    {
      label: "Featured on Product Hunt",
      icon: "🔥",
    },
  ]}
/>
```
