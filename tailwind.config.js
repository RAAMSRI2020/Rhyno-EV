/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            grey: {
                100: '#424242',
                200: ' #2C2A2A',
                300: '#3C3C3C ',
                400: '#414141',
                500: ' #373737',
            },
            black: {
                100: '#252525 ',
                200: '#202020',
                300: ' #131313',
            },
            // #FFFFFF , #EDEDED , #F2F2F2 , #FAFAFA
            white: {
                100: '#FFFFFF',
                200: '#EDEDED',
                300: '#F2F2F2',
                400: '#FAFAFA',
            },
            // #F9ED32 , #FFF225
            yellow: {
                100: '#F9ED32',
                200: '#FFF225',
            },
        },
        extend: {
            fontFamily: {
                lato: ['Lato'],
                poppins: ['Poppins'],
            }
        },
    },
    plugins: [],
}