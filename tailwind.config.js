/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      colors: {
        smvit: {
          primary: '#0b3d91',
          accent: '#0fb7a9',
          coral: '#ff9f68',
          cream: '#fef9f3',
          slate: '#0f172a',
        },
      },
      boxShadow: {
        glow: '0 20px 60px rgba(15, 183, 169, 0.25)',
      },
      backgroundImage: {
        'grid-overlay':
          'linear-gradient(90deg, rgba(15, 61, 145, 0.06) 1px, transparent 1px), linear-gradient(0deg, rgba(15, 61, 145, 0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}

