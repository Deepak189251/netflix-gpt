/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '360px',
      'sm': '520px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px', // Default breakpoints
      'custom': '1600px', // Custom breakpoint
    },
    extend: {
     
    },
  },
  plugins: [],
}

