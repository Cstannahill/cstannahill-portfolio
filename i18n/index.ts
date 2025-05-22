export const defaultLocale = "en";
export const locales = ["en", "id"];

export type Locale = (typeof locales)[number];

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

// Define your translations here or import them from JSON files
export const messages = {
  en: {
    navigation: {
      home: "Home",
      about: "About",
      blog: "Blog",
      projects: "Projects",
    },
    // Add more translations as needed
  },
  id: {
    navigation: {
      home: "Beranda",
      about: "Tentang",
      blog: "Blog",
      projects: "Proyek",
    },
    // Add more translations as needed
  },
};
