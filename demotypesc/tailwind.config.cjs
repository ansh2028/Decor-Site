// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media' for OS preference
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Example custom colors
      colors: {
        primary: '#4f46e5', // indigo-600
        secondary: '#e11d48', // rose-600
      },
    },
  },
  plugins: [],
};
