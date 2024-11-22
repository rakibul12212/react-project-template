/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1200px",
      },

      backgroundImage: {
        bgScreen: "url(/bg1.jpg)",
      },
    },
  },
  plugins: [],
};
