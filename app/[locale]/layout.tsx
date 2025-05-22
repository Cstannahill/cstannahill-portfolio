// app/[locale]/layout.tsx
import { isValidLocale, defaultLocale } from "@/i18n";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { notFound } from "next/navigation";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate that the locale from the URL is supported
  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <>
      <Header locale={locale} />
      <main
        className="min-h-[calc(100vh-64px-200px)] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full"
        lang={locale}
      >
        {children}
      </main>
      <Footer locale={locale} />
    </>
  );
}
