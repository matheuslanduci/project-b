module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#2a94e1',
          200: '#3eaceb',
          300: '#0d8fd9',
        },
        dark: {
          100: '#383838',
        },
        gray: {
          100: '#868E96',
        },
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}
