/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      'xs': '0px',
      'iphone':'440px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'mdlg':'800px',
      'lgsm':'940px',
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'teal': '#177E89',
        'midnight-green': '#084C61',
        'poppy-red': '#DB3A34',
        'sunglow': '#FFC857',
        'jet': '#323031',
        'jet-light': '#E1E1E1',
        'background-light':'#FFFCF4',
      },
      animation: {
        bganimate:'bganimate 5s ease infinite',
        ticker:'ticker 25s ease-in-out infinite'
    },
    keyframes: {
        bganimate: {
          '0%':{
            backgroundSize: '200%',
            backgroundPosition:'0, 50%'},
          '50%':{
            backgroundSize: '200%',
            backgroundPosition:'100%, 50%'},
          '100%':{
            backgroundSize: '200%',
            backgroundPosition:'0%, 50%'}
        },
        ticker:{
          '0%':{
            transform: `translate3d(0,0,0)`,
            visibility:'visible'
          },
          '100%':{
            transform:`translate3d(-100%,0,0)` 
          }
        }
    },
  },
  plugins: [],
}
}