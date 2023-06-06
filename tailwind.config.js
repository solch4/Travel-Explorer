/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        50: "#FCEBE9",
        100: "#F6C2BC",
        200: "#F09A8F",
        300: "#EA7162",
        400: "#E44935",
        500: "#CA2F1B",
        600: "#9D2515",
        700: "#701A0F",
        800: "#431009",
        900: "#160503",
      },
      neutral: {
        50: "#F3F2F2",
        100: "#DBD8D7",
        200: "#C2BDBC",
        300: "#AAA3A1",
        400: "#928987",
        500: "#786F6D",
        600: "#5E5655",
        700: "#433E3D",
        800: "#282524",
        900: "#0D0C0C",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
