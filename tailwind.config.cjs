/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./index.html",
	"./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        'primary-orange': 'hsl(35, 77%, 62%)',
        'primary-red': 'hsl(5, 85%, 63%)',
        'neutral-white': 'hsl(36, 100%, 99%)',
        'neutral-grayish-blue': 'hsl(233, 8%, 79%)',
        'neutral-darkish-blue': 'hsl(236, 13%, 42%)',
        'neutral-very-dark-blue': 'hsl(240, 100%, 5%)'
      }
    },
  },
  plugins: [],
}
