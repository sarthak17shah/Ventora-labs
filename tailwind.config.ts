import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00E08E",
        "primary-hover": "#00B371",
        secondary: "#10B981",
        "background-dark": "#020302",
        "card-dark": "#0A0C0A",
        "card-border": "#1A231E",
        "accent-lime": "#bef264",
        "text-muted": "#9CA3AF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 50% 0%, rgba(0, 224, 142, 0.15) 0%, rgba(2, 3, 2, 0) 60%)",
        "green-gradient": "linear-gradient(135deg, #050806 0%, #001f12 100%)",
        "card-gradient":
          "linear-gradient(180deg, rgba(20, 30, 25, 0.4) 0%, rgba(10, 12, 10, 0.6) 100%)",
        glass:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        float: "float 4s ease-in-out infinite",
        "float-delayed": "float 5s ease-in-out infinite 0.5s",
        "spin-slow": "spin 10s linear infinite",
        "spin-slower": "spin 15s linear infinite reverse",
        "spin-medium": "spin 7s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(1deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

