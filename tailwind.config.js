/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      colors: {
        smvit: {
          primary: '#0b3d91',
          primaryDark: '#082a6b',
          primaryLight: '#1e5bb8',
          accent: '#0fb7a9',
          accentLight: '#2dd4bf',
          coral: '#ff9f68',
          cream: '#fef9f3',
          slate: '#0f172a',
          gold: '#fbbf24',
        },
      },
      boxShadow: {
        glow: '0 20px 60px rgba(15, 183, 169, 0.25)',
        'glow-lg': '0 30px 80px rgba(11, 61, 145, 0.3)',
        'glow-accent': '0 20px 60px rgba(15, 183, 169, 0.4)',
        'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'grid-overlay':
          'linear-gradient(90deg, rgba(15, 61, 145, 0.06) 1px, transparent 1px), linear-gradient(0deg, rgba(15, 61, 145, 0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}

