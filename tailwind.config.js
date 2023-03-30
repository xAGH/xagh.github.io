/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    backgroundImage: {
      'astronaut': "linear-gradient(rgba(0 0 0 / 0.5), rgba(0 0 0 / 0.5)), url(src/assets/background.jpg)"
    },
    extend: {},
  },
  plugins: [],
}
