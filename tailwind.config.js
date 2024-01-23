/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  plugins: [require("daisyui")],
  theme: {
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
    extend: {
      colors: {
        black: "#131318",
        primary: "#FF4240",
      },
    },
  },
};
