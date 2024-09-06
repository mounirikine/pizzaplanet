/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
    fontFamily : {
      'lato':["Rubik", "sans-serif"]
    }
  },
  plugins: [require('daisyui'),],
}

