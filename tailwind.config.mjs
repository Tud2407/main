/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        tudor: {
          green: "#0E8F78",
          deep: "#064F46",
          dark: "#033B35",
          peach: "#FFC49D",
          cream: "#FFF7EF",
          soft: "#F5EFE7",
        },
      },
      fontFamily: {
        sans: ["Inter", "Manrope", "system-ui", "sans-serif"],
        display: ["Sora", "Manrope", "system-ui", "sans-serif"],
      },
    },
  },
};
