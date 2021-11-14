const { colors } = require('tailwindcss/defaultTheme')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: 'jit',
    important: true,
    purge: {
        enabled: false,
        content: ['./pages/**/*.vue']
    },
    darkMode: false,
    theme: {
        extend: {
            colors: {
                'bevagelse-blue-dark': '#041A57',
                'bevagelse-blue-light': '#0C81E8',
                'bevagelse-turquoise': '#00CCFF',
                'bevagelse-yellow': '#FFC905',
                'bevagelse-green': '#005F61',
                // transparent: 'transparent',
                // current: 'currentColor',
                // blue: {
                //     light: '#00CCFF',
                //     DEFAULT: '#0C81E8',
                //     dark: '#041A57'
                // },
                // 'blue-test': '#00CCFF',
                // red: '#00CCFF',
                // yellow: '#FFC905',
                // green: '#005F61',
                // white: colors.white,
                // black: colors.black,
            },
            fontFamily: {
                'poppins': ['Poppins', 'ui-serif', 'Georgia']
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms')
    ]
}