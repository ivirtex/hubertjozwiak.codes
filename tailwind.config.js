/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        102: "1.02",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-font-inter"),
  ],
};
