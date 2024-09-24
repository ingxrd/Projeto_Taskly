/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'cor-header': '#FFF5EA',
        'cor-botaoheader': '#D0F032',
        'cor-footer': '#D0F032',
        'cor-fundo': '#FFF5EA',
        'cor-fonte': '#FFD800',
        'cor-conquiste': '#2FFF2F',
        'cor-review': '#FF00F5',
        'cor-todo': '#FC95B4',
        'cor-doing': '#FFC23D',
        'cor-done':'#15B569',
        'cor-addtask': '#EB7B26' 
      },
      boxShadow: {
        'sombra-botao': '3px 3px 0px rgba(0, 0, 0, 1)', 
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        clash: ['Clash Display', 'sans-serif']
      },
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-stroke"),
    require('@tailwindcss/forms')({
      strategy: 'class', // ou 'base' para estilos globais
    }),  ],
}

