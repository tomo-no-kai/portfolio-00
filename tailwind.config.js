/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./works.html",
    "./src/**/*.{js,ts}",
    "./public/**/*.{html,js}"
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

