/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['Bebas Neue', 'Impact', 'Arial Black', 'sans-serif'],
        courier: ['Courier Prime', 'Courier New', 'monospace'],
      },
      animation: {
        flicker: 'flicker 4s infinite',
        glow: 'glow 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'scale-in': 'scaleIn 0.8s ease-out forwards',
        'bounce-custom': 'bounce 2s ease-in-out infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '41%': { opacity: '0.8' },
          '42%': { opacity: '1' },
          '43%': { opacity: '0.9' },
          '45%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        glow: {
          '0%, 100%': {
            textShadow:
              '0 0 20px rgba(220,38,38,0.5), 0 0 40px rgba(220,38,38,0.3), 0 0 60px rgba(220,38,38,0.2)',
          },
          '50%': {
            textShadow:
              '0 0 30px rgba(220,38,38,0.8), 0 0 60px rgba(220,38,38,0.5), 0 0 90px rgba(220,38,38,0.3)',
          },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
