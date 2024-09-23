// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,jsx,ts,tsx,css}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        ku4: ["ku4", "sans-serif"],
        ku7: ["ku7", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
