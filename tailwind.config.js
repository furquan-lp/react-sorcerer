/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'nord0': '#2e3440',
      'nord1': '#3b4252',
      'nord2': '#434c5e',
      'nord3': '#4c566a'
    },
    extend: {},
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  },
}

