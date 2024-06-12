module.exports = {
  content: ["./src/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#202430",
        medium: "#3A4151",
        light: "#FBFBFB",
        "gradient-very-light-pink": "#FF99C3",
        "gradient-light-orange": "#FFD162",
        "gradient-pale-yellow": "#F5FFA0",
        "gradient-bright-cyan": "#3EF3E8",
        "gradient-bright-blue": "#3A4AE4",
        "gradient-light-blue": "#3B85E6",
      },
      linearGradientColors: {
        peach: ["#FF99C3", "#FFD162"],
      },
      fontFamily: {
        standard: ["Poppins"],
      },
    },
  },
  plugins: [],
};
