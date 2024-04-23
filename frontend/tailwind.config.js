/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"], // specifying the content to be processed by Tailwind CSS
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

