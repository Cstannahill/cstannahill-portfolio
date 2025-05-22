"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Github, Linkedin, Mail } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

/**
 * Main navigation header component
 * Mobile-first design with responsive behavior
 */
export function Header({ locale }: { locale: string }) {
  const pathname = usePathname();

  const links = [
    { href: `/${locale}`, label: "Home" },
    { href: `/${locale}/readme`, label: "About" },
    { href: `/${locale}/blog`, label: "Blog" },
    { href: `/${locale}/projects`, label: "Projects" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/cstannahill",
      label: "GitHub",
      icon: <Github className="h-4 w-4" />,
    },
    {
      href: "https://linkedin.com/in/",
      label: "LinkedIn",
      icon: <Linkedin className="h-4 w-4" />,
    },
    {
      href: "mailto:contact@example.com",
      label: "Email",
      icon: <Mail className="h-4 w-4" />,
    },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#1d1916]/95 backdrop-blur supports-[backdrop-filter]:bg-[#1d1916]/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <span className="text-lg font-bold">Christian Tannahill</span>
          </Link>
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[350px]">
              <nav className="mt-8 flex flex-col gap-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      isActive(link.href) ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-8 pt-8 border-t">
                <p className="mb-4 text-sm text-muted-foreground">
                  Connect with me
                </p>
                <div className="flex flex-col gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                    >
                      {link.icon}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-amber-300 ${
                isActive(link.href) ? "text-amber-400" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social links - only shown on desktop */}
        <div className="hidden md:flex md:items-center md:gap-2">
          {socialLinks.map((link) => (
            <Button
              key={link.href}
              variant="outline"
              size="icon"
              asChild
              className="border-amber-600/30 hover:border-amber-400 hover:text-amber-300"
            >
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
}
