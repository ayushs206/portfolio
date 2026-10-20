import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: "#FDFDFD",
          100: "#F9F8F5",
          200: "#F2F0EB",
          300: "#E6E3DB",
          400: "#C9C5B8",
        },
        ink: {
          900: "#0D1117",
          800: "#161B22",
          700: "#24292F",
          500: "#57606A",
          400: "#6E7781",
          300: "#8C959F",
        },
        system: {
          blue: "#0969DA",
          cyan: "#057A85",
          amber: "#D97706",
          green: "#1A7F37",
          crimson: "#CF222E",
        },
      },
      fontFamily: {
        sans: ["var(--font-work-sans)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        hard: "2px 2px 0px 0px rgba(13, 17, 23, 0.9)",
        "hard-sm": "1px 1px 0px 0px rgba(13, 17, 23, 0.9)",
        "hard-hover": "3px 3px 0px 0px rgba(9, 105, 218, 0.9)",
      },
    },
  },
  plugins: [],
};

export default config;
