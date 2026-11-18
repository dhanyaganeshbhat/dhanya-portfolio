import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#D6C29A",
        champagne: "#F1E4C8",
        charcoal: "#111111",
        matte: "#080808",
        dgrey: "#242424",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        floatUp: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)", opacity: "0.6" },
          "50%": { transform: "translateY(-20px) rotate(180deg)", opacity: "1" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(214,194,154,0)" },
          "50%": { boxShadow: "0 0 20px 4px rgba(214,194,154,0.25)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glitter: {
          "0%": { transform: "scale(0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotate(45deg)", opacity: "0" },
        },
      },
      animation: {
        shimmer: "shimmer 3s linear infinite",
        floatUp: "floatUp 6s ease-in-out infinite",
        pulseGold: "pulseGold 2s ease-in-out infinite",
        fadeUp: "fadeUp 0.6s ease-out forwards",
        glitter: "glitter 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
