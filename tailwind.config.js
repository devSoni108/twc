/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    maxWidth: {
      '250': '250px',
      '300': '300px',
      '370': '370px',
      '500': '500px',
      '600': '600px',
    },
    minHeight: {
      '300': '300px',
      '400': '400px',
    },
    maxHeight: {
      '500': '500px',
      '700': '700px',
    },
    extend: {

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};