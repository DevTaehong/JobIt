// @type {import('tailwindcss').Config}
module.exports = {
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
      colors: {
      Primary:"0BAB7C",
      Secondary1:"#C7F4C2",
      Secondary2:"#D7D0FF",
      Secondary3:"FDDD8C",
      Secondary4:"FFBBD7",
      Natural1:"#FAFAF4",
      Natural2:"#F1F1F5",
      Natural3:"#FaFaFb",
      Natural4:"#F5F5F8",
      Natural5:"#E2E2EA",
      Natural6:"#92929D",
      Natural7:"#696974",
      Natural8:"#44444F",
      DarkBG1:"#13131A",
      DarkBG2:"#1C1C24",
      DarkBG3:"#21212B",
      White:"#FFFFFF",
      Black:"#171725"






      },
      fontFamily: {
        Manrope: ["Manrope", "sans-sarif"]
      },
    extend: {},
  },
  plugins: [],
};
