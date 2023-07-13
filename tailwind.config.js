// @type {import('tailwindcss').Config}
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      colors: {
        Black: "#000700",
        Black1: "#171725",
        Natural:"#92929D",
        Natural2:"#f1f1f5",
        Natural3:"#696974",
        Natural4:"#fafafb",
        Natural5:"#f5f5f8",
        Natural6:"#e2e2ea",
        PrimaryColor:"#0bab7c",
        White:"#FFFFF",

      },
      fontFamily: {
        Manrope: ["Manrope", "sans-sarif"]
      },
    extend: {},
  },
  plugins: [],
};
