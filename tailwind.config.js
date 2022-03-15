module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main-green': '#2FB383'
      },
      borderRadius:{
        '32px': '32px',
        'nav-wraper-radius': '116px'
      },
      dropShadow:{
        'nav-shadow': '0px 10px 50px rgba(0, 0, 0, 0.16)'
      }
    },
  },
  plugins: [],
}
