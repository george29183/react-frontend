import React from 'react'

export default function About(){
  const hover = 'cursor-pointer hover:scale-1.05 transition hover:text-cyan-400'
  return (
    <div className='musad flex flex-col justify-between -translate-x-28 absolute p-5 -bottom-72 rounded-lg z-10 text-black-900 bg-slate-200 w-96 h-72'>
  <div className='flex pt-5 justify-around '>
    <div>
      <ul className='flex flex-col gap-6 justify-between'>
        <li className={hover}>Our Story</li>
        <li className={hover}>Mission</li>
        <li className={hover}>Values</li>
        <li className={hover}>Team</li>
        <li className={hover}>Culture</li>
      </ul>
    </div>
    <div>
      <ul className='flex pt-5 flex-col gap-6 justify-between'>
        <li className={hover}>Social Responsibility</li>
        <li className={hover}>Achievements</li>
      </ul>
    </div>
  </div>
</div>

  )
}

