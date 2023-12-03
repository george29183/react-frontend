import React from 'react'
import MaterialSymbolsLightDeveloperModeTvSharp from './MaterialSymbolsLightDeveloperModeTvSharp'

import alien from '../Assets/8084182_1183-removebg.png'
export default function Hero(){
  return (
    <div className=' bluy flex gap-1 w-full  items-center '>
      <div className=' basis-2/5 sm:basis-3/5'>
         <h1 className='p-4 mx-auto xl:text-4xl sm:text-3xl font-bold text-slate-900 '>"Welcome to our website! Here, you'll find all sorts of great stuff to explore. Whether you're into web developement<MaterialSymbolsLightDeveloperModeTvSharp/> or just looking for a website , we've got you covered. Take a look around and enjoy your stay!"</h1>
         <div className='flex w-60 sm:w-96 gap-2'>
          <button className='ml-2 py-2 px-2 w-26 sm:px-4 sm:text-2xl hover:bg-blue-100 border border-black rounded-lg transition'>Read More</button>
          <button className='px-2 w-26 sm:px-4 sm:text-2xl bg-light_blue transition hover:text-white hover:bg-blue-900 rounded-lg'>Get Started</button>
         </div>
         
      </div>
      <div className='relative h-full basis-3/5 justify-end p-0 sm:basis-2/5'>
      <img className=' cursor-pointer z-20 relative' alt='developer' src={alien}/>
      <div className='absolute top-5 [background:linear-gradient(45deg,#88d5bf_0%,#5d6bf8_100%)] h-[95%] animate-morph transition-all duration-[1s] ease-[ease-in-out] w-[100%] z-[5] rounded-hoe
 '></div>
      </div>
    </div>
  )
}

 