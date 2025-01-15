
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": "1536px",
      customxl: "1375px",
      xlg: "1050px",
      lg: "1024px",
      md: "770px",
      sm: "600px",
    },
    extend: {
      backgroundImage: {
        // "hero-bg": "url('/src/assets/images/webp/hero-bg.webp')",
        // "faq-bg": "url('./assets/images/webp/faq-bg.webp')",
        // "team-bg": "url('./assets/images/webp/team-section-bg.webp')",
        // "ourStory-bg":"url('/src/assets/images/png/our-story-bg.png')",
        "phase-bg":"url('/src/assets/images/png/phase-bg-cloud-img.png')"
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
    },
  },
  plugins: [],
};

