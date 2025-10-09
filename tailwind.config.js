/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',   // м’який синій
        accent: '#65a30d',    // оливковий
        calm: '#fef9c3',      // теплий фон
      },
      fontFamily: {
        sans: ['"Nunito"', 'sans-serif'],
      },
    },
  },
  content: ['./src/**/*.{html,js}'],
};
