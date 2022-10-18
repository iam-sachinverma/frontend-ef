/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#fff',
        'blue': '#002238',
        'green': '#03FF1B',
        'gray': '#f5f5f5',
        'lightblue': '#ADD8E6',
        'lightgreen': '#D7f4D2',
        'yellow': '#E6AF2E',
        'beige': 'rgb(250 253 243/1)',
        'bermuda': '#78dcca',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}