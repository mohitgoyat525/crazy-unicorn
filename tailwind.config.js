module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "roadmap-left-bg":
          "url(/src/assets/images/webp/roadmap-cloud-img-one.webp)",
        "roadmap-right-bg":
          "url(/src/assets/images/webp/roadmap-cloud-img-two.webp)",
        "roadmap-left-mobile":
          "url(/src/assets/images/webp/roadmap-cloud-one-mobile.webp)",
        "roadmap-right-mobile":
          "url(/src/assets/images/webp/roadmap-cloud-two-mobile.webp)",
        "phase-bg": "url('/src/assets/images/png/phase-bg-cloud-img.png')",
        "bg-header-line": "url('/src/assets/images/png/bg-header-line.png')",
        "team-card":
          "linear-gradient(100.7deg, rgba(182, 42, 255, 0.5) -82.68%, rgba(255, 13, 242, 0.5) 143.2%)",
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
      backgroundSize: {
        "roadmap-clouds": "844px 629px",
        "roadmap-clouds-md": "345px 231px",
      },
      screens: {
        "2xl": "1536px",
        xl: "1140px",
        customxl: "1375px",
        xlg: "1050px",
        lg: "1025px",
        md: "770px",
        sm: "600px",
      },
      colors: {
        gray: "#4d4d4d",
        purple: "#b62aff",
        "dark-purple": "#ff0df2",
        "off-white": "#FDF3FC",
      },
    },
  },
  plugins: [],
};
