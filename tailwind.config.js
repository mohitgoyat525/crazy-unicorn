/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "custom-2xl": "22px",
        "custom-7xl": "70px",
        "custom-xl": "18px",
        "custom-4xl":"40px",
      },
      fontFamily: {
        pinkyUnicorn: ["pinky-unicorn", "sans-serif"],
      },
    },
  },
  plugins: [],
};

