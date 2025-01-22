import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
      "2xl": "1280px",
    },
    extend: {
      colors: {
        primary: "#00ADEF",
        secondary: "#FFFFFF80",
        "background-primary": "#292929",
        "background-secondary": "#212121",
      },
    },
  },
  plugins: [],
} satisfies Config;
