/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#219C90',
      'danger': '#ef4444',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'secondary': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Comfortaa', 'sans-serif'],
      serif: ['Comfortaa', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/typography'),
    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms'),
    // eslint-disable-next-line no-undef
    require('@tailwindcss/aspect-ratio'),
    // eslint-disable-next-line no-undef
    require('@tailwindcss/container-queries'),
  ],
}

