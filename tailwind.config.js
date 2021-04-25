module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      display: ['Basetica', 'sans-serif'],
      body: ['Basetica', 'sans-serif'],
    },
    extend: {
      colors: {
        green: '',
        red: '',
      },
      margin: {
        8: '.5rem',
        16: '1rem',
      },
    },
  },
  variants: {
    opacity: ['responsive', 'hover'],
    extend: {},
  },
  plugins: [],
}
