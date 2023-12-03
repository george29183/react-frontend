import React from 'react'

export default function Acount(){
  const hover = 'cursor-pointer hover:scale-1.05 transition hover:text-cyan-400'
  return (
    <div className='musad flex flex-col justify-around translate-x-20 absolute p-5 -bottom-72 rounded-lg z-10 text-black-900 mx-10 bg-slate-200 w-96 h-72'>
  <div className='flex justify-between '>
    <div>
      <ul className='flex flex-col gap-5 justify-between'>
        <li className={hover}>Profile</li>
        <li className={hover}>Settings</li>
        <li className={hover}>Security</li>
        <li className={hover}>Notifications</li>
      </ul>
    </div>
    <div>
      <ul className='flex flex-col gap-5 justify-between'>
        <li className={hover}>Billing</li>
        <li className={hover}>Membership</li>
        <li className={hover}>History</li>
      </ul>
    </div>
    <div>
      <ul className='flex flex-col gap-5 justify-between'>
        <li className={hover}>Help Center</li>
        <li className={hover}>Feedback</li>
        <li className={hover}>Logout</li>
      </ul>
    </div>
  </div>
</div>

  )
}

