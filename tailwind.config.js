
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "phase-bg": "url('/src/assets/images/png/phase-bg-cloud-img.png')",
        "team-card": "linear-gradient(100.7deg, rgba(182, 42, 255, 0.5) -82.68%, rgba(255, 13, 242, 0.5) 143.2%)"
      },
      fontSize: {
        "custom-2xl": "22px",
        "custom-7xl": "70px",
        "custom-xl": "18px",
        "custom-4xl": "40px",
      },
      fontFamily: {
        pinkyUnicorn: ["pinky-unicorn", "sans-serif"],
      },
      screens: {
        xlg: '1050px',
        lg: '1025px',
        md: '770px'
      },
      colors: {
        gray: "#4d4d4d",
        purple: "#b62aff",
        'dark-purple': "#ff0df2",
      },
    },
  },
  plugins: [],
};

