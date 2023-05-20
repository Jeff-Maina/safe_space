/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bodoni : "Bodoni Moda",
        sans : "Source Sans Pro",
        hara : "HARA"
      },
      colors: {
        'lime' : "#cfdcc8",
        'light-green': '#4D6754',
        'medium-green': '#246532',
        'dark-green': '#173320',
        'custom-white': '#FFF8ED'
      }
    },
  },
  plugins: [],
}
