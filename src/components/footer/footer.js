import React from 'react'
import WiAlien from '../navbar/WiAlien'
import LogosWhatsappIcon from './LogosWhatsappIcon'
import SkillIconsInstagram from './SkillIconsInstagram'
import SkillIconsLinkedin from './SkillIconsLinkedin'
export default function Footer(){
  return (
    <div className='mt-28 w-[100%] bg-slate-800 text-slate-300'>
     <div className='flex justify-center items-center flex-col'>
    <WiAlien
    h='9rem'
    w='9rem'
    />
    <p className='text-2xl sm:text-6xl'>GEORGE</p>
     </div>
     <ul className='mt-10 grid grid-cols-3 gap-5 mx-3'>
      <li className='sm:text-2xl hover:scale-105 hover:text-purple-900 text-center'>Home</li>
      <li className='sm:text-2xl hover:scale-105 hover:text-purple-900 text-center'>Company</li>
      <li className='sm:text-2xl hover:scale-105 hover:text-purple-900 text-center'>Products</li>
      <li className='sm:text-2xl hover:scale-105 hover:text-purple-900 text-center'>Offices</li>
      <li className='sm:text-2xl hover:scale-105 hover:text-purple-900 text-center'>About</li>
      <li className='sm:text-2xl hover:scale-105 hover:text-purple-900 text-center'>Contact</li>
     </ul>
     <div className=' flex justify-center mt-10 gap-5'>
       <div className='hover:scale-110 transition'>
         <LogosWhatsappIcon
         h='3rem'
         w='3rem'
         />
       </div>
       <div className='hover:scale-110 transition'>
         <SkillIconsInstagram
         h='3rem'
         w='3rem'
         />
       </div>
       <div className='hover:scale-110 transition'>
         <SkillIconsLinkedin
         h='3rem'
         w='3rem'
         />
       </div>
     </div>
     <div className='copyright'>
       <hr className='w-[60%] mx-auto my-8'/> 
       <p className='text-center text-blue-600 underline-offset-1'>mohammedrabee183@gmail.com</p>
       <p className='text-center'>Copytight @ 2023 - All Rights Reserved.</p>
      
     </div>
    </div>
  )
}

