/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': { 'min': '100px', 'max': '420px' },
      'sm': { 'min': '421px', 'max': '600px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }
  
      'md': { 'min': '601px', 'max': '1023px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }
  
      'lg': { 'min': '1024px', 'max': '1480px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
      'xl': { 'min': '1480px', 'max': '1800px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
      '2xl': { 'min': '1801px' },
      // => @media (min-width: 1536px) { ... }
    },
  },
  
  plugins: [],
}