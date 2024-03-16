/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#36A3FF",
        background: {
          100: "#2E3039",
          200: "#1F2028",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
