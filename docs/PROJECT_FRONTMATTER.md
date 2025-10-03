# Project Frontmatter Fields

## Overview

This document describes all available frontmatter fields for project MDX files.

---

## Required Fields

### `title`

- **Type:** `string`
- **Required:** Yes
- **Description:** The project title
- **Example:** `"FARM Framework"`

---

## Optional Fields

### Basic Information

#### `date` or `publishedAt`

- **Type:** `string` (ISO date format)
- **Required:** No
- **Description:** Publication date of the project
- **Example:** `"2024-09-15"`

#### `excerpt` or `summary`

- **Type:** `string`
- **Required:** No
- **Description:** Short description of the project (used in cards and meta tags)
- **Example:** `"A full-stack framework for AI-powered web applications"`

---

### Categorization

#### `tags`

- **Type:** `string[]`
- **Required:** No
- **Description:** General tags for the project
- **Example:** `["AI", "Full-Stack", "Framework"]`

#### `technologies`

- **Type:** `string[]`
- **Required:** No
- **Description:** Technologies used in the project (displayed as badges)
- **Example:** `["FastAPI", "React", "MongoDB", "Ollama"]`

---

### Images

#### `coverImage`

- **Type:** `string`
- **Required:** No
- **Description:** Path to the main cover image
- **Example:** `"/images/projects/farm-framework-cover.png"`

#### `images`

- **Type:** `string[]`
- **Required:** No
- **Description:** Array of image paths (first image used as cover if `coverImage` not set)
- **Example:** `["/images/projects/farm-1.png", "/images/projects/farm-2.png"]`

#### `ogImage`

- **Type:** `string`
- **Required:** No
- **Description:** Open Graph image for social media sharing
- **Example:** `"/og-images/farm-framework.png"`

---

### Project Links

#### `siteUrl`

- **Type:** `string`
- **Required:** No
- **Description:** URL to the live production website
- **Displays As:** "Live Site" button (primary styled)
- **Example:** `"https://farmframework.dev"`

#### `docsUrl`

- **Type:** `string`
- **Required:** No
- **Description:** URL to the documentation website
- **Displays As:** "Documentation" button (primary styled with book icon)
- **Example:** `"https://docs.farmframework.dev"`

#### `demoUrl`

- **Type:** `string`
- **Required:** No
- **Description:** URL to a demo/preview version
- **Displays As:** "View Demo" button (primary styled)
- **Example:** `"https://demo.farmframework.dev"`

#### `npmUrl`

- **Type:** `string`
- **Required:** No
- **Description:** URL to NPM package page
- **Displays As:** "NPM Package" button (red themed with NPM logo)
- **Example:** `"https://www.npmjs.com/package/@farm/framework"`

#### `pypiUrl`

- **Type:** `string`
- **Required:** No
- **Description:** URL to PyPI package page
- **Displays As:** "PyPI Package" button (blue themed with PyPI logo)
- **Example:** `"https://pypi.org/project/farm-framework/"`

#### `sourceUrl`

- **Type:** `string`
- **Required:** No
- **Description:** URL to source code repository
- **Displays As:** "Source Code" button (neutral styled with GitHub logo)
- **Example:** `"https://github.com/username/farm-framework"`

---

### Display Options

#### `featured`

- **Type:** `boolean`
- **Required:** No
- **Description:** Whether to feature this project on the home page
- **Example:** `true`

---

## Button Display Priority

When multiple URLs are provided, buttons display in this order:

1. **Live Site** (`siteUrl`) - Primary button
2. **Documentation** (`docsUrl`) - Primary button with book icon
3. **View Demo** (`demoUrl`) - Primary button
4. **NPM Package** (`npmUrl`) - Red themed button
5. **PyPI Package** (`pypiUrl`) - Blue themed button
6. **Source Code** (`sourceUrl`) - Secondary button

---

## Complete Example

```yaml
---
title: "FARM Framework"
publishedAt: "2024-09-15"
excerpt: "Full-stack framework for building AI-powered web applications with zero-cost local development"
summary: "FARM Framework combines FastAPI, React, and MongoDB with Ollama for seamless AI integration"
tags: ["AI", "Full-Stack", "Framework", "Open Source"]
technologies: ["FastAPI", "React", "MongoDB", "Ollama", "TypeScript", "Python"]
featured: true
images:
  - "/images/projects/farm-framework-hero.png"
  - "/images/projects/farm-framework-dashboard.png"
ogImage: "/og-images/farm-framework.png"
siteUrl: "https://farmframework.dev"
docsUrl: "https://docs.farmframework.dev"
demoUrl: "https://demo.farmframework.dev"
npmUrl: "https://www.npmjs.com/package/@farm/cli"
pypiUrl: "https://pypi.org/project/farm-framework/"
sourceUrl: "https://github.com/username/farm-framework"
---
```

---

## Button Styling Reference

### Primary Buttons (Live Site, Demo)

- Background: Primary color
- Text: White
- Hover: Slightly darker primary
- Icon: ExternalLink

### NPM Button

- Background: Dark red with transparency
- Border: Red with transparency
- Text: Red-400
- Icon: NPM logo SVG

### PyPI Button

- Background: Dark blue with transparency
- Border: Blue with transparency
- Text: Blue-400
- Icon: PyPI logo SVG

### Source Code Button

- Background: Background color
- Border: Border color
- Text: Foreground color
- Hover: Muted background
- Icon: GitHub logo

---

## Notes

- All URLs should be fully qualified (include `https://`)
- At least one link type is recommended for each project
- If no images are provided, a default OG image will be used
- The first image in the `images` array is used as the cover image if `coverImage` is not set
- Links open in new tabs with `rel="noopener noreferrer"` for security
