module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: { 100: "#dad7cd", 800: "#344e41", "800_01": "#3a5a40", "800_7a": "#3a5a407a" },
        black: { "900_7a": "#0000007a" },
        white: { A700: "#ffffff" },
        gray: { 300: "#e2e2e2", 500: "#a3b18a" },
      },
      boxShadow: {},
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
