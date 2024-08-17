/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mintLightGray: "#9f9d9f",
        mintBrown: "#8c6b42",
        mintWhite:"#fefaff",
        mintBlack:"#353937"
      }
    },
  },
  plugins: [],
}

