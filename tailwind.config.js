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

    'mobil': { 'min': '1px', 'max': '480px' },
    // => @media (min-width: 1px and max-width: 480px) { ... }

    'pad': { 'min': '480px', 'max': '768px' },
    // => @media (min-width: 480px and max-width: 768px) { ... }

    'netbook': { 'min': '768px', 'max': '1024px' },
    // => @media (min-width: 768px and max-width: 1024px) { ... }

    'notebook': { 'min': '1024px', 'max': '1536px' },
    // => @media (min-width: 1024px and max-width: 1536px) { ... }

    'PK': { 'min': '1536px', 'max': '1920px' },
    // => @media (min-width: 1536px and max-width: 1920px) { ... }

  },
  },
  plugins: [],
}
