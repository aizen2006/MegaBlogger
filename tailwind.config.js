/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FA9A91',
        secondary: '#B8A9CA',
        accent: '#FADDA3',
        background: '#FDF0DA',
        text: '#4A4A4A',
        uiBlue: '#40D2EA',
        uiMint: '#B3E0C6',
      },
    },
  },
  plugins: [],
}

