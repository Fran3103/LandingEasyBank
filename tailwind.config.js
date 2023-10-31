/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors:{
            
            DarkBlue: 'hsl(233, 26%, 24%)',
            LimeGreen: 'hsl(136, 65%, 51%)',
            BrightCyan: 'hsl(192, 70%, 51%)',
            GrayishBlue: 'hsl(233, 8%, 62%)',
            LightGrayishBlue: 'hsl(220, 16%, 96%)',
            VeryLightGray: 'hsl(0, 0%, 98%)',
            White: 'hsl(0, 0%, 100%)',
            transparent:'rgba(0,0,0,0)'
        },
       
        extend: {
            backgroundImage: {
                'hero-desktop': 'url(\'./src/assets/images/bg-intro-desktop.svg\')',
                'hero-mobile': 'url(\'./src/assets/images/bg-intro-mobile.svg\')',
            },
        },
    },
    plugins: [],
}