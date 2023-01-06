/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        M_Plus: ["'M PLUS Rounded 1c', sans-serif"],
        Varela_Round: ["'Varela Round', sans-serif"]
      },
      colors: {
        'theme_dark': "",
        'link_light': "#adb6b9",
        'link_light_hover': "#fff",
        'link_dark': "#6a787c",
        'link_dark_hover': "#384047",
        'theme_font_dark': '#40484a',
      }
    },
  },
  plugins: [],
}
