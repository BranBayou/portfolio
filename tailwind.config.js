/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aquab: '#00adb5',
        darkg: '#222831',
        darkw: '#393e46',
        lightw: '#eeeeee',
        darkt: '#2d333b',
      },
      width: {
        fof: '45%',
        fif: '55%',
      },
      fontSize: {
        xxs: '.5rem',
      },
    },
  },
  plugins: [],
}