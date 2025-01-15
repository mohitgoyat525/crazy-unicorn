/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pinkyUnicorn: ["pinky-unicorn", "sans-serif"],
      },
      screens: {
        xlg: '1050px',
        lg: '1025px',
        md: '770px'
      },
    },
  },
  plugins: [],
};

