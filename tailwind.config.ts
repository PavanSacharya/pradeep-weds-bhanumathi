import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        maroon: "#8A1538",
        maroonDark: "#5C0E26",
        gold: "#C9A227",
        goldLight: "#E8C874",
        ivory: "#FCF8F5",
        brass: "#8B6914",
        blush: "#F4D9DE",
        blushDark: "#E8B4C0",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        kannada: ["var(--font-kannada)", "serif"],
      },
      backgroundImage: {
        "grain": "radial-gradient(circle at 1px 1px, rgba(139,105,20,0.08) 1px, transparent 0)",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1", transform: "scaleY(1)" },
          "50%": { opacity: "0.75", transform: "scaleY(0.92)" },
        },
        fall: {
          "0%": { transform: "translateY(-10vh) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": { transform: "translateY(110vh) rotate(360deg)", opacity: "0.8" },
        },
      },
      animation: {
        flicker: "flicker 1.4s ease-in-out infinite",
        fall: "fall linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
