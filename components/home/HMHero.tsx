// components/home/HMHero.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface HMHeroProps {
  locale: string;
}

const HMHero = ({ locale }: HMHeroProps) => {
  return (
    <section className="flex flex-col items-center justify-center py-12 text-center md:py-24">
      <div className="relative mx-auto mb-8 h-32 w-32 overflow-hidden rounded-full md:h-40 md:w-40">
        <Image
          src="/images/avatar.jpg"
          alt="Christian Tannahill"
          fill
          className="object-cover rounded-full"
          priority
          sizes="(max-width: 768px) 128px, 160px"
        />
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
        Christian Tannahill
      </h1>
      <p className="mt-4 text-2xl text-accent font-medium">
        Full‑Stack Software Engineer
      </p>
      <p className="mt-6 max-w-[42rem] text-lg text-muted-foreground">
        I craft intuitive UIs & robust APIs, turning ideas into polished
        products.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <Link href={`/${locale}/projects`}>View My Work</Link>
        </Button>
        <Button
          variant="outline"
          size="lg"
          asChild
          className="border-accent/30 hover:border-accent-light hover:text-accent-light"
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
      </div>
      {/* Hiring Notice */}
      <div className="mt-8 rounded-lg bg-accent-dark/20 border border-accent/30 px-6 py-3">
        <p className="text-sm">
          <span className="font-medium text-accent-light">Now hiring</span> –
          freelance work available
        </p>
      </div>
    </section>
  );
};

export default HMHero;
