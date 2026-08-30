import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17251F",
        forest: "#315B46",
        leaf: "#6F9D7C",
        cream: "#F7F4EC",
        ivory: "#FFFDF8",
        peach: "#F2CDBE",
        sun: "#F2DC91",
        mint: "#DCE9DF",
        muted: "#65706A",
      },
      borderRadius: { "4xl": "2rem", "5xl": "2.75rem" },
      boxShadow: { soft: "0 24px 70px rgba(23,37,31,.10)" },
    },
  },
  plugins: [],
};

export default config;
