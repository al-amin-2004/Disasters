/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F26922",
        secondary: "#09090B",
        accent: "#71717A",
      },
      fontFamily: {
        "onest": ['"Onest"' , "sans-serif"],
        "bebasNeue": ['"Bebas Neue"' , "sans-serif"],
      },
      boxShadow: {
        chatBtn: "0px 4px 25px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
}

