/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       boxShadow: {
        'neumorphic': '7px 7px 15px #bebebe, -7px -7px 15px #ffffff',
        'neumorphic-inset': 'inset 7px 7px 15px #bebebe, inset -7px -7px 15px #ffffff',
      }
    },
  },
  plugins: [],
}
