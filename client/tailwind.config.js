module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      main: "#f38181",
      accent: "#fce38a",
      green: {
        100: "#eaffd0",
        200: "#95e1d3",
        300: "#4aa96c",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
