module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      "open": ['"Open Sans"']
    },
    extend: {
      zIndex: {
        "1": "-1"
      },
      colors:{
        "rgb-0":  "rgba(255,252,0,1)",
        "rgb-1":  "rgba(189,255,0,1)",
        "rgb-2":  "rgba(27,255,0,1)",
        "rgb-3":  "rgba(0,255,72,1)",
        "rgb-4":  "rgba(0,255,226,1)",
        "rgb-5":  "rgba(26,200,255,1)",
        "rgb-6":  "rgba(0,1,250,1)",
        "rgb-7":  "rgba(85,0,255,1)",
        "rgb-8":  "rgba(255,0,228,1)",
        "rgb-9":  "rgba(255,0,134,1)",
        "rgb-10": "rgba(255,0,0,1)"  

      }
    },
  },
  plugins: [],
}
