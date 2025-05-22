# Portfolio Style Guide (Updated with Mobile Focus)

This document serves as a comprehensive style reference for the portfolio site migration from Once UI to shadcn/ui and Tailwind CSS. It captures visual design elements, component styles, and responsive behaviors with particular attention to mobile experience, which is a primary focus of the migration.

## Table of Contents

- [Colors](#colors)
- [Typography](#typography)
- [Spacing](#spacing)
- [Components](#components)
  - [Layout Components](#layout-components)
  - [UI Components](#ui-components)
  - [Content Components](#content-components)
- [Responsive Patterns](#responsive-patterns)
- [Page Layouts](#page-layouts)
- [Mobile-Specific Guidelines](#mobile-specific-guidelines)

## Colors

The site uses a dark theme with high contrast text and accent colors for emphasis.

### Primary Colors

- Background: #121212 (Primary black) - Main background
- Card Background: #1c1c1c or #27272a (Slightly lighter than primary black)
- Accent: #f59e0b (Amber/Gold) - Used for job titles, highlight text, and CTAs

### Neutral Colors

- Foreground/Text: #ffffff (White)
- Muted Text: #a1a1aa (Light gray)
- Border: #3f3f46 (Dark gray)

### Accent Colors

- Blue: #3b82f6 - Used for links and section headings
- Gold/Amber: #f59e0b - Used for job titles and CTA buttons
- Green: #22c55e - Used for GitHub contribution graphics

## Typography

The site uses a clean, modern sans-serif typography system with clear hierarchy.

### Font Families

- Heading: Sans-serif (appears to be Inter or similar)
- Body: Sans-serif (same as heading font)
- Monospace: For code snippets (when applicable)

### Font Sizes (Desktop)

- Heading 1 (Name): 3.5rem (56px)
- Heading 2 (Section titles): 2.5rem (40px)
- Heading 3 (Card titles): 1.5rem (24px)
- Subtitle (Role/position): 1.25rem (20px)
- Body: 1rem (16px)
- Small: 0.875rem (14px)

### Font Sizes (Mobile)

- Heading 1 (Name): 2.5rem (40px)
- Heading 2 (Section titles): 1.75rem (28px)
- Heading 3 (Card titles): 1.25rem (20px)
- Subtitle (Role/position): 1.125rem (18px)
- Body: 1rem (16px)
- Small: 0.875rem (14px)

### Font Weights

- Regular: 400 - For body text and descriptions
- Medium: 500 - For navigation and subtitles
- Bold: 700 - For headings and emphasized text
- Extra Bold: 800 - For name and major section headings

## Spacing

### Padding/Margin Scale

- XS: 0.5rem (8px)
- S: 1rem (16px)
- M: 1.5rem (24px)
- L: 2rem (32px)
- XL: 3rem (48px)
- 2XL: 4rem (64px)

### Container Widths

- Default: 100% with max-width of 1280px
- Narrow: 100% with max-width of 768px
- Wide: 100% with max-width of 1536px

### Vertical Rhythm

- Section spacing: 4rem (64px) on desktop, 3rem (48px) on mobile
- Component spacing: 1.5rem-2rem (24-32px) on desktop, 1rem-1.5rem (16-24px) on mobile
- Card internal spacing: 1.5rem (24px) on desktop, 1rem (16px) on mobile

## Components

### Layout Components

#### Header

- Dark background (#121212)
- Full width with container centered
- Fixed position on scroll (on desktop)
- Height: ~70px on desktop, ~60px on mobile
- Logo/brand on left side
- Navigation links centered or right-aligned
- **Mobile behavior:**
  - Collapses to hamburger menu on small screens
  - Menu should overlay content when expanded
  - Transition animation for menu open/close
  - Tappable areas minimum 44px height for accessibility

#### Footer

- Dark background (slightly lighter than primary)
- Full width with container centered
- Padding: 3rem top/bottom on desktop, 2rem on mobile
- Social links with icons
- Copyright information
- **Mobile behavior:**
  - Stacked layout rather than horizontal splits
  - Increased spacing between clickable elements (minimum 12px)
  - Simplified layout with essential links only

#### Navigation

- Text links with hover/active states
- Current page indicator
- **Mobile behavior:**
  - Full-width overlay menu when expanded
  - Large, easy-to-tap targets (minimum 44px height)
  - Clear close button (X) on expanded menu
  - Smooth animation for menu transitions

### UI Components

#### Buttons

##### Primary button

- Amber/gold background (#f59e0b)
- White text
- Rounded corners (~0.375rem/6px)
- Padding: ~0.5rem 1rem (8px 16px) on desktop, slightly increased touch target on mobile
- Hover effect (darkens)
- **Mobile implementation:** Maintains same styling but with full width in some contexts
- Example: "Schedule a meeting" button on homepage

##### Secondary button

- Transparent background with border
- White or amber text
- Rounded corners (~0.375rem/6px)
- Border: #3f3f46 (Dark gray)
- **Mobile implementation:** Maintains styling, properly sized for touch
- Examples: GitHub, LinkedIn, Email buttons

##### Language selector

- Similar to secondary button style
- Text: "English"
- **Mobile implementation:** Positioned under profile, maintains styling from desktop

#### Cards

##### Project cards

- Dark background (#1c1c1c or #27272a)
- Subtle border or shadow
- Rounded corners (~0.5rem/8px)
- Consistent padding (~1.5rem/24px on desktop, 1rem/16px on mobile)
- Image area at top (screenshot of project)
- Title (project name) with larger, bold font
- Description with regular weight font
- "View Project →" link at bottom
- **Mobile implementation:**
  - Full-width, stacked vertically
  - Maintains same internal structure
  - Images scale appropriately
  - Text layout maintains hierarchy

##### Work experience cards

- Similar styling to project cards
- Company/role heading
- Job title in amber/gold color
- Duration/date on right side (in line with company on mobile)
- Description text below
- **Mobile implementation:**
  - Date/duration positioned on right side
  - Content stacks vertically with consistent spacing
  - Maintains color coding for job titles
  - May include images of related work

#### Social Links

- Appear in header area and footer
- GitHub, LinkedIn, Email icons
- Bordered button style
- Rounded corners
- **Mobile implementation:**
  - Maintains styling from desktop
  - Properly sized for touch targets
  - Positioned below profile information

#### Tech/Skill Tags

- Various colored backgrounds for different technologies
- Text in contrasting color (usually white)
- Small, compact size
- Rounded corners
- **Mobile implementation:**
  - Multi-row grid layout
  - Maintain brand colors
  - Readable size on mobile
  - Example: TypeScript, JavaScript, React, etc. tags shown on README page

### Content Components

#### Hero Section

- Large circular profile image
- Name in very large font ("Christian Tannahill")
- Title/Role underneath in slightly smaller font
- Location indicator with icon
- Social links below
- Introduction paragraph with 1-2 sentences
- **Mobile implementation:**
  - Stacked layout (same as desktop)
  - Circular profile image maintained but slightly smaller
  - Name and role text properly sized
  - Social links and buttons sized for touch
  - Schedule meeting CTA button with calendar icon

#### Project Gallery

- Cards arranged in vertical stack on mobile (3 columns on desktop)
- Equal spacing between cards (approximately 1.5rem/24px)
- Each card has consistent height/structure
- **Mobile implementation:**
  - Single column of full-width cards
  - Pagination indicators (dots) for scrolling through project images
  - Date shown below project title
  - Tech stack tags shown as pills
  - "View Project →" link on each card

#### Work Experience

- Vertical layout for jobs
- Company name as heading
- Job title in amber/gold color
- Date range on right side
- Description bullets/paragraphs below
- Visual evidence (screenshots) where applicable
- **Mobile implementation:**
  - Maintains vertical structure
  - Dates positioned on right side
  - Job titles in amber/gold maintain color coding
  - Full-width images of related projects/apps
  - Proper spacing between entries

## Responsive Patterns

### Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
- Large Desktop: > 1280px

### Mobile Patterns

- **Navigation:** Hamburger menu that expands to full-screen overlay
- **Layout:** Single column layouts throughout
- **Typography:** Reduced font sizes while maintaining hierarchy
- **Cards:** Full-width, stacked vertically
- **Images:** Maintain aspect ratios, scale down appropriately
- **Touch targets:** Minimum size of 44x44px for all interactive elements
- **Spacing:** Reduced overall spacing while maintaining readability
- **Padding:** Consistent page padding (16px - 24px) on edges

### Tablet Patterns

- **Navigation:** May use hamburger or simplified horizontal nav
- **Layout:** Mix of single and multi-column layouts (usually 2 columns)
- **Cards:** 2-column grid for project cards
- **Spacing:** Intermediate spacing between mobile and desktop

## Page Layouts

### Home Page

- Hero section with profile image, name, and brief intro
- Featured projects section (3 columns on desktop, 1 on mobile)
- Skills showcase or work experience section
- **Mobile adaptations:**
  - Single column stacked layout
  - Reduced vertical spacing between sections
  - Full-width components

### Blog Index

- Page title and optional introduction
- List of blog posts with titles, dates, and excerpts
- Card-based layout (3 columns on desktop, 1 on mobile)
- **Mobile adaptations:**
  - Stacked single column layout
  - Compact date and metadata presentation

### Project/Work Index

- Page title and introduction
- Grid of project cards (3 columns on desktop, 1 on mobile)
- Filter options if applicable
- **Mobile adaptations:**
  - Filters may collapse into dropdown
  - Single column stacked layout

### Content Pages (Blog Posts, Project Details)

- Title and metadata at top
- Full-width content area with appropriate typography
- Related content at bottom
- **Mobile adaptations:**
  - Reduced horizontal padding
  - Adjusted image sizing
  - Simplified related content presentation

## Mobile-Specific Guidelines

Based on analysis of the current mobile implementation (as shown in the screenshots), these guidelines address specific patterns to maintain and issues to improve:

### Current Mobile Implementation

1. **Header & Navigation:**

   - Currently uses a horizontal navigation bar with text labels
   - Active page is indicated with a darker background pill
   - Navigation bar has a semi-transparent dark background
   - Time/clock is displayed in the upper right corner

2. **Content Organization:**
   - Single column vertical layout throughout
   - Project cards stack vertically at full width
   - Tech badges display in multi-row grids
   - Tables maintain their structure but are scaled down
3. **Typography Implementation:**

   - Large headings (approx. 2rem/32px) for page titles
   - Consistent type hierarchy maintained from desktop
   - Job titles and accents use amber/gold color consistently
   - Body text appears to be 16px (readable but could be larger)

4. **Interactive Elements:**
   - "View Project →" links on project cards
   - Social media and contact buttons
   - Tech badges and tags with colored backgrounds
   - Tab-style navigation for content sections

### Critical Mobile Issues to Address

1. **Navigation Improvements:**

   - **Current issue:** Navigation becomes crowded on smaller screens
   - **Solution:** Implement collapsible hamburger menu for small screens
   - Ensure all navigation items have adequate touch targets (44x44px minimum)
   - Maintain the current active page indicator styling but enhance touch area

2. **Content Width & Scrolling:**

   - **Current issue:** Some tables and grids may cause horizontal scrolling
   - **Solution:** Ensure all containers use 100% width with appropriate padding (16-24px)
   - Convert wide tables to cards or accordion layouts on mobile
   - Use responsive alternatives for data visualization
   - Set all containers to use relative units (%, rem) instead of fixed dimensions

3. **Typography Refinements:**

   - **Current issue:** Some text could benefit from increased size and spacing
   - **Solution:** Implement a fluid typography system using Tailwind's responsive utilities
   - Increase body text to minimum 16px with 1.5 line height
   - Add more spacing between paragraphs (min 1rem)
   - Maintain current heading sizes but ensure proper scaling across all devices

4. **Touch Optimization:**

   - **Current issue:** Some elements may have insufficient touch areas
   - **Solution:** Expand all interactive elements to minimum 44x44px touch area
   - Increase spacing between clickable elements to minimum 12px
   - Add visible active/pressed states for all interactive elements
   - Make entire project card clickable, not just the "View Project" link

5. **Card & Component Layouts:**

   - **Current issue:** Cards and components maintain desktop structure at smaller size
   - **Solution:** Redesign card layouts specifically for mobile
   - Increase padding within cards to 16px (currently looks smaller)
   - Optimize image display for variable screen widths
   - Create mobile-specific variations of interactive components

6. **Content Prioritization:**

   - **Current issue:** All content displays in same order as desktop
   - **Solution:** Prioritize essential content and actions for mobile users
   - Use progressive disclosure for secondary information
   - Implement "show more" patterns for lengthy content sections
   - Consider different information density for mobile vs. desktop

7. **Tech Tag Grids:**
   - **Current issue:** Multi-column tech grids may crowd small screens
   - **Solution:** Reduce number of columns to 3-4 on mobile
   - Slightly increase the size of tech tags for better tappability
   - Consider horizontally scrolling tech tag containers as alternative
   - Maintain current color/contrast of tech tags

## Implementation Strategy

Based on the mobile screenshots and desktop comparison, here's the recommended approach for rebuilding the site with shadcn/ui and Tailwind CSS:

### Navigation & Header

1. **Desktop Navigation:**
   - Implement a centered navigation bar using Tailwind's flex utilities
   - Use shadcn/ui's Button component with custom styling for nav items
   - Highlight active page with a darker background pill
2. **Mobile Navigation Improvements:**
   - **Current state:** Horizontal navigation bar that may be difficult to use on very small screens
   - **Recommended approach:** Maintain horizontal nav bar for tablets, but implement a hamburger menu for phone-sized screens
   - Create a sliding drawer navigation using shadcn/ui's Sheet component
   - Ensure touch targets are minimum 44px height

### Component Strategy

1. **Cards & Container Components:**

   - Use shadcn/ui Card component as the base for all project and work cards
   - Customize with Tailwind's dark theme colors and proper spacing
   - Implement responsive padding using Tailwind's responsive modifiers:

   ```
     jsx
     <div className="p-4 md:p-6"> {/* 16px padding on mobile, 24px on tablet+ */}
   ```

2. **Typography System:**

   - Use shadcn/ui's typography components for consistent styling
   - Implement a fluid typography scale with Tailwind's responsive text classes

   ```jsx
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
    <p className="text-base md:text-lg leading-relaxed">
   ```

3. **Technology Tags:**

   - Create a custom Tag component using shadcn/ui's Badge as a base
   - Add brand-specific colors via Tailwind configuration
   - Ensure proper spacing in grid layouts on mobile:

````jsx
   <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
   ```

4. **Button System:**
 - Use shadcn/ui Button with variants for primary and secondary styles
 - Ensure proper sizing for mobile:
   ```
   jsx
   <Button className="h-11 md:h-10 w-full md:w-auto" variant="default">
   ```

### Mobile-First Best Practices

1. **Start With Mobile Layouts:**

 - Begin by designing for smallest screens, then enhance for larger viewports
 - Use min-width media queries via Tailwind's responsive prefixes (sm:, md:, lg:)
 - Test on actual mobile devices throughout development

2. **Touch Optimization:**

 - Increase clickable areas for all interactive elements
 - Add proper spacing between interactive elements
 - Use active states to provide visual feedback

3. **Performance Considerations:**

 - Optimize image loading with Next.js Image component
 - Implement progressive loading techniques
 - Minimize JavaScript bundle size

4. **Content Strategy:**
 - Prioritize critical content for mobile users
 - Use progressive disclosure for secondary information
 - Consider content reordering for better mobile experience

### Testing Protocol

1. **Device Testing Matrix:**

 - Small phone (320px - 375px width)
 - Standard phone (390px - 428px)
 - Tablet (768px - 1024px)
 - Desktop (1024px+)

2. **Accessibility Checks:**

 - Ensure color contrast meets WCAG AA standards
 - Verify all interactive elements have accessible names
 - Test keyboard navigation
 - Validate with automated tools

3. **Performance Metrics:**
 - Target mobile-first Lighthouse scores above 90
 - Monitor Core Web Vitals (LCP, FID, CLS)
 - Test loading behavior on slower networks

---

This style guide provides a comprehensive reference for rebuilding the portfolio with shadcn/ui and Tailwind CSS, with special attention to mobile responsiveness. Follow these guidelines to ensure a consistent, high-quality user experience across all devices.
````
