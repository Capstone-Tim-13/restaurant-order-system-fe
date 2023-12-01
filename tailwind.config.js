/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'inner-1': '0px -45px 35px -60px rgba(0,0,0,0.23) inset',
      },
      colors: {
        primary: '#4D0F27',
        secondary: '#F0AF9F',
        white: '#FCFCFC',
        black: '#000000',
        brown: '#783525',
        surface: '#737373',
        orange: '#E25E3E',
        greenPublish: '#009735',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
