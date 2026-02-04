export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#050505",
          dark: "#0f0f0f",
          surface: "#18181b",
          blue: "#2563EB",
          orange: "#F97316",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Montserrat", "sans-serif"],
      },
    },
  },
};
