/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark_green: "#395144",
        light_green: "#4E6C50",
        brown: "#AA8B56",
        pastel: "#F0EBCE",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    }
  },
  plugins: [],
};