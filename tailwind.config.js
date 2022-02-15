const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./views/**/*.{html,js,hbs}"],
  theme: {
    colors:{
      'zmagenta': '#d9017a',
      'zorange': '#fe5000',
      'zblack': '#25282a',
      'zgray':{
        10: '#66676c',
        8: '#8f9092',
        3: '#cacac7',
        1: '#ddddda'
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      indigo: colors.indigo,
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
