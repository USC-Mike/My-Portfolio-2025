/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Mono", "sans-serif"], // Custom font
      },
      colors: {
        primary: "#1c1c1c", // Dark text color
        secondary: "#f5f5f5", // Light background
        accent: "#0ea5e9", // Light blue
      },
    },
  },
  plugins: [],
};
