/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,html,css}', './*.js'],
  theme: {
    extend: {
      colors: {
        azul: '#0B5CAB',
        'azul-escuro': '#0A2E4D',
        'azul-gelo': '#EAF4FB',
        'cinza-texto': '#5B6B79',
        ciano: '#4FC3F7',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
