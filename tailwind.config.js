/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sculk-bg': '#061014',
        'sculk-teal': '#00A7A5',
        'sculk-dark-teal': '#054c5c',
        'deepslate': '#3e4141',
        'deepslate-dark': '#2d2f2f',
        'warden-glow': '#0ab2b0',
      },
      fontFamily: {
        minecraft: ['"Pixelify Sans"', 'sans-serif'],
      },
      animation: {
        'warden-float': 'wardenFloat 20s ease-in-out infinite',
        'sculk-pulse': 'sculkPulse 3s ease-in-out infinite',
        'warden-walk': 'wardenWalk 25s linear infinite',
      },
      keyframes: {
        wardenFloat: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(10vw, -5vh) scale(1.05)' },
          '50%': { transform: 'translate(20vw, 5vh) scale(0.95)' },
          '75%': { transform: 'translate(-5vw, -10vh) scale(1)' },
        },
        sculkPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        wardenWalk: {
          '0%': { transform: 'translateX(0) scaleX(1)', opacity: '0' },
          '5%': { opacity: '1' },
          '45%': { transform: 'translateX(120vw) scaleX(1)', opacity: '1' },
          '50%': { transform: 'translateX(120vw) scaleX(-1)', opacity: '0' },
          '55%': { opacity: '1' },
          '95%': { transform: 'translateX(-20vw) scaleX(-1)', opacity: '1' },
          '100%': { transform: 'translateX(-20vw) scaleX(1)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
