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
      backgroundImage: {
        "faq-bg": "url('./assets/images/webp/faq-bg.webp')",
        "team-bg": "url('./assets/images/webp/team-section-bg.webp')",
      },
    },
  },
  plugins: [],
};

