/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors:{
        primary : "#0C50CA"
      },
      screens: {
        'xs' : "325px",
        // => @media (min 325px and max 640px)
        'Nav': '1530px',
        // => @media (min-width: 1355px) { ... }
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
        '3xl': '1792px',
        // => @media (min-width: 1536px) { ... }
        '4xl': '2048px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}