/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4287f5",
        secondary: "#d9454f",
        tertiary: "#aa4981",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
