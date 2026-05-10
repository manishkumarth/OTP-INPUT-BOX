/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        night: '#050816',
        aurora: '#8b5cf6',
        cyan: '#06b6d4',
      },
      boxShadow: {
        glass: '0 24px 80px rgba(0, 0, 0, 0.32)',
      },
    },
  },
  plugins: [],
};
