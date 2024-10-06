/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

const colors = {
  ...defaultTheme.colors,
  // primary: {
  //   900: "#192236",
  //   800: "#2f384a",
  //   700: "#464e5e",
  //   600: "#5e6472",
  //   500: "#757a86",
  //   400: "#8c909a",
  //   300: "#a3a6ae",
  //   200: "#babcc2",
  //   100: "#d1d2d6",
  //   50: "#e8e8ea",
  //   0: "#ffffff",
  // },
  primary: "#00793A",
  primarycontent: "#7cfeb7",
  primarylight: "#01ad4f",
  primarydark: "#014721",
  brand: "#7d8656",
  secondary: "#74a87f",
  golden: '#006962',  // Example custom secondary color (golden)
  // Add your custom color here
  cream: "#fff7d6"

};

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': 'rem',
      'full': '9999px',
      'large': '12px',
    },
    extend:  {
      scale: {
        '102': '1.02',  // Custom scale value
        '103': '1.03',  // Add as many as you need
      },
      colors, // Extend the colors with the custom colors
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateY(-50px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        slideIn: 'slideIn 0.5s ease-out',
      },
      // Add custom utilities here
      scrollbar: {
        hide: {
          /* Hide scrollbar for Chrome, Safari and Opera */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* Hide scrollbar for IE, Edge and Firefox */
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
    // Add the plugin to use the custom utilities
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* Hide scrollbar for Chrome, Safari and Opera */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* Hide scrollbar for IE, Edge and Firefox */
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      });
    },
  ],
  daisyui: {
    themes: ["light", "dark"], // Configure daisyUI themes here
  },
}