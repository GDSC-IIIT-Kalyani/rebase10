/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    colors:{
      brand:"#0541FB",
      black:"#000000",
      white:"#FFFFFF",
    },
    extend: {
      fontFamily: {
        primary: ["Schoolbell"], 
        secondary: ["Brother"],
        heading: ["Komika Slick"],
      },
      dropShadow: {
        brand: [

          "-0.5px -0.5px 0px rgba(5,65,251,1)",
          "1px -2px 0px rgba(5,65,251,1)",
          "-1px 1px 0px rgba(5,65,251,1)",
          "5px 5px 0px rgba(5,65,251,1)",
        ],
      }
    },
  },
  
  plugins: [],
}

