/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#005BCD',
          dark: '#004BA8',
        },
        accent: {
          DEFAULT: '#109A2C',
          light: '#14B835',
        },
        dark: {
          DEFAULT: '#071E3B',
          light: '#0C2D4F',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        '1400': '1400px',
      },
    },
  },
  plugins: [],
}
