/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px", // same as max-w-7xl
      },
    },

    extend: {
      colors: {
        primary: {
          DEFAULT: "#6D28D9", // purple
          light: "#8B5CF6",
          dark: "#5B21B6",
        },
        secondary: {
          DEFAULT: "#F97316", // orange
          light: "#FB923C",
          dark: "#EA580C",
        },
        neutral: {
          900: "#0F172A",
          800: "#1E293B",
          700: "#334155",
          600: "#475569",
        },
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },

      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};