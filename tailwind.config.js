/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        md: "3px 4px 13px 0px rgba(0, 0, 0, 0.10)",
      },
      borderRadius: {
        md: "15px",
      },
      fontFamily: {
        rat: "'Montserrat', sans-serif",
        work: "'Work Sans', sans-serif",
      },
    },
  },
  plugins: [],
};
