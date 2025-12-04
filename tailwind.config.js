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
    },
  },
  plugins: [],
};

export default config;
