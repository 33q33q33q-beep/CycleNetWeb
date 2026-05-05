/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          accent: "#E5B80B",
          "accent-hover": "#D4A809",
          dark: "#0A0A0A",
          "dark-card": "#141414",
          "dark-surface": "#1A1A1A",
          "gray-primary": "#262626",
          "gray-secondary": "#525252",
          "gray-muted": "#737373",
          "gray-light": "#A3A3A3",
          "off-white": "#F5F5F5",
        },
        fontFamily: {
          sans: ['"Noto Sans JP"', 'sans-serif'],
          display: ['"Montserrat"', '"Noto Sans JP"', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }