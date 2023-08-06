/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      white: 'hsl(0, 0%, 100%)',
      grey: 'hsl(231, 7%, 60%)',
      charcoalGrey: 'hsl(235, 18%, 26%)',
      darkGrey: 'hsl(234, 29%, 20%)',
    },
  },
  plugins: [],
};
