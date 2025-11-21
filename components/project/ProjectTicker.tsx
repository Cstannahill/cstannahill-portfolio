"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimate, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export type ProjectTickerItem =
  | string
  | {
    id?: string;
    label?: string;
    description?: string;
    icon?: string;
    imageSrc?: string;
    imageAlt?: string;
  };

export interface ProjectTickerProps {
  items: ProjectTickerItem[];
  speed?: number;
  direction?: "left" | "right";
  gap?: number;
  pauseOnHover?: boolean;
  variant?: "solid" | "outline";
  className?: string;
  itemClassName?: string;
  /**
   * @deprecated Use `widthSize` instead.
   */
  size?: "md" | "lg" | "xl";
  widthSize?: "md" | "lg" | "xl";
  heightScale?: 1 | 1.5 | 2 | 2.5;
  showLabels?: boolean;
}

type ResolvedTickerItem = {
  key: string;
  label?: string;
  description?: string;
  icon?: string;
  imageSrc?: string;
  imageAlt?: string;
};

const sizeStyles: Record<
  NonNullable<ProjectTickerProps["size"]>,
  {
    padding: string;
    textSize: string;
    minWidthWithLabel: string;
    minWidthImageOnly: string;
    baseHeightRem: number;
  }
> = {
  md: {
    padding: "px-4 py-2",
    textSize: "text-sm",
    minWidthWithLabel: "min-w-[11rem]",
    minWidthImageOnly: "min-w-[6rem]",
    baseHeightRem: 4,
  },
  lg: {
    padding: "px-5 py-3",
    textSize: "text-base",
    minWidthWithLabel: "min-w-[14rem]",
    minWidthImageOnly: "min-w-[8rem]",
    baseHeightRem: 5,
  },
  xl: {
    padding: "px-6 py-4",
    textSize: "text-lg",
    minWidthWithLabel: "min-w-[18rem]",
    minWidthImageOnly: "min-w-[10rem]",
    baseHeightRem: 7,
  },
};

export function ProjectTicker({
  items,
  speed = 18,
  direction = "left",
  gap = 32,
  pauseOnHover = true,
  variant = "solid",
  className,
  itemClassName,
  size,
  widthSize,
  heightScale = 1,
  showLabels = true,
}: ProjectTickerProps) {
  const resolvedWidthSize = (widthSize ??
    size ??
    "md") as NonNullable<ProjectTickerProps["widthSize"]>;
  const shouldReduceMotion = useReducedMotion();
  const [scope, animate] = useAnimate();
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const sizeTokens = sizeStyles[resolvedWidthSize];
  const scaledHeight = sizeTokens.baseHeightRem * heightScale;

  const resolvedItems = useMemo<ResolvedTickerItem[]>(() => {
    return items.map((item, index) => {
      if (typeof item === "string") {
        return {
          key: `ticker-${index}`,
          label: item,
        };
      }

      return {
        key: item.id ?? `ticker-${index}`,
        label: item.label,
        description: item.description,
        icon: item.icon,
        imageSrc: item.imageSrc,
        imageAlt:
          item.imageAlt ?? (item.label ? `${item.label} preview` : "Ticker item"),
      };
    });
  }, [items]);

  useEffect(() => {
    if (!scope.current || shouldReduceMotion || resolvedItems.length === 0) {
      return;
    }

    const animation = animate(
      scope.current,
      {
        x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
      },
      {
        duration: speed,
        repeat: Infinity,
        ease: "linear",
      }
    );

    animationRef.current = animation;

    return () => {
      animation.stop();
      animationRef.current = null;
    };
  }, [
    animate,
    direction,
    resolvedItems.length,
    scope,
    speed,
    shouldReduceMotion,
  ]);

  useEffect(() => {
    if (
      !pauseOnHover ||
      !animationRef.current ||
      resolvedItems.length === 0
    ) {
      return;
    }

    if (isHovered) {
      animationRef.current.pause();
    } else if (!shouldReduceMotion) {
      animationRef.current.play();
    }
  }, [isHovered, pauseOnHover, shouldReduceMotion]);

  const tickerItems = useMemo(() => {
    // Duplicate items to create an infinite loop illusion
    return [...resolvedItems, ...resolvedItems];
  }, [resolvedItems]);

  if (resolvedItems.length === 0) {
    return (
      <div

        className={cn(
          "rounded-2xl border border-dashed border-border/70 bg-muted/30 px-6 py-4 text-sm text-muted-foreground",
          className
        )}
      >
        Add ticker items to bring this marquee to life.
      </div>
    );
  }

  return (
    <div
      style={{ height: "25vh" }}
      className={cn(
        "overflow-hidden rounded-2xl border border-border/70 bg-muted/40",
        variant === "solid" ? "bg-muted/60" : "bg-background/40",
        className
      )}
    >
      <motion.div
        ref={scope}
        onMouseEnter={() => pauseOnHover && setIsHovered(true)}
        onMouseLeave={() => pauseOnHover && setIsHovered(false)}
        style={{
          gap,
        }}
        className={cn(
          "flex w-[200%] items-center whitespace-nowrap px-6 py-4",
          itemClassName
        )}
        aria-live="off"
      >
        {tickerItems.map((item, index) => {
          const showLabelBlock = showLabels && !!item.label;
          const hasImage = Boolean(item.imageSrc);
          return (
            <div

              key={`${item.key}-dup-${index}`}
              className={cn(
                "relative flex items-center overflow-hidden rounded-[2rem] border transition-colors",
                showLabelBlock
                  ? sizeTokens.minWidthWithLabel
                  : sizeTokens.minWidthImageOnly,
                variant === "solid"
                  ? "border-transparent bg-background text-foreground"
                  : "border-border/60 bg-muted/40 text-foreground",
                hasImage && "border-border/40 text-white/40",
                itemClassName
              )}
              style={{ minHeight: `${scaledHeight * 3.25}vh` }}
            >
              {hasImage && (
                <>
                  <Image
                    src={item.imageSrc!}
                    alt={item.imageAlt ?? item.label ?? "Ticker image"}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10" />
                </>
              )}
              {(item.icon || showLabelBlock) && (
                <div
                  className={cn(
                    "relative z-10 flex w-full items-center gap-3",
                    sizeTokens.padding,
                    !showLabelBlock && "justify-center"
                  )}
                >
                  {item.icon && (
                    <span className="text-lg" aria-hidden="true">
                      {item.icon}
                    </span>
                  )}
                  {showLabelBlock && (
                    <span className="flex flex-col">
                      <span className={cn("font-semibold", sizeTokens.textSize)}>
                        {item.label}
                      </span>
                      {item.description && (
                        <span
                          className={cn(
                            "text-xs",
                            hasImage ? "text-white/80" : "text-muted-foreground"
                          )}
                        >
                          {item.description}
                        </span>
                      )}
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
