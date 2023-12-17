/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': '0.5rem',
      },
      colors: {
        'very-easy': '#FFDC5C',
        'easy': '#FFCD19',
        'medium': '#FFAE00',
        'hard': '#FF7B00',
        'very-hard': '#F74444',
      },
      gap: {
        '0.25': '0.0625rem',
      }
    },
  },
  plugins: [],
}