/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // make sure ts/tsx are included
  ],
  theme: {
    extend: {
      // animation: {
      //   scroll: 'scroll 20s linear infinite',
      // },
      // keyframes: {
      //   scroll: {
      //     '0%': { transform: 'translateY(0)' },
      //     '100%': { transform: 'translateY(-50%)' },
      //   },
      // },
    },
  },
  plugins: [],
};
