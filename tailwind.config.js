/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff4f1',
          100: '#ffe6de',
          200: '#ffd0be',
          300: '#ffae91',
          400: '#ff7f54',
          500: '#e84d22', // The core branding color from the image
          600: '#d33e1d',
          700: '#b13010',
          800: '#8e260e',
          900: '#73210f',
        },
        navy: {
          900: '#0B1120',
          950: '#020617',
        }
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
       backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
