/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ".src/**"
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        splash: 'var(--color-splash)',
        text: 'var(--color-text)',
        frame: 'var(--color-frame)',
        prom1: 'var(--color-prom1)',
        prom2: 'var(--color-prom2)',
      },
    },
  },
  plugins: [],
}