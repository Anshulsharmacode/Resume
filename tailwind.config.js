/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom': 'var(--bg-color)',
      },
      textColor: {
        'custom': 'var(--text-color)',
      },
      colors: {
        'primary': 'var(--primary-color)',
      },
    },
  },
  plugins: [],
}

