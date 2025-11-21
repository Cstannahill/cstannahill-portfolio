"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

export type ProjectCarouselSlide = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  link?: {
    href: string;
    label?: string;
  };
  badge?: string;
};

export interface ProjectCarouselProps {
  slides: ProjectCarouselSlide[];
  autoPlay?: boolean;
  interval?: number;
  showIndicators?: boolean;
  aspectRatio?: string;
  className?: string;
  renderSlideContent?: (
    slide: ProjectCarouselSlide,
    index: number
  ) => React.ReactNode;
  onSlideChange?: (index: number) => void;
}

export function ProjectCarousel({
  slides,
  autoPlay = true,
  interval = 4500,
  showIndicators = true,
  aspectRatio = "16 / 9",
  className,
  renderSlideContent,
  onSlideChange,
}: ProjectCarouselProps) {
  const autoplayPlugin = useMemo(
    () =>
      Autoplay({
        delay: interval,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    [interval]
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      skipSnaps: false,
      duration: 20,
    },
    autoPlay ? [autoplayPlugin] : []
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();
      setSelectedIndex(index);
      onSlideChange?.(index);
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSlideChange]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  return (
    <section
      className={cn(
        "group relative rounded-3xl border border-border/70 bg-gradient-to-b from-background to-muted/40 p-6",
        className
      )}
      aria-roledescription="carousel"
      aria-label="Project media carousel"
    >
      <div
        className="relative h-full overflow-hidden rounded-2xl"
        style={{ aspectRatio }}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        ref={emblaRef}
      >
        <div className="flex h-full touch-pan-y touch-pinch-zoom">
          {slides.map((slide, index) => (
            <div
              className="min-w-0 flex-[0_0_100%] px-1 h-full"
              key={`${slide.src}-${index}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}`}
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border/60 bg-background/40 shadow-lg shadow-black/10">
                {renderSlideContent ? (
                  renderSlideContent(slide, index)
                ) : (
                  <>
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      sizes="(min-width: 1024px) 960px, 100vw"
                      priority={index === 0}
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                      {slide.badge && (
                        <span className="inline-flex w-fit items-center rounded-full border border-white/30 px-3 py-1 text-xs font-medium">
                          {slide.badge}
                        </span>
                      )}
                      {slide.title && (
                        <h3 className="text-lg font-semibold">{slide.title}</h3>
                      )}
                      {slide.description && (
                        <p className="text-sm text-white/80">
                          {slide.description}
                        </p>
                      )}
                      {slide.link && (
                        <Link
                          href={slide.link.href}
                          className="mt-1 inline-flex items-center text-sm font-semibold text-primary-foreground underline decoration-primary/60 underline-offset-4"
                        >
                          {slide.link.label ?? "View details"}
                        </Link>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-6 top-1/2 flex -translate-y-1/2 items-center justify-between opacity-0 transition group-hover:pointer-events-auto group-hover:opacity-100">
        <button
          type="button"
          onClick={scrollPrev}
          className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-background/80 text-foreground shadow-lg transition hover:border-primary/70 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-background/80 text-foreground shadow-lg transition hover:border-primary/70 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {showIndicators && (
        <div className="mt-6 flex items-center justify-center gap-2">
          {slides.map((_, index) => {
            const isActive = index === selectedIndex;
            return (
              <button
                key={`indicator-${index}`}
                type="button"
                role="tab"
                aria-label={`Go to slide ${index + 1}`}
                aria-selected={isActive}
                onClick={() => emblaApi?.scrollTo(index)}
                className={cn(
                  "h-2.5 rounded-full transition-all",
                  isActive
                    ? "w-8 bg-foreground"
                    : "w-2.5 bg-muted-foreground/50 hover:bg-muted-foreground"
                )}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
