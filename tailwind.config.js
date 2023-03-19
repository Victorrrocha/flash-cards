/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#E9EDC9',
        'primary': '#CCD5AE',
        'secondary-light': '#FEFAE0',
        'secondary': '#FAEDCD',
      }
    },
  },
  plugins: [],
}
