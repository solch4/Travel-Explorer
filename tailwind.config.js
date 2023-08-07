/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: {
        50: "#ecf9f7",
        100: "#c5ece8",
        200: "#9fe0d9",
        300: "#78d4c9",
        400: "#51c7ba",
        500: "#38aea1",
        600: "#2b877d",
        700: "#1f6059",
        800: "#133a36",
        900: "#061312",
      },
      neutral: {
        50: "#f1f3f3",
        100: "#d6dcdb",
        200: "#bac4c3",
        300: "#9fadab",
        400: "#839593",
        500: "#6a7c7a",
        600: "#52605f",
        700: "#3b4544",
        800: "#232929",
        900: "#0c0e0e",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
