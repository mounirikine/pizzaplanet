/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
    fontFamily : {
      'lato':["Tajawal", "sans-serif"]
    }
  },
  plugins: [require('daisyui'),],
}

