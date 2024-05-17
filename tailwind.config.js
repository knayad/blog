/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0000ff",
        neon: {
          green: "#00ff00",
          red: "#ff0000",
        },
        fontFamily: {
          opensans: ["'Open Sans'", "sans-serif"],
          sansita: ["'Sansita'", "sans-serif"],
        },
      },
    },
  },
  plugins: [],
};
