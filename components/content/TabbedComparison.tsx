"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface ModelSummarySection {
    standardSummary?: string;
    keyPoints?: string[];
    impactAreas?: string[];
}

export interface TabbedComparisonProps {
    summaries: {
        [modelName: string]: ModelSummarySection | undefined;
    };
    className?: string;
}

// The fixed, user-specified display order
const MODEL_ORDER = [
    "Anthropic Claude Sonnet 4.5",
    "Anthropic Claude Haiku 3.5",
    "OpenAI GPT-5 Nano",
    "OpenAI GPT-5 Mini",
    "DeepSeek V3.1 (via OpenRouter)",
];

const MODEL_LABELS: Record<string, string> = {
  "Anthropic Claude Sonnet 4.5": "Claude Sonnet 4.5",
  "Anthropic Claude Haiku 3.5": "Claude Haiku 3.5",
  "OpenAI GPT-5 Nano": "GPT-5 Nano",
  "OpenAI GPT-5 Mini": "GPT-5 Mini",
  "DeepSeek V3.1 (via OpenRouter)": "DeepSeek V3.1",
};

interface SectionProps {
    title: string;
    content?: string | string[] | undefined;
    type: "text" | "list";
    emptyMessage: string;
}

const Section = ({ title, content, type, emptyMessage }: SectionProps) => {
    const isEmpty =
        content === undefined ||
        (typeof content === "string" && content.trim().length === 0) ||
        (Array.isArray(content) && content.length === 0);

    return (
        <div className="space-y-2">
            <h4 className="text-sm font-semibold tracking-wide text-foreground/80 uppercase">
                {title}
            </h4>
            {isEmpty ? (
                <p className="text-sm italic text-muted-foreground">{emptyMessage}</p>
            ) : type === "text" && typeof content === "string" ? (
                <p className="text-sm leading-relaxed whitespace-pre-line">{content}</p>
            ) : (
                <ul className="ml-5 list-disc space-y-1">
                    {(content as string[]).map((item, idx) => (
                        <li key={idx} className="text-sm leading-snug">
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export const TabbedComparison: React.FC<TabbedComparisonProps> = ({
    summaries,
    className,
}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={cn("my-8 rounded-lg border border-border bg-card shadow-sm", className)}>
            {/* Tab headers */}
            <div className="flex flex-wrap gap-1 border-b border-border bg-muted/40 p-2 rounded-t-lg">
                {MODEL_ORDER.map((model, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                        <button
                            key={model}
                            onClick={() => setActiveIndex(idx)}
                            className={cn(
                                "relative rounded-md px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60",
                                isActive
                                    ? "bg-primary text-primary-foreground shadow-sm"
                                    : "bg-background/60 text-foreground/70 hover:bg-background/80 hover:text-foreground border border-transparent"
                            )}
                            aria-selected={isActive}
                            role="tab"
                            aria-controls={`tab-panel-${idx}`}
                            id={`tab-${idx}`}
                        >
                            {MODEL_LABELS[model] ?? model}
                        </button>
                    );
                })}
            </div>

            {/* Panels */}
            <div className="p-5" role="tabpanel" id={`tab-panel-${activeIndex}`} aria-labelledby={`tab-${activeIndex}`}>
                {(() => {
                    const modelName = MODEL_ORDER[activeIndex];
                    const summary = summaries[modelName];

                    if (!summary) {
                        return (
                            <div className="text-sm italic text-muted-foreground">
                                No summary is available for the selected model.
                            </div>
                        );
                    }

                    return (
                        <div className="grid gap-6">
                            <Section
                                title="Standard Summary"
                                content={summary.standardSummary}
                                type="text"
                                emptyMessage="No Standard Summary available."
                            />
                            <Section
                                title="Key Points"
                                content={summary.keyPoints}
                                type="list"
                                emptyMessage="No Key Points available."
                            />
                            <Section
                                title="Impact Areas"
                                content={summary.impactAreas}
                                type="list"
                                emptyMessage="No Impact Areas available."
                            />
                        </div>
                    );
                })()}
            </div>
        </div>
    );
};

export default TabbedComparison;
