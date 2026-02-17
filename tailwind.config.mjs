/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // This makes the whole site look elegant and "book-like"
        sans: ['"Cormorant Garamond"', 'serif'], 
        // This makes your code/dates look technical
        mono: ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}