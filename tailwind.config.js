/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DED9E2",
        secondary: "#FFD166",
        accent: "#F45D01",
        info: "#00A7E1",
        background: "#0D0A0B",
      },
    },
  },
  plugins: [],
};
