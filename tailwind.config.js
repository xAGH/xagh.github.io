/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    backgroundImage: {
      'astronaut': "linear-gradient(rgba(0 0 0 / 0.5), rgba(0 0 0 / 0.5)), url(src/assets/background.jpg)"
    },
    extend: {
      colors: {
        'primary': '#dddddd',
        'secondary': '#9CA3AF',
        'info': '##1c99cf',
        'success': '#57c10e',
        'warning': '#c6a104'
      },
      inset: {
        'input-text-length': 'var(--input-length)'
      }
    },
  },
  plugins: [],
}
