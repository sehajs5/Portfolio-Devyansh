/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ["Forum"],
        'secondary': ["Zen Loop"],
        'emphasis': ["Fleur De Leah"],
        'content': ["Libre Franklin"]
      },
      colors:{
        'main': "#FFBD73",
        'content': "#000B58",
        'important': "#5C2FC2",
        'oneMore': '#1F509A'
      }
    },
  },
  plugins: [],
}

