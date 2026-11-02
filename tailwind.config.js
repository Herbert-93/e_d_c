/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colours taken from the Elegant Dental Care logo
        navy: "#000070",          // logo navy
        'navy-deep': "#00003F",   // footer / dark sections
        leaf: "#38B048",          // logo green (fills, accents on dark)
        'leaf-dark': "#1E7E34",   // green for text on light backgrounds (AA contrast)
        'leaf-light': "#8FD99A",
        mist: "#F2F8F4",          // soft green-tinted page background
        'mist-dark': "#E1EEE5",
        ink: "#0C1033",           // body text
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'elegant': '0 6px 30px rgba(0, 0, 112, 0.14)',
        'card': '0 2px 20px rgba(0, 0, 112, 0.07)',
      },
    },
  },
  plugins: [],
};
