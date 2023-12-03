import React, { useState } from 'react';
import allProduct from '../Assets/all_product';
import data from '../Assets/data'

export default function SubApi() {
  const [random, setRandom] = useState(1);

  const handleClick = () => {
    setRandom(Math.floor(Math.random()*16+1));
   
  };

  const dis = data.map((i,r)=>{
  let m = Math.floor(Math.random()*16+1)
   return( <div className='w-[100%] mt-5 h-[100%]' key={r}>
        <img
          className='rounded-md cursor-pointer hover:scale-105 transition'
          alt={`${random}`}
          src={allProduct[random+m].image}
        />
        <p className='font-bold sm:text-xl'>${allProduct[random+m].new_price+m*3}</p>
      </div>
   )
  })
  return (
    <div className='flex mx-2 lg:mx-6 sm:mx4 flex-col'>
      <div className='flex mx-auto mt-10 mb-10 gap-3'>
        {dis}
      </div>
      <button
        onClick={handleClick}
        className='p-2 text-white hover:bg-cyan-600 transition w-28 sm:text-3xl sm:w-40 cursor-pointer self-center active:bg-slate-400 bg-cyan-800 rounded-lg '
      >
        Click Me
      </button>
      <p className='text-green-600 text-center sm:text-xl'>this wil generate a random image (screenshot when four are the same)</p>
    </div>
  );
}
