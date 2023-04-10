/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    screens: {
      sd: { max: "700px" },
      sm: { max: "545px" },
      ss: { max: "899px" },
      ls: { max: "400px" },
    },
  },
  plugins: [],
};
