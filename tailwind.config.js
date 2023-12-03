/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        black_black:"#111315",
        light_black:"#30353C",
        light_blue:"#2A86FF"
      },
      keyframes:{
        morph:{
          
            "0%" :{
              "border-radius": "60% 40% 30% 70% / 60% 30% 70% 40%",
              background:" linear-gradient (45deg, #88d5bf 0%, #5d6bf8 100%)"
            },
          
            "50%":{
              "border-radius": "30% 60% 70% 40% / 50% 60% 30% 60%",
              background:" linear-gradient(45deg, #e27fcb 0%, #5d6bf8 100%)"
            },
            "100%" :{
              "border-radius": "60% 40% 30% 70% / 60% 30% 70% 40%",
              background:" linear-gradient (45deg, #88d5bf 0%, #5d6bf8 100%)"
            }
           
          
        }
      },
      borderRadius:{
       new:'86% 14% 70% 30% / 45% 55% 45% 55% ',
       low:'35% 65% 30% 70% / 58% 37% 63% 42% ',
       hoe:"60%_40%_30%_70%_/_60%_30%_70%_40%"
      },
      animation: {
        morph:" morph 8s ease-in-out infinite"
      }
    },
  },
  plugins: [],
}

