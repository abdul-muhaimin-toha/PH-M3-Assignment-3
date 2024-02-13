/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  plugins: [require("daisyui")],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
    extend: {
      colors: {
        black: "#131318",
        primary: "#FF4240",
        "body-dark": "rgba(255, 255, 255, 0.60)",
        "body-light": "rgba(19, 19, 24, 0.60)",
      },
    },
  },
};
