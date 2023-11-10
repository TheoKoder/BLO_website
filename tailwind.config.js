/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {

    fontFamily:
        {
          alata:[ "Alata", 'sans-serif'],
          roborto:['Roboto', 'sans-serif'],
          oswald: ['Oswald', 'sans-serif'],
          poppins:['poppins, sans-serif']
        },
        container: {
          center: true,
          padding: '2rem',
        },
        screens: {
          'sm': '640px',
          // => @media (min-width: 640px) { ... }
    
          'md': '768px',
          // => @media (min-width: 768px) { ... }
    
          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }
    
          'xl': '1280px',
          // => @media (min-width: 1280px) { ... }
    
          '2xl': '1536px',
          // => @media (min-width: 1536px) { ... }
        },
    extend: {
      colors:{
      primary:"#1565D8",
      dark:{
        soft: "#0D2436",
        hard: "#183B56",

      }
    }
    },
  },
  plugins: [],
}

