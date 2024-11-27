const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_pages/**/*.html',
    './_posts/*.md',
    './*.html'
  ],
  theme: {
    fontFamily: {
      'sans': [...defaultTheme.fontFamily.sans],
      'serif': [...defaultTheme.fontFamily.serif]
    },
    colors: {
      'westar': {
        '50': '#f7f6f5',
        '100': '#e4e0dc',
        '200': '#d9d3cf',
        '300': '#c1b8b0',
        '400': '#a8988f',
        '500': '#968379',
        '600': '#89746d',
        '700': '#73605b',
        '800': '#5f514d',
        '900': '#4e4340',
        '950': '#292221',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

