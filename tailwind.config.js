/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "sips-light-blue": "#98c5e9",
        "sips-dark-blue": "#001838",
        "sips-orange": "#ea580c",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
