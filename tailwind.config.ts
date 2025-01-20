import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "sofia-regular": ["sofia-regular", "sans-serif"],
      "sofia-bold": ["sofia-bold", "sans-serif"],
      "sofia-black": ["sofia-black", "sans-serif"],
      "sofia-extralight": ["sofia-extralight", "sans-serif"],
      "sofia-light": ["sofia-light", "sans-serif"],
      "sofia-medium": ["sofia-medium", "sans-serif"],
      "sofia-semibold": ["sofia-semibold", "sans-serif"],
      "sofia-ultralight": ["sofia-ultralight", "sans-serif"],
      recoleta: ["recoleta", "serif"],
    },
    extend: {
      colors: {
        "sky-blue": "#87CEEB",
        "soft-pink": "#FCB0BF",
        "soft-pink-200": "#FEF2F5",
        "sky-blue-200": "#E0F2F9",
        background: "var(--background)",
        foreground: "var(--foreground)",
        "hero-1": "#dbccbb",
        "hero-2": "#e3dfd4",
      },
    },
  },
  plugins: [heroui()],
} satisfies Config;
