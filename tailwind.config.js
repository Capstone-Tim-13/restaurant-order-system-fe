/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
