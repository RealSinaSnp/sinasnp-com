module.exports = {
  darkMode: 'class', // Enables class-based dark mode
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '690px'}
      },
    },
  },
  plugins: [],
};
