/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    
  ],
  theme: {
    extend: {
      colors: {
        'deep-red':'#d62828',
        'deep-blue':'#003049',
        'deep-orange':'#f77f00',
        'light-orange':'#fcbf49',
        'light-orange-2': '#e9e2b7',
        'light-orange-2': 'rgb(250, 246, 209)',
      }
    },
    
  },
  plugins: [],
}
