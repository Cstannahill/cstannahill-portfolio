import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#3f3f46",
        input: "#3f3f46",
        ring: "#06b6d4", // cyan-500
        background: "#1d1916",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#06b6d4", // cyan-500
          foreground: "#ffffff",
        },
        // Modern accent colors
        accent: {
          DEFAULT: "#0ea5e9", // sky-500 - main accent
          light: "#38bdf8", // sky-400 - lighter variant
          dark: "#0284c7", // sky-600 - darker variant
          foreground: "#ffffff",
        },
        // Silver palette for subtle elements
        silver: {
          DEFAULT: "#94a3b8", // slate-400
          light: "#e2e8f0", // slate-200
          dark: "#475569", // slate-600
        },
        // Gold accents for highlights and special elements
        gold: {
          DEFAULT: "#eab308", // amber-500
          light: "#fcd34d", // amber-300
          dark: "#b45309", // amber-700
        },
        // Teal as a complementary color
        teal: {
          DEFAULT: "#14b8a6", // teal-500
          light: "#5eead4", // teal-300
          dark: "#0f766e", // teal-700
        },
        // Purple for contrast elements
        purple: {
          DEFAULT: "#8b5cf6", // violet-500
          light: "#c4b5fd", // violet-300
          dark: "#6d28d9", // violet-700
        },
        // Professional secondary colors
        secondary: {
          DEFAULT: "#1e293b", // slate-800
          light: "#334155", // slate-700
          dark: "#0f172a", // slate-900
          foreground: "#f1f5f9", // slate-100
        },
        // Muted colors
        muted: {
          DEFAULT: "#334155", // slate-700
          foreground: "#94a3b8", // slate-400
        },
        destructive: {
          DEFAULT: "#ef4444", // red-500
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#1e293b", // slate-800
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "#1e293b", // slate-800
          foreground: "#ffffff",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
