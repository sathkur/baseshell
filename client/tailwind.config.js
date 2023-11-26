/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        'theme-dark': "rgb(55 65 81)",

        'theme_font_dark': '#40484a',
        'theme_font_darker': '#000',
        'theme_font_light': "#D3D3D3",
        'theme_font_lighter': "#fff",


        'nav_menu': '#6a787c',
        'nav_menu_hover': "#384047",
        'nav_menu_light_hover': "#fff",

      }
    },
  },
  plugins: [],
}
