/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        k2d: ['K2D'],
        lato: ['Lato']
      },
      colors: {
        'porto-bg': '#121212',
        'light': '#E7F8FF',
        'light-hover': '#D8F3FF',
        'light-active': '#AFE7FF',
        'normal': '#00B1FD',
        'normal-hover': '#0076E4',
        'normal-active': '#006ACD',
        'dark': '#0063C0',
        'dark-hover': '#004F99',
        'dark-active': '#003B72',
        'darker': '#002E59',
      }
    },
  },
  plugins: [],
}

