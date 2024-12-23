/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        headings: ["Cormorant Garamond"],
        subheading: ["Libre Baskerville"],
        general: ["Playfair Display"]
      }
    },
  },
  plugins: [],
}