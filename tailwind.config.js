const { colors } = require('tailwindcss/defaultTheme')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    important: true,
    purge: {
        enabled: false,
        content: ['./pages/**/*.vue']
    },
    darkMode: false,
    color: {
        blue: {
            light: '#689bca',
            DEFAULT: '#3d4766',
            dark: '#3d4766'
          },
          white: colors.white,
          gray: colors.gray,
          orange: {
            DEFAULT: '#ee746d',
          },
    },
    plugins: [
        require('@tailwindcss/forms')
    ]
}