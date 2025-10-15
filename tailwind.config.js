/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/templates/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🖤 Black & White Theme
        blackWhite: {
          background: "#FFFFFF",
          text: "#1A1A1A",
          accent: "#D4AF37",
          secondary: "#F5F5DC",
          cardBg: "#FAFAFA",
          border: "#E5E5E5",
        },
        // 🌿 Earthy Warm Theme
        earthyWarm: {
          background: "#F5F1E8",
          text: "#3E2723",
          accent: "#8D6E63",
          secondary: "#D7CCC8",
          cardBg: "#EFEBE9",
          border: "#BCAAA4",
        },
        // ⚪ Modern Minimal Theme
        modernMinimal: {
          background: "#F5F5F5",
          text: "#2C2C2C",
          accent: "#000000",
          secondary: "#E0E0E0",
          cardBg: "#FFFFFF",
          border: "#BDBDBD",
        },
      },
    },
  },
  plugins: [],
};
