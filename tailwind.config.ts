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
        josefin: ["Josefin Sans", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        "priv-blue": "#4F6EDF",
        "priv-green": "#25B79F",
        "priv-red": "#FF005C",
        "priv-yellow": "#F2B951",
        "priv-purlple": "#8E91F4",
        "priv-base": "#191827",
        "priv-container": "#212034",
        "priv-container-dark": "#191827",
        "priv-container-light": "#232236",
        "priv-gray-light": "#454367",
        "priv-gray": "#AAAFBE",
        "priv-dark-gray": "#2F2D47",
        "priv-dark-blue": "#14131F",
      },
      animation: {
        "fade-move": "fadeMove 0.6s ease-in-out",
        bouncy: "bouncy 2s ease-in-out",
      },
      keyframes: {
        fadeMove: {
          "0%": { transform: "translateY(34px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bouncy: {
          "0%": { opacity: "0.2" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
