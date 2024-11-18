/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
"./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./const/**/*.{js,ts,jsx,tsx}",
    "./fonts/**/*.{js,ts,jsx,tsx,ttf}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],

  content: ["./dist/**/*.html"],
  theme: {
    extend: {
      colors: {
        
  },
  plugins: [],
},

  }

}