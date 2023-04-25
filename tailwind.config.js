/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      'teal': '#177E89',
      'midnight-green': '#084C61',
      'poppy-red': '#DB3A34',
      'sunglow': '#FFC857',
      'jet': '#323031',
      'jet-light': '#E1E1E1',
      'background-light':'#FFFCF4',
    },
    extend: {
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