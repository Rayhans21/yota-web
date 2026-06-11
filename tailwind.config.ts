import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        yota: {
          red: "#cc0000",
          "red-dark": "#990000",
          blue: "#1a3a8f",
          navy: "#0a1628",
          gold: "#c8922a",
        },
      },
    },
  },
  plugins: [],
};

export default config;
