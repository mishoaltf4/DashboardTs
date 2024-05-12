/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // light styles
        "light-component": "#fff",
        "light-body": "#F5F6FA",
        "light-text": "#202224",

        // dark styles
        "dark-component": "#273142",
        "dark-body": "#1B2431",
        "dark-text": "#fff",

        // buttons
        "active-btn": "#4880FF",
      },
      fontFamily: {
        nunitoSans: "Nunito Sans, sans-serif",
      },

      backgroundImage: {
        "product-pattern": "url('./public/Pattern.png')",
      },
    },
  },
  plugins: [],
};
