/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
      "gray-900": "hsl(0, 0%, 8%)",
      "gray-800" : "hsl(0, 0%, 12%)",
      "gray-700" : "hsl(0, 0%, 20%)",
      "Green": "hsl(75, 94%, 57%)"
      }
    },
  },
  plugins: [],
}

