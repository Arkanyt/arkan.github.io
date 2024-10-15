/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}", "./src/admin/products/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        arkan: "repeat(auto-fit, minmax(20.625rem, 1fr))",
      },
      fontFamily: {
        "font-Arial": ["Arial"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
