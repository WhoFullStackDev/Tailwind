/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        21: "6rem",
        22: "3rem",
        13: "13px",
        "px-8": "8px",
        "px-100": "100px",
      },
    },
  },
  plugins: [],
};
