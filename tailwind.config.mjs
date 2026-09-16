/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        beige: '#D9BCA3',
        cream: '#F8F6F0',
        creamcard: '#F9F5EF',
        pine: '#15291E',
        ink: '#1C1A16',
      },
      fontFamily: {
        grotesk: ['Outfit', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
