"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { locales, isValidLocale } from "@/i18n";

interface LanguageSwitcherProps {
  currentLocale: string;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Get the current path without the locale prefix
  const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "");

  const languageNames: Record<string, string> = {
    en: "English",
    id: "Indonesia",
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="border-amber-600/30 hover:border-amber-400 hover:text-amber-300"
        >
          {languageNames[currentLocale] || currentLocale}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem key={locale} asChild>
            <Link
              href={`/${locale}${pathWithoutLocale}`}
              className={currentLocale === locale ? "font-bold" : ""}
              onClick={() => setOpen(false)}
            >
              {languageNames[locale] || locale}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
