import React from 'react'

export default function Contact(){
  const hover = 'cursor-pointer hover:scale-1.05 transition hover:text-cyan-400'
  return (
    <div className='musad flex flex-col justify-around translate-x-40 absolute p-5 -bottom-44 rounded-lg z-10 text-black-900 mx-10 bg-slate-200 w-64 h-44'>
  <div className='flex justify-around '>
    <div>
      <ul className='flex flex-col gap-3 justify-between'>
        <li className={hover}>Contact Information</li>
        <li className={hover}>Customer Support</li>
        <li className={hover}>Sales Inquiries</li>
      </ul>
    </div>
  </div>
</div>

  )
}

