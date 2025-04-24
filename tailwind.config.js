/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}", // 🔥 This is critical for your setup
    ],
    theme: {
      extend: {
        screens: {
          '3xl': '1920px', // For 24-inch or ultrawide monitors
        },
      },
    },
    plugins: [],
  };