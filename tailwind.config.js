/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "scale-up": "scaleUp 1s linear 500ms",
      },
      keyframes: {
        scaleUp: {
          "0%": {
            scale: 0,
            opacity: 0,
          },
          "100%": {
            scale: 1,
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
