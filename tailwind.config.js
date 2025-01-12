/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#FCFCFD",
          card: "#FFFFFF",
          bg: "#FAFBFF",
        },
        positive: "#039855",
        negative: "#D92D20",
        background: "#F2F7FD",
        line: "#D8E1F8",
        primary: {
          DEFAULT: "#3C77FF",
          100: "#86A5FF",
          200: "#6D99FF",
          300: "#9FA5B0",
          400: "#545F71",
        },
        secondary: "#1e1e1e",
        textGray: "#545F71",
      },
    },
  },
  plugins: [],
};
