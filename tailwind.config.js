const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
         keyframes: {
              marquee: {
      "0%": { transform: "translateX(0)" },
      "100%": { transform: "translateX(-100%)" }
    }
  },
  animation: {
    marquee: "marquee 30s linear infinite"
  },
      colors: {
        navy: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d6fe',
          300: '#a5b8fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#1e3a8a',
          950: '#1e1b4b',
        },
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#d4af37',
          700: '#b8860b',
          800: '#9a7310',
          900: '#7c5d0f',
          950: '#4a3508',
        }
      },
      fontFamily: {
        sans: ['Vazirmatn', 'Inter', ...defaultTheme.fontFamily.sans],
      }
    }
  },
  plugins: [],
  
};
