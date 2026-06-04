import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bayelsa: {
          green: "#0f6b3f",
          deep: "#073b2a",
          river: "#1f7a8c",
          gold: "#f1b73b",
          palm: "#e7f4ed",
          ink: "#17231f"
        }
      },
      boxShadow: {
        soft: "0 14px 45px rgba(7, 59, 42, 0.12)"
      }
    },
  },
  plugins: [],
};

export default config;
