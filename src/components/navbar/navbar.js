import React, {useState } from 'react'
import WiAlien from './WiAlien'
import CarbonLogoReact from './CarbonLogoReact'
import DeviconTailwindcss from './DeviconTailwindcss'
import IcBaselineMenu from './IcBaselineMenu'
import RadixIconsCross1 from './RadixIconsCross1'
import Aside from './aside'
import NavTip from './navTip'


export default function Navbar(){
 const [menu,setmenu] = useState(true)
 const [tip,setTip] = useState(null)
 
  return (
    <div className=' navvv sticky z-30 top-0' onMouseLeave={()=>{setTip(null)}}>
     <div className='bar relative h-16 flex w-full  w-100 justify-between items-center'>
      <div className='cursor-pointer basis-1/4 text-slate-900  mr-2 flex items-center'>
        <WiAlien
        h='5rem'
        w='4rem'
        />
        <h1 className=' text-bold'>GEORGE</h1>
      </div>
      <div className='basis-2/4 hidden w-full sm:flex justify-center'>
        <ul className='justify-center group-hover:underline text-slate-900 lg:gap-12 xl:gap-16 flex gap-4'>
         <li onMouseOver={()=>{setTip('home')}} className='shad cursor-pointer hover:underline transition hover:scale-105'>Home</li>
          <li onMouseOver={()=>{setTip('about')}} className='shad cursor-pointer hover:underline transition hover:scale-105'>About</li>
          <li  onMouseOver={()=>{setTip('products')}} className='shad cursor-pointer hover:underline transition hover:scale-105'>Products</li>
          <li  onMouseOver={()=>{setTip('account')}} className='shad cursor-pointer hover:underline transition hover:scale-105'>Account</li>
          <li  onMouseOver={()=>{setTip('contact')}} className='shad cursor-pointer hover:underline transition hover:scale-105'>Contact</li>
          <li  onMouseOver={()=>{setTip('faq')}} className='shad cursor-pointer hover:underline transition hover:scale-105'>FAQ</li>
          <NavTip 
          tip={tip}
          />
        </ul>
      </div>
      <div className='flex mr-3 basis-1/4 gap-3 justify-end'> 
      <button className='btn hidden hover:text-slate-900 transition cursor-pointer p-1 text-xl border- sm:block text-slate-200 rounded-lg border-2'>SignUp</button>
        <a rel='noreferrer' target='_blank' href='https://react.dev'><CarbonLogoReact size='3rem'/></a>
        <a rel='noreferrer' target='_blank' href='https://tailwindcss.com'><DeviconTailwindcss/></a>
        <div className='sm:hidden' onClick={()=>{setmenu(!menu)}}>
          {menu ?<IcBaselineMenu/>:<RadixIconsCross1/>}
        </div>
      </div>
    </div>
    {menu?null:<Aside/>}
    </div>
    
  )
}

