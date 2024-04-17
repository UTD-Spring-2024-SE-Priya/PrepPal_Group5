module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: { 100: "#d9d9d9", 800: "#344e41", "100_01": "#dad7cd", "800_01": "#3a5a40" },
        gray: { 500: "#a3b18a" },
        white: { A700: "#ffffff" },
        black: { "900_7a": "#0000007a" },
      },
      boxShadow: {},
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
