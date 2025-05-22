// components/content/ComponentShowcase.tsx
"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ComponentShowcaseProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function ComponentShowcase({
  title,
  children,
  className,
}: ComponentShowcaseProps) {
  return (
    <div className={cn("my-8", className)}>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {children}
      </div>
    </div>
  );
}
