/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        navy: {
          DEFAULT: "#0B1F3A",
          light: "#112447",
          dark: "#060f1e",
        },
        red: {
          600: "#E11D2E",
          700: "#c01525",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "pulse-slow": "pulseSlow 2s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(225, 29, 46, 0.5)" },
          "50%": { boxShadow: "0 0 0 12px rgba(225, 29, 46, 0)" },
        },
      },
    },
  },
  plugins: [],
};
