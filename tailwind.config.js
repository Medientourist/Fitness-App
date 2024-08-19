module.exports = {
  content: ["./src/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#202430",
        medium: "#3A4151",
        light: "#FBFBFB",
      },
      backgroundImage: {
        "cyan-to-yellow-tl-br":
          "linear-gradient(to bottom right, #F5FFA0, #3EF3E8)",
        "cyan-to-yellow-l-b":
          "linear-gradient(to right, rgb(62, 243, 232), rgb(245, 255, 160))",
        "orange-to-peach-tl-br":
          "linear-gradient(to bottom right, #FFD162, #FF99C3)",
        "orange-to-peach-l-r": "linear-gradient(to right, #FFD162, #FF99C3)",
        "cyan-to-blue-tl-br":
          "linear-gradient(to bottom right, #3EF3E8, #3A4AE4)",
        "cyan-to-blue-l-r": "linear-gradient(to right, #3EF3E8, #3A4AE4)",
      },
      fontFamily: {
        standard: ["Poppins"],
      },
    },
  },
  plugins: [],
};
