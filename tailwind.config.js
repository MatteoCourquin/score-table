/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#212857",
        secondary: "#F7DEA7",
      },
      gridTemplateColumns: {
        "template": "120px 1fr 1fr",
      }
    },
  },
  plugins: [],
}
