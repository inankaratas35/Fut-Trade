/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gaming: {
          dark: '#121212',
          slate: '#1E1E24',
          neon: '#00F0FF',
          gold: '#FFD700',
        }
      }
    },
  },
  plugins: [],
}
