/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          dark: "#1e6f9f",
          DEFAULT: "#4ea8de",
        },
        purple: {
          dark: "#5e60ce",
          DEFAULT: "#8284fa",
        },
        gray: {
          700: "#0d0d0d",
          600: "#1a1a1a",
          500: "#262626",
          400: "#333333",
          300: "#808080",
          200: "#d9d9d9",
          100: "#f2f2f2",
        },
        red: {
          DEFAULT: "#e25858",
        },
      },
      fontFamily: {
        sans: ["Inter"],
      },
    },
  },
  plugins: [],
}
