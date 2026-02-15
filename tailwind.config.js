/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts}"],
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

