const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class', // This can be 'media' if preferred.
  // Don't add a glob below `public` as Rollup doesn't
  // recognize them and will rebuild in an infinite loop.
  content: [
    './src/**/*.svelte',
    './src/**/*.html',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        svelte: '#ff3e00',
        darkBlue: '#22303E',
        darkDarkBlue: 'rgba(34, 48, 62, 0.9);',
        darkTextGrayish: '#90A4B6',
        medGrayish: '#E4E9ED',
        b9b9: '#B9B9B9',
        yellowz: '#F2D31B',
        lightBlue: '#ACD0FF',
        medBlue: '#406EAA',
        d9d9: '#D9D9D9',
        dfec: '#DFECFE',
        darkPink: '#FCB0EE',
        medPink: '#FFCFEF',
        lightPink: '#FFEEFB',
        backgroundz: '#F5F5F5'
      },
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        ...defaultTheme.screens,
        'mercado-max': '1160px'

      },
      maxWidth: {
        ...defaultTheme.maxWidth,
        'mercado-max': '1160px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
