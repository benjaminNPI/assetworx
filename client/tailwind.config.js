const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      md: "0.9",
      base: '1rem',
      xl: '1.3rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '2.8rem',
      '6xl': '3.8rem',
    },
 
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'lightblue': '#5DE0E6',
        'darkblue': '#004BAD',
        'green': '#16BBAB',
        'black': '#212121',
        'lightgreen': '#50CCC0',
        'white': '#ffffff',
        'gray': '#808080e2',
        'reviewBlue': '#0E5BA7'
      }
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }
}