/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #10b981, #14b8a6)",
        "custom-gradient-2": "linear-gradient(to left, #10b981, #06b6d4)",
        "card-gradient": "linear-gradient(to right, #14b8a6, #10b981)",
      },
      colors: {
        navbarColor: "#ffffff",
        btnColor: "#10b981",
        linkColor: "#059669",
      },
      boxShadow: {
        custom: "0 0 15px rgba(0, 0, 0, 0.3)",
        right: "10px 0px 10px -5px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat"],
      },
    },
  },

  variants: {
    extend: {
      backgroundImage: ["responsive"],
    },
  },

  plugins: [],
};