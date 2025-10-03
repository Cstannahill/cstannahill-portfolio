// components/projects/ProjectFeatureShowcase.tsx
"use client";

import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface FeatureItemProps {
  title: string;
  description: string;
  icon?: string;
  status?: "implemented" | "in-progress" | "planned";
  className?: string;
}

export function FeatureItem({
  title,
  description,
  icon,
  status = "implemented",
  className,
}: FeatureItemProps) {
  const statusClasses = {
    implemented: "text-green-400 dark:text-green-400",
    "in-progress": "text-blue-400 dark:text-blue-400",
    planned: "text-amber-400 dark:text-amber-400",
  };

  const statusIcons = {
    implemented: (
      <CheckCircle
        className={cn("h-5 w-5 mr-2 flex-shrink-0", statusClasses[status])}
      />
    ),
    "in-progress": (
      <div
        className={cn(
          "h-5 w-5 mr-2 flex-shrink-0 animate-pulse rounded-full",
          statusClasses[status]
        )}
      ></div>
    ),
    planned: (
      <div
        className={cn(
          "h-5 w-5 mr-2 flex-shrink-0 border-2 rounded-full",
          statusClasses[status]
        )}
      ></div>
    ),
  };

  return (
    <li className={cn("flex items-start mb-4", className)}>
      {statusIcons[status]}
      <div>
        {" "}
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-foreground">{description}</p>
      </div>
    </li>
  );
}

interface FeatureGroupProps {
  title: string;
  features: FeatureItemProps[];
  image?: string;
  className?: string;
}

interface ProjectFeatureShowcaseProps {
  title?: string;
  groups?: FeatureGroupProps[];
  // Legacy prop shape used in older MDX files
  features?: Array<{
    title: string;
    description?: string;
    icon?: string;
    highlights?: string[];
    image?: string;
  }>;
  className?: string;
}

export function ProjectFeatureShowcase({
  title = "Key Features",
  groups,
  features,
  className,
}: ProjectFeatureShowcaseProps) {
  // Normalize incoming props: prefer `groups`, fall back to legacy `features` shape
  const normalizedGroups: FeatureGroupProps[] =
    groups && groups.length > 0
      ? groups
      : (features || []).map((f) => ({
        title: f.title,
        image: f.image,
        features: (f.highlights || []).map((h) => ({
          title: h,
          description: f.description || "",
        })),
      }));

  // Guard: if there are no groups to show, render nothing
  if (!normalizedGroups || normalizedGroups.length === 0) return null;

  const [activeTab, setActiveTab] = useState(
    normalizedGroups[0]?.title || ""
  );

  return (
    <div className={cn("my-6", className)}>
      {" "}
      <h2 className="text-xl font-bold mb-3 flex items-center">
        <span className="mr-2">✨</span>
        {title}
      </h2>
      <Tabs
        defaultValue={normalizedGroups[0]?.title}
        className="border border-border rounded-lg bg-card/50 dark:bg-card/30 overflow-hidden"
        onValueChange={setActiveTab}
      >
        <TabsList className="w-full border-b border-border bg-muted/50 rounded-t-lg rounded-b-none h-auto p-0 flex flex-wrap">
          {normalizedGroups.map((group) => (
            <TabsTrigger
              key={group.title}
              value={group.title}
              className={cn(
                "data-[state=active]:bg-background py-3 px-4 flex-grow",
                normalizedGroups.length > 3
                  ? "flex-basis-1/2 md:flex-basis-1/3 lg:flex-basis-1/4"
                  : ""
              )}
            >
              {group.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {normalizedGroups.map((group) => (
          <TabsContent key={group.title} value={group.title} className="m-0">
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ul className="space-y-2">
                  {group.features.map((feature, index) => (
                    <FeatureItem
                      key={index}
                      title={feature.title}
                      description={feature.description}
                      icon={feature.icon}
                      status={feature.status}
                    />
                  ))}
                </ul>
              </div>

              {group.image && (
                <div className="relative h-60 md:h-auto rounded-md overflow-hidden border border-border">
                  <Image
                    src={group.image}
                    alt={`${group.title} features`}
                    className="object-cover"
                    fill
                  />
                </div>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
