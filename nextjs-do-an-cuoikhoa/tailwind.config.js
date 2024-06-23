/** @type {import('tailwindcss').Config} */
// tailwind.config.js
// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}', // thêm dòng này nếu có thư mục src
  ],
  theme: {
    extend: {
      backgroundImage: {
        'promotion': "url('/images/promotion_bg.png')",
        'banerHome': "url('/images/banner-home-1.png')",
        'banerFt': "url('/images/baner-footer.png')"
      },
      colors:{
        'primary-color':  '#669933',
      }
    },
  },
  plugins: [],
};
