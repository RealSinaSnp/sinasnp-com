/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-100': 'hsl(205, 15%, 58%)',
        'primary-400': 'hsl(215, 25%, 27%)',
        'primary-800': 'hsl(217, 33%, 17%)',
        'primary-900': 'hsl(218, 33%, 9%)',
      },
    },
  },
  plugins: [],
};