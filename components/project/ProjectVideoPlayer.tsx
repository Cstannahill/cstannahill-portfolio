"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  MediaPlayer,
  MediaProvider,
  Poster,
  Track,
  type MediaPlayerInstance,
  type PlayerSrc,
} from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";
import { cn } from "@/lib/utils";

import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

type SimpleVideoSource = string | { src: string; type?: string };

export type ProjectVideoChapter = {
  time: number;
  label: string;
  description?: string;
};

export type ProjectVideoCaptionTrack = {
  src: string;
  label?: string;
  language?: string;
  kind?: "subtitles" | "captions";
  default?: boolean;
};

type ProjectVideoCta = {
  label: string;
  href: string;
};

export interface ProjectVideoPlayerProps {
  src: SimpleVideoSource | SimpleVideoSource[] | PlayerSrc;
  poster?: string;
  title?: string;
  description?: string;
  muted?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  captions?: ProjectVideoCaptionTrack;
  chapters?: ProjectVideoChapter[];
  cta?: ProjectVideoCta;
  aspectRatio?: string;
  className?: string;
}

function formatTimestamp(seconds: number) {
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${mins}:${secs}`;
}

export function ProjectVideoPlayer({
  src,
  poster,
  title,
  description,
  muted = true,
  autoPlay = false,
  loop = false,
  captions,
  chapters,
  cta,
  aspectRatio = "16 / 9",
  className,
}: ProjectVideoPlayerProps) {
  const playerRef = useRef<MediaPlayerInstance | null>(null);
  const [posterLoaded, setPosterLoaded] = useState(false);

  const playerSrc = useMemo<PlayerSrc>(() => {
    const resolveUrl = (value: string) => {
      if (!value) return value;
      if (/^https?:\/\//.test(value)) return value;
      if (typeof window !== "undefined") {
        try {
          return new URL(value, window.location.origin).toString();
        } catch {
          return value;
        }
      }
      return value;
    };

    if (typeof src === "string") {
      return { src: resolveUrl(src), type: "video/mp4" };
    }

    if (Array.isArray(src)) {
      return src.map((source) => {
        if (typeof source === "string") {
          return { src: resolveUrl(source), type: "video/mp4" };
        }

        if (typeof source === "object" && typeof source.src === "string") {
          return {
            ...source,
            src: resolveUrl(source.src),
          };
        }

        return source;
      }) as PlayerSrc;
    }

    if (
      src &&
      typeof src === "object" &&
      "src" in src &&
      typeof src.src === "string"
    ) {
      return {
        ...(src as Extract<PlayerSrc, { src: string }>),
        src: resolveUrl((src as { src: string }).src),
      };
    }

    return src as PlayerSrc;
  }, [src]);

  const shouldRenderMeta =
    title || description || cta || (chapters && chapters.length > 0);

  const handleSeek = (time: number) => {
    if (playerRef.current) {
      playerRef.current.currentTime = time;
      playerRef.current.play();
    }
  };

  return (
    <div
      className={cn(
        "rounded-3xl border border-border/60 bg-gradient-to-b from-background to-muted/30 p-6 shadow-lg shadow-black/5",
        className
      )}
    >
      <div
        className="relative overflow-hidden rounded-2xl bg-black"
        style={{ aspectRatio }}
      >
        <MediaPlayer
          ref={playerRef}
          className="h-full w-full"
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline
          preload="metadata"
          src={playerSrc}
          title={title}
          poster={poster}
          crossOrigin="anonymous"
        >
          <MediaProvider>
            {poster && (
              <>
                {!posterLoaded && (
                  <div className="absolute inset-0 animate-pulse bg-muted/40" />
                )}
                <Poster
                  src={poster}
                  alt={title ? `${title} poster` : "Video poster"}
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity data-[visible]:opacity-100"
                  onLoad={() => setPosterLoaded(true)}
                />
              </>
            )}
          </MediaProvider>
          {captions && (
            <Track
              kind={captions.kind ?? "subtitles"}
              src={captions.src}
              lang={captions.language ?? "en"}
              label={captions.label ?? "English"}
              default={captions.default ?? true}
            />
          )}
          <DefaultVideoLayout icons={defaultLayoutIcons} />
        </MediaPlayer>
      </div>

      {shouldRenderMeta && (
        <div className="mt-6 space-y-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              {title && (
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {title}
                </h3>
              )}
              {description && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {description}
                </p>
              )}
            </div>
            {cta && (
              <Link
                href={cta.href}
                className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {cta.label}
              </Link>
            )}
          </div>

          {chapters && chapters.length > 0 && (
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Highlights
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {chapters.map((chapter) => (
                  <button
                    key={`${chapter.label}-${chapter.time}`}
                    type="button"
                    onClick={() => handleSeek(chapter.time)}
                    className="group flex items-start gap-3 rounded-2xl border border-border/60 bg-background/50 p-4 text-left transition hover:border-primary/60 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  >
                    <span className="font-mono text-xs font-bold text-primary">
                      {formatTimestamp(chapter.time)}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {chapter.label}
                      </p>
                      {chapter.description && (
                        <p className="mt-1 text-xs text-muted-foreground">
                          {chapter.description}
                        </p>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
