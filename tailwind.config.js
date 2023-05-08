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
        'link_light_hover': "#fff",
        'link_dark': '#6a787c',
        'link_dark_hover': "#384047",

        'theme_font_dark': '#40484a',
        'theme_font_light': "rgb(211 211 211)",
        'theme_link_dark': "#6a787c",
        'theme_link_dark_hover': "#384047",
        'theme_link_light': "#fff",
        'theme_link_light_hover': "#fff",
      }
    },
  },
  plugins: [],
}
