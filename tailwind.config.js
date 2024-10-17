/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        darkGrey: '#282828',
        yellow: '#F69425',
        blue: '#67AADE',
        red: '#CD320C',
        offWhite: '#F3E3C1',
        green: '#2B7723',
      },
    },
  },
  plugins: [],
};
