/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        "timer": "#5f8787",
        "folder": "#2596be",
        "success": "#4e9a06",
        "success_separator": "#5fd700",
        "error": "#ef2929",
        "error_separator": "#ff0000",
        "primary": "#d3d7cf"
      },
      keyframes: {
        'blink': {
          '0%': { display: 'none' },
          '100%': { display: 'block' },
        },
      },
      animation: {
        'blink': 'show-element 1s steps(1, start) forwards',
      },
    },
  },
  plugins: [],
}