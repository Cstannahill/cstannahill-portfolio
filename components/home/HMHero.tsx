// components/home/HMHero.tsx
 "use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  ChevronDown,
  Download,
  MapPin,
  Sparkles,
} from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { MotionLogo } from "@/components/shared/MotionLogo";
import {
  AWS_LOGO,
  POSTGRES_LOGO,
  PYTHON_LOGO,
  REACT_LOGO,
  TYPESCRIPT_LOGO,
  NEXT_LOGO, NODE_LOGO,
  LAMBDA_LOGO
} from "@/components/shared/logos";

interface HMHeroProps {
  locale: string;
}

const HMHero = ({ locale }: HMHeroProps) => {
  const stats = [
    { label: "AI-driven analyses shipped", value: "10+" },
    { label: "Daily data processed", value: "500+ jobs & bills" },
    { label: "Production experience", value: "3 yrs" },
  ];

  const { scrollY } = useScroll();
  const indicatorOpacity = useTransform(
    scrollY,
    [0, 100, 200],
    [1, 1, 0]
  );

  const logos = [
    TYPESCRIPT_LOGO,
    REACT_LOGO,
    NEXT_LOGO,
    NODE_LOGO,
    PYTHON_LOGO,
    POSTGRES_LOGO,
    LAMBDA_LOGO,
    AWS_LOGO,
  ];

  return (
    <section className="relative overflow-hidden rounded-3xl border border-accent/10 bg-gradient-to-b from-[#060b18] to-transparent px-6 py-16 text-center md:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 top-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center">
        <div className="relative mx-auto mb-8 h-32 w-32 rounded-[32px] bg-gradient-to-br from-accent via-accent/50 to-purple/40 p-[3px] shadow-2xl shadow-accent/30 md:h-40 md:w-40">
          <div
            className="hero-pulse pointer-events-none absolute -inset-4 rounded-[40px] bg-gradient-to-br from-accent/30 via-transparent to-purple/20"
            aria-hidden
          />
          <div className="hero-glow pointer-events-none absolute -inset-1 rounded-[36px] border border-accent/40" />
          <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-background shadow-lg shadow-accent/30">
            <Image
              src="/images/avatar.jpg"
              alt="Christian Tannahill"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 128px, 144px"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-foreground/70">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 px-3 py-1 text-xs uppercase tracking-widest text-accent-light">
            <Sparkles className="h-3 w-3" /> Building AI-first products
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 px-3 py-1 text-xs">
            <MapPin className="h-3 w-3" />
            Illinois • Remote friendly
          </span>
        </div>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
          Christian Tannahill
        </h1>
        <p className="mt-3 text-2xl font-semibold text-accent">
          Full-Stack Engineer crafting AI analytics & automation
        </p>
        <p className="mt-4 max-w-3xl text-lg text-foreground/80">
          I lead rapid prototyping and delivery across the stack—pairing React +
          Next.js with scalable AWS and .NET services—to turn messy data sources
          into actionable insights and polished experiences.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30"
          >
            <Link href={`/${locale}/projects`}>View My Work</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-accent/40 bg-background/40 backdrop-blur hover:border-accent-light hover:text-accent-light"
          >
            <a
              href="https://calendar.app.google/JepYNPUuk6d9eLoDA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Schedule a Call
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="text-foreground hover:text-accent"
          >
            <Link href={`/${locale}/resume`}>
              <Download className="mr-2 h-4 w-4" />
              Quick résumé view
            </Link>
          </Button>
        </div>

        <div className="mt-8 rounded-2xl border border-accent/20 bg-accent-dark/10 px-6 py-4 text-sm text-foreground/80">
          <p>
            <span className="font-semibold text-accent-light">
              Available for hire
            </span>{" "}
            — targeting mid-level full-stack roles or short-term product build
            engagements.
          </p>
        </div>

        <div className="mt-10 grid w-full gap-4 text-left sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-accent/10 bg-secondary/30 p-4 text-center"
            >
              <p className="text-3xl font-bold text-accent-light">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 w-full">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-foreground/60">
            Currently shipping with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {logos.map((logo, index) => (
              <MotionLogo key={index} logo={logo} logoIndex={index} />
            ))}
          </div>
        </div>

        <motion.a
          style={{ opacity: indicatorOpacity }}
          href="#featured-projects"
          aria-label="Scroll to featured projects"
          className="scroll-indicator mt-12 inline-flex items-center gap-2 rounded-full border border-accent/20 px-4 py-2 text-sm text-foreground/70 transition hover:border-accent/40 hover:text-accent"
        >
          Scroll down
          <ChevronDown className="h-4 w-4" />
        </motion.a>
      </div>
    </section>
  );
};

export default HMHero;
