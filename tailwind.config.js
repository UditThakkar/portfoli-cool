/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    './app.vue',
    './pages/**/*.vue',
    './components/**/*.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.yellow,
      },
    },
  },
  plugins: [],
}