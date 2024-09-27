/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        "blue-marguerite": {
          50: "#ecf0ff",
          100: "#dde2ff",
          200: "#c2caff",
          300: "#9ca6ff",
          400: "#7577ff",
          500: "#6c63ff", // main
          600: "#5036f5",
          700: "#452ad8",
          800: "#3825ae",
          900: "#312689",
          950: "#1f1650",
        },
        "dark-purple": {
          300: "#7E6ECF",
          400: "#5540BF",
          500: "#3F2F8E",
          600: "#291F5C",
          700: "#140F2D", // main
        },
        "dark-slate-green": {
          300: "#7E6ECF",
          400: "#5540BF",
          500: "#3F2F8E", // main
          600: "#291F5C",
          700: "#140F2D",
          800: "#0E0A1F",
        },
        vanilla: {
          200: "#F5EE9E", // main
        },
        tomato: {
          300: "#F48B71",
          400: "#F06543", // main
          500: "#EC3E13",
          600: "#BD320F",
          700: "#8E250B",
        },
        babyPowder: "#FFFFFC",
      },
    },
  },
};
