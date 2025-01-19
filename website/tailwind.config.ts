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
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          background: "#f5f4ee",
          foreground: "#5a4f4a",
        },
      },
      dark: {
        colors: {
          background: "#393835",
          foreground: "#c4bfbc",
        },
      },
    },
  }),],
} satisfies Config;
