/** @type {import('tailwindcss').Config} */
const themeExtend = require('./config/tailwind-theme.js');

module.exports = {
  content: ["./*.html", "./components/*.html"],
  theme: {
    extend: themeExtend,
  },
  plugins: [],
}
