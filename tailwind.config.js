/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bankgothic: ['BankGothic', 'sans-serif'],
      },
      boxShadow: {
        'inner-xl': 'inset 0 4px 8px rgba(0, 0, 0, 0.2)',
        'inner-soft': 'inset 0 0 15px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
};
