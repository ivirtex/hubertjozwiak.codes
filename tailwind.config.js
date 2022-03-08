module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        102: "1.02",
      },
      colors: {
        gray: {
          850: "#131b2b",
          950: "#0e1421",
          970: "#0c111c",
        },
        neutral: {
          950: "#101010",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-font-inter"),
  ],
};
