"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Github,
  Linkedin,
  Mail,
  Home,
  BookOpen,
  FileText,
  FolderKanban,
  Calendar,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

/**
 * Enhanced navigation header component with stylish icon buttons
 * Mobile-first design with responsive behavior
 */
export function Header({ locale }: { locale: string }) {
  const pathname = usePathname();

  const links = [
    { href: `/${locale}`, label: "Home", icon: <Home className="h-4 w-4" /> },
    {
      href: `/${locale}/readme`,
      label: "README",
      icon: <BookOpen className="h-4 w-4" />,
    },
    {
      href: `/${locale}/projects`,
      label: "Projects",
      icon: <FolderKanban className="h-4 w-4" />,
    },
    {
      href: `/${locale}/blog`,
      label: "Blog",
      icon: <FileText className="h-4 w-4" />,
    },
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
    <header className="sticky top-0 z-50 w-full border-b border-amber-800/30 bg-[#1d1916]/95 backdrop-blur supports-[backdrop-filter]:bg-[#1d1916]/60 shadow-md shadow-amber-900/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 transition-transform hover:scale-105"
          >
            <span className="text-lg font-bold text-amber-400">
              Christian Tannahill
            </span>
          </Link>
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Menu"
                className="border-amber-600/30 bg-amber-900/20 hover:border-amber-400 hover:bg-amber-900/40 hover:text-amber-300 transition-all"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[80%] sm:w-[350px] border-l border-amber-800/30"
            >
              <SheetHeader>
                <SheetTitle className="text-xl text-amber-300">
                  Navigation Menu
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-lg font-medium px-3 py-2 rounded-md transition-colors flex items-center gap-3 ${
                      isActive(link.href)
                        ? "bg-amber-900/30 text-amber-300"
                        : "text-foreground hover:bg-amber-900/20 hover:text-amber-300"
                    }`}
                  >
                    <span className="bg-amber-900/30 p-2 rounded-md">
                      {link.icon}
                    </span>
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-8 pt-8 border-t border-amber-800/30">
                <p className="mb-4 text-sm font-medium text-amber-300">
                  Connect with me
                </p>
                <div className="flex flex-col gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-foreground hover:bg-amber-900/20 hover:text-amber-300 transition-colors"
                    >
                      <span className="bg-amber-900/30 p-2 rounded-md">
                        {link.icon}
                      </span>
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop navigation - Block style buttons from screenshots */}
        <div className="hidden md:flex md:items-center md:gap-4">
          <nav className="flex items-center bg-amber-900/30 rounded-md overflow-hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 flex items-center gap-2 transition-all ${
                  isActive(link.href)
                    ? "bg-amber-900/70 text-amber-300"
                    : "text-foreground hover:bg-amber-900/50 hover:text-amber-300"
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Social links - round icon buttons */}
        <div className="hidden md:flex md:items-center md:gap-2">
          {socialLinks.map((link) => (
            <Button
              key={link.href}
              variant="outline"
              size="icon"
              asChild
              className="rounded-full border-amber-600/30 bg-[#1d1916] hover:border-amber-500/50 hover:bg-amber-900/30 hover:text-amber-300 transition-all"
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            </Button>
          ))}

          {/* Schedule meeting button */}
          <Button
            variant="outline"
            size="sm"
            className="ml-2 rounded-md border-amber-500/30 bg-amber-900/20 text-amber-300 hover:bg-amber-900/40 hover:border-amber-500/50 transition-all flex items-center gap-2"
          >
            <Calendar className="h-4 w-4" />
            <span>Schedule a meeting</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
