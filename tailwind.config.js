/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homeSection1': "url('./src/assets/HomeBG1.png')"
      }
    },
  },
  plugins: [require('tailwind-scrollbar'),],
}

