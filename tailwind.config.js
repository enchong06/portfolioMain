/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {

  
  
  extend: {
      keyframes: {
        'float': {
          '0%, 100%':{ marginTop:"0px"},
          '50%':{ marginTop:"-25px"}
        }
      },
      animation: {
        'float': 'float 2s infinite',
      }
    },
    
  },
    
  plugins: [
  ],
}


