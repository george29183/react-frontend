import React from 'react'

export default function Faq(){
  const hover = 'cursor-pointer hover:scale-1.05 transition hover:text-cyan-400'
  return (
    <div className='musad flex flex-col justify-around translate-x-60 absolute p-5 -bottom-48 rounded-lg z-10 text-black-900 mx-10 bg-slate-200 w-60 h-48'>
  <div className='flex justify-around '>
    <div>
      <ul className='flex flex-col gap-3 justify-between'>
      <li className={hover}>General FAQs</li>
        <li className={hover}>Account FAQs</li>
        <li className={hover}>Payment FAQs</li>
      </ul>
    </div>
  </div>
</div>

  )
}

