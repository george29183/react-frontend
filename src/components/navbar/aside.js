import React from 'react'

export default function Aside(){
  return (
    <div className='flex w-full z-20 sm:display-none justify-end absolute'>
       <ul className='shh text-slate-200 flex w-full items-center pt-5 pb-5 gap-6 flex-col'>
          <li className='cursor-pointer hover:underline transition hover:text-purple-700'>Home</li>
          <li className='cursor-pointer hover:underline transition hover:text-purple-700'>About</li>
          <li className='cursor-pointer hover:underline transition hover:text-purple-700'>Products</li>
          <li className='cursor-pointer hover:underline transition hover:text-purple-700'>Account</li>
          <li className='cursor-pointer hover:underline transition hover:text-purple-700'>Contact</li>
          <li className='cursor-pointer hover:underline transition hover:text-purple-700'>FAQ</li>
        </ul>
    </div>
  )
}

