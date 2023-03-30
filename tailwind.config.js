/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2CAAE1',
          50: '#DBF1FA',
          100: '#B8E2F5',
          200: '#94D4F0',
          300: '#70C6EB',
          400: '#51B9E6',
          500: '#2CAAE1',
          600: '#1C92C4',
          700: '#16749C',
          800: '#115674',
          900: '#0B3C50',
          950: '#061E28'
        }
      }
    }
  },
  plugins: []
}
