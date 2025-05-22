// components/layout/Footer.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer({ locale }: { locale: string }) {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link href={`/${locale}`} className="text-xl font-bold">
              Christian Tannahill
            </Link>
            <p className="text-sm text-muted-foreground">
              Software Developer Portfolio
            </p>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              asChild
              className="text-sm text-muted-foreground hover:text-amber-300 transition-colors"
            >
              <a
                href="https://github.com/cstannahill"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="border-amber-600/30 hover:border-amber-400 hover:text-amber-300"
            >
              <a
                href="https://linkedin.com/in/christian-tannahill"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="border-amber-600/30 hover:border-amber-400 hover:text-amber-300"
            >
              <a
                href="mailto:christiantannahill2@gmail.com"
                aria-label="Send Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Christian Tannahill. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
