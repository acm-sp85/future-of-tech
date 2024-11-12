/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scrollbar: {
        hide: {
          overflow: "hidden",
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        italiana: ["Italiana", "sans-serif"],
        jura: ["Jura", "sans-serif"],
      },
      colors: {
        background: "#282828",
        foreground: "var(--foreground)",
        darkGrey: "#282828",
        yellow: "#F69425",
        blue: "#67AADE",
        red: "#CD320C",
        offWhite: "#F3E3C1",
        green: "#2B7723",
      },
      height: {
        5000: "5000px",
      },
      fontSize: {
        200: "200px",
        128: "128px",
        96: "96px",
        70: "70px",
        64: "64px",
        32: "32px",
        16: "16px",
        14: "14px",
        12: "12px",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
