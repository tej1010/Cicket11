/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#EEC76A',
        secondary: '#956C2E',
        dark: {
          DEFAULT: '#000000',
          lighter: '#1A1A1A',
          light: '#262626'
        }
      }
    },
  },
  plugins: [],
};