/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: { c: "0 1px 6px rgb(0,0,0,0.12)" },
    },
  },
  plugins: [],
};
