// components/shared/SectionHeading.tsx
import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  children?: ReactNode;
  gradient?: boolean;
}

export const SectionHeading = ({
  title,
  subtitle,
  alignment = "center",
  children,
  gradient = false,
}: SectionHeadingProps) => {
  return (
    <div className={`mb-8 text-${alignment}`}>
      <h2
        className={`text-3xl font-bold ${
          gradient
            ? "bg-gradient-to-r from-accent-light via-accent to-primary bg-clip-text text-transparent"
            : ""
        } mb-4`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-foreground max-w-2xl mx-auto">{subtitle}</p>
      )}
      {children}
    </div>
  );
};
