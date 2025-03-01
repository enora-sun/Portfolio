import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/about/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/project/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/resume/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
