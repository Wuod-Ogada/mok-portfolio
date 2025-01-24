/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          heading: "Bodoni Moda",
          subheading: "Libre Bodoni",
          body: "Shippori Mincho", /*Playfair Display */
          extra: "Playfair Display",
        }
      
    },
  },
  plugins: [],
}

