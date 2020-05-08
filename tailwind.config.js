// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
  purge: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './page/**/*.vue',
  ],
  theme: {
    colors: {
      primary: '#5CFFED',
      white: '#FFFFFF',
      black: '#000000',
      gray: {
        darker: '#23272A',
        dark: '#C4C4C4',
        default: '#585858',
        light: '#818181',
        lightest: '#edf2f7'
      },
      green: {
        default: '#48bb78',
        light: '#84FF89'
      },
      discord: {
        primary: '#7289DA'
      }
    },
    extend: {
      fontFamily: {
        title: ['Market Deco'],
        sans: ['Raleway'],
        discord: ['Catamaran']
      },
      fontSize: {
        hero: '100px',
        '7xl': '5rem'
      },
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem'
      }
    }
  },
  variants: {
    textColor: ['hover', 'group-hover']
  }
}
