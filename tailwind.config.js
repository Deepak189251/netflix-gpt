/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      radialGradientColors: {
        'custom': ['circle', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.8)']
      }
    },
  },
  plugins: [],
}