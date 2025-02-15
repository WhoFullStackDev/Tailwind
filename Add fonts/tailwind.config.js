/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        guerrilla: ["Protest Guerrilla", "sans-serif"],
        playwrite: ["Playwrite CU", "cursive"],
      },
    },
  },
  plugins: [],
};
