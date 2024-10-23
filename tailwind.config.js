/** @type {import('tailwindcss').Config} */
export default {
  content: [
   "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // font family start 
      fontFamily: {
        'pop': [ 'Poppins'],
        'Podkova': [ 'Podkova'],
        'Frank': [ 'Frank Ruhl Libre'],
      },
      // font family End
      // container start 
      maxWidth: {
        'menuContainer': '1320px',
      },
      // container End 
      // color start  
      colors: {
        'headerBg': '#FAE3B6',
        'btnHover': '#FDBB57',
        'btnBdr': '#FFD687', 
        'counterBg': '#FEECC8', 
        'productBg': '#CFA485', 
        'iconBg': '#FFAF37', 
        'textBg': '#C4C4C4', 
        // color end  
    },
    
    },
  },
  plugins: [],
}

