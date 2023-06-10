const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
      },
      colors: {
        primary: "#F57E27",
        primaryshade: "#FFFCFA",
        primaryshade1: "#FFF6F0",
        primaryshade2: "#FFF9F5",
        secondary: "#737373",
        secondaryshade: "#EBEBEB",
        secondaryshade1: "#FAFAFA",
        secondaryshade2: "#FDFDFD"
      },
      boxShadow: {
        "3xl": "0px 0px 24px rgba(0, 0, 0, 0.04)",
        "4xl": "0px 0px 60px rgba(0, 0, 0, 0.02);",
      },
    },
  },
  plugins: [],
};
