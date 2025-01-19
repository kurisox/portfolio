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
    extend: {
      colors: {
        switchDarkMode: "#95c2ff",
        switchLightMode: "#f7c631",
        ligghtmodeBG: "#fafafa",
        lightmodeBG2: "#e4e5f1",
        lightmodeFont: "#484b6a",
      },
      ontFamily: {
        raleway: "var(--font-raleway)",
      },
      fontSize: {
        14: "0.875rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        24: "1.5rem",
        28: "1.75rem",
        32: "2rem",
        40: "2.5rem",
        42: "2.625rem",
        64: "4rem",
        72: "4.5rem",
        96: "6rem",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          background: "#FFFFFF",
          foreground: "#000000",
        },
      },
      dark: {
        colors: {
          background: "#000000",
          foreground: "#FFFFFF",
        },
      },
    },
  }),],
} satisfies Config;
