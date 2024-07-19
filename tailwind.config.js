/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'orange-100': '#fffaf0',
      },
      gradientColorStops: theme => ({
        'orange-100': theme('colors.orange.100'),
        'white': '#ffffff',
      }),
      height: {
        '112': '28rem',
        '128': '32rem',
        '132': '36rem',
      },
    },
  },
  plugins: [],
}