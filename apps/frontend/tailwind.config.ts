import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        slamon: '#FF8682',
        mint: '#8DD3BB',
        black: '#112211',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Primary font
        oswald: ['Oswald', 'sans-serif'], // Secondary font
      },
    },
  },
  plugins: [],
} satisfies Config;
