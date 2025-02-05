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
        switchLightMode: "#d14009",
        ligghtmodeBG: "#FFFFFF",
        lightmodeBG2: "#fafbff",
        lightmodeFont1: "#484b6a",
        lightmodeFont2: "#000000",
        darkmodeBG1: "#0f0f0f",
        darkmodeBG2: "#000000",
        darkmodeFont: "#ffffff",
        changelog: "#fff3cd",
      },
      fontFamily: {
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
          primary:"#FEF2F2",
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
