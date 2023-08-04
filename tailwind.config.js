/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      backdropBlur: {
        'none': '0',
        'xs': '1px',
        'sm': '2px',
        'DEFAULT': '4px',
        'md': '8px',
        'lg': '16px',
        'xl': '32px',
        '2xl': '64px',
        '3xl': '128px',
        '4xl': '256px',
        '5xl': '512px',
      },
      webkitBackdropBlur: {
        'none': '0',
        'xs': '1px',
        'sm': '2px',
        'DEFAULT': '4px',
        'md': '8px',
        'lg': '16px',
        'xl': '32px',
        '2xl': '64px',
        '3xl': '128px',
        '4xl': '256px',
        '5xl': '512px',
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        background: "#161616",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",

      },
      fontFamily: {
        'sans': ["Inter", "Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "490px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};