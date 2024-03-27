/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Flex", "sans-serif"],
        company: ["Bungee", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(258deg, rgba(2,0,36,0.01) 0%, rgba(13,16,26,0.57) 52%, rgba(22,28,45,1) 100%), url('../images/hero.png'), no-repeat, cover",
      },
      colors: {
        sambucus: "#161C2D",
      },
    },
  },
  plugins: [],
};
