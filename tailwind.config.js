/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    screens: {

      'mobil': { 'max': '480px' },
      // => @media (min-width: 1px and max-width: 480px) { ... }

      'pad': { 'max': '768px' },
      // => @media (min-width: 480px and max-width: 768px) { ... }

      'netbook': { 'max': '1024px' },
      // => @media (min-width: 768px and max-width: 1024px) { ... }

      'notebook': { 'max': '1536px' },
      // => @media (min-width: 1024px and max-width: 1536px) { ... }

    },
  },
  plugins: [],
}
