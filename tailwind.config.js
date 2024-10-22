/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Specify paths to your React components
    './public/index.html' // Add this if your index.html file uses Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
