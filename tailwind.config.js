/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./docs/**/*.{html,js}",
    "./**/*.{html,js}"],
theme: {
    extend: {
        container: {
            center: true
        },

        fontFamily: {
            k2d: ['K2D'],
            lato: ['Lato']
        },
        
        colors: {
            'content-bg': '#171717',
            'porto-bg': '#121212',
            'porto-darker': '#1B1B1B',
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

