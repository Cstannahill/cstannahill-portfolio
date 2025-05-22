// components/content/MDXComponents.tsx
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

// Import components directly
import { ComponentShowcase } from "@/components/content/ComponentShowcase";
import { ProjectCard } from "@/components/content/ProjectCard";

// Import project components
import {
  ProjectChallengeCard,
  ProjectFeatureShowcase,
  ProjectMetrics,
  ProjectTechStack,
  ProjectTimeline,
} from "@/components/project";

// Import blog components
import { Callout } from "@/components/blog/Callout";
import { FeatureList } from "@/components/blog/FeatureList";
import { ProgressSection } from "@/components/blog/ProgressSection";
import { SkillCard } from "@/components/blog/SkillCard";
import { SkillCategory } from "@/components/blog/SkillCategory";
import { SummaryTable } from "@/components/blog/SummaryTable";

interface HeadingProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

const H1 = ({ children, id, className }: HeadingProps) => (
  <h1
    id={id}
    className={cn("mt-8 mb-4 text-4xl font-bold tracking-tight", className)}
  >
    {children}
    {id && (
      <a
        href={`#${id}`}
        className="ml-2 text-foreground opacity-0 transition-opacity hover:opacity-100 group-hover:opacity-100"
        aria-label={`Link to ${children}`}
      >
        #
      </a>
    )}
  </h1>
);

const H2 = ({ children, id, className }: HeadingProps) => (
  <h2
    id={id}
    className={cn("mt-8 mb-4 text-3xl font-bold tracking-tight", className)}
  >
    {children}
    {id && (
      <a
        href={`#${id}`}
        className="ml-2 text-foreground opacity-0 transition-opacity hover:opacity-100 group-hover:opacity-100"
        aria-label={`Link to ${children}`}
      >
        #
      </a>
    )}
  </h2>
);

const H3 = ({ children, id, className }: HeadingProps) => (
  <h3
    id={id}
    className={cn("mt-8 mb-4 text-2xl font-bold tracking-tight", className)}
  >
    {children}
    {id && (
      <a
        href={`#${id}`}
        className="ml-2 text-foreground opacity-0 transition-opacity hover:opacity-100 group-hover:opacity-100"
        aria-label={`Link to ${children}`}
      >
        #
      </a>
    )}
  </h3>
);

interface MDXImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const MDXImage = ({ src, alt, width, height, className }: MDXImageProps) => {
  return (
    <div className="my-8 overflow-hidden rounded-lg">
      <Image
        src={src}
        alt={alt}
        width={width || 1200}
        height={height || 630}
        className={cn("w-full object-cover", className)}
      />
    </div>
  );
};

interface MDXLinkProps {
  href: string;
  children: ReactNode;
}

const MDXLink = ({ href, children }: MDXLinkProps) => {
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-4"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className="text-primary underline underline-offset-4">
      {children}
    </Link>
  );
};

// Export the components directly without wrappers
export const MDXComponents = {
  // Custom components - these should be client components themselves
  ComponentShowcase,
  ProjectCard,
  ProjectChallengeCard,
  ProjectFeatureShowcase,
  ProjectMetrics,
  ProjectTechStack,
  ProjectTimeline,
  Callout,
  FeatureList,
  ProgressSection,
  SkillCard,
  SkillCategory,
  SummaryTable,

  // HTML elements
  h1: H1,
  h2: H2,
  h3: H3,
  h4: (props: HeadingProps) => (
    <h4 className="mt-8 mb-4 text-xl font-bold tracking-tight" {...props} />
  ),
  h5: (props: HeadingProps) => (
    <h5 className="mt-8 mb-4 text-lg font-bold tracking-tight" {...props} />
  ),
  h6: (props: HeadingProps) => (
    <h6 className="mt-8 mb-4 text-base font-bold tracking-tight" {...props} />
  ),
  img: MDXImage,
  a: MDXLink,
  p: ({ children, className }: { children: ReactNode; className?: string }) => {
    // Check if children contains any paragraph elements to avoid nesting
    const hasNestedP = React.Children.toArray(children).some(
      (child) =>
        React.isValidElement(child) &&
        (child.type === "p" ||
          (typeof child.type === "string" &&
            child.type.toLowerCase() === "p") ||
          (typeof child.type === "function" && child.type.name === "p"))
    );

    // If nested paragraph is detected, use a div instead
    if (hasNestedP) {
      return <div className={cn("mb-4 leading-7", className)}>{children}</div>;
    }

    // Regular case - wrap in a paragraph
    return <p className={cn("mb-4 leading-7", className)}>{children}</p>;
  },
  ul: ({
    children,
    className,
  }: {
    children: ReactNode;
    className?: string;
  }) => <ul className={cn("mb-4 ml-6 list-disc", className)}>{children}</ul>,
  ol: ({
    children,
    className,
  }: {
    children: ReactNode;
    className?: string;
  }) => <ol className={cn("mb-4 ml-6 list-decimal", className)}>{children}</ol>,
  li: ({
    children,
    className,
  }: {
    children: ReactNode;
    className?: string;
  }) => <li className={cn("mb-2", className)}>{children}</li>,
  blockquote: ({
    children,
    className,
  }: {
    children: ReactNode;
    className?: string;
  }) => (
    <blockquote
      className={cn(
        "mb-4 border-l-4 border-muted pl-4 italic text-foreground",
        className
      )}
    >
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-8 border-muted" />,
  code: ({
    children,
    className,
  }: {
    children: ReactNode;
    className?: string;
  }) => (
    <code
      className={cn(
        "rounded-md bg-muted px-1.5 py-0.5 font-mono text-sm",
        className
      )}
    >
      {children}
    </code>
  ),
  pre: ({
    children,
    className,
  }: {
    children: ReactNode;
    className?: string;
  }) => (
    <pre
      className={cn(
        "mb-4 overflow-x-auto rounded-lg bg-secondary p-4 font-mono text-sm",
        className
      )}
    >
      {children}
    </pre>
  ),
  table: ({
    children,
    className,
  }: {
    children: ReactNode;
    className?: string;
  }) => (
    <div className="mb-4 overflow-x-auto">
      <table className={cn("w-full border-collapse", className)}>
        {children}
      </table>
    </div>
  ),
  th: ({
    children,
    className,
  }: {
    children: ReactNode;
    className?: string;
  }) => (
    <th
      className={cn(
        "border border-muted px-4 py-2 text-left font-bold",
        className
      )}
    >
      {children}
    </th>
  ),
  td: ({
    children,
    className,
  }: {
    children: ReactNode;
    className?: string;
  }) => (
    <td className={cn("border border-muted px-4 py-2", className)}>
      {children}
    </td>
  ),
};
