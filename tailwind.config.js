/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Flex", "sans-serif"],
        company: ["Bungee", "sans-serif"],
      },
    },
  },
  plugins: [],
};
