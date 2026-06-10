/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.js",
  ],
  safelist: ['hover:text-sub'],
  theme: {
    extend: {
      colors: {
        main: "var(--color-main)",
        sub: "var(--color-sub)",
      },
    },
  },
  plugins: [],
}

