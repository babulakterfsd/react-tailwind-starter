module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            screens: {},

            colors: {
                black: '#000000',
                darkishBlack: '#14213d',
                reddishYellow: '#ba7710',
                offWhite: '#e5e5e5',
                DEFAULT: '#FFFFFF',
            },

            fontFamily: {
                body: ['Poppins', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
