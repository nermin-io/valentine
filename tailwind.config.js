const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-cursive)", ...fontFamily.sans],
      },
      colors: {
        pink: {
          DEFAULT: "var(--pink)",
          light: "var(--light-pink)",
          dark: "var(--dark-pink)",
        },
        offWhite: "var(--off-white)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
