/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        border: "border 6s linear infinite",
      },
      keyframes: {
        border: {
          to: { "--border-angle": "360deg" },
        },
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateY(10px) translateX(10px)" },
          "50%": { transform: "translateX(0) translateY(20px)" },
          "75%": { transform: "translateY(10px) translateX(-10px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        slide: "slide 5s linear infinite",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        slideUp: "slideUp linear",
      },
      keyframes: {
        slideLoop: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slideLoop: "slideLoop 15s infinite",
      },
    },
  },

  plugins: [],
};
export default config;
