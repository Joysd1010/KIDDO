/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    stroke: {
      'sm': '1',
      
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
