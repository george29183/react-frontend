import React from 'react'

export default function Home(){
  const hover = 'cursor-pointer hover:scale-1.05 transition hover:text-cyan-400'
  return (
    <div className='musad flex flex-col justify-around -translate-x-28 absolute p-5 -bottom-96 rounded-lg z-10 text-black-900 mx-10 bg-slate-200 w-full max-w-screen-md h-96'>
    <div className='flex justify-around'>
      <div className='flex flex-col'>
        <ul className='flex flex-col gap-3 justify-between'>
          <li className={hover}>Home</li>
          <li className={hover}>Services</li>
          <li className={hover}>About Us</li>
          <li className={hover}>Contact</li>
          <li className={hover}>Blog</li>
        </ul>
      </div>
      <div className='flex flex-col'>
        <ul className='flex flex-col gap-3 justify-between'>
          <li className={hover}>Products</li>
          <li className={hover}>Features</li>
          <li className={hover}>Testimonials</li>
          <li className={hover}>Gallery</li>
          <li className={hover}>Events</li>
        </ul>
      </div>
      <div className='flex flex-col'>
        <ul className='flex flex-col gap-3 justify-between'>
          <li className={hover}>FAQ</li>
          <li className={hover}>Support</li>
          <li className={hover}>Partners</li>
          <li className={hover}>Careers</li>
          <li className={hover}>Newsletter</li>
        </ul>
      </div>
    </div>
    <div className='w-full h-full mt-12 self-center'>
      <ul className='flex gap-5 justify-around rounded-lg w-full h-full bg-slate-100 items-center'>
        <li className={hover}>Documentation</li>
        <li className={hover}>List</li>
        <li className={hover}>Style</li>
        <li className={hover}>Dapper</li>
        <li className={hover}>Feedback</li>
      </ul>
    </div>
  </div>
  )  
}

