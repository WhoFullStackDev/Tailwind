/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        kt: "600px",
        md: "800px",
        lg: "1100px",
        xl: "1200px",
      },
    },
  },
  plugins: [],
};
