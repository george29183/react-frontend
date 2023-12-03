import React from 'react'

export default function Product(){
  const hover = 'cursor-pointer hover:scale-1.05 transition hover:text-cyan-400'
  return (
    <div className='musad flex flex-col justify-around -translate-x-8 absolute p-5 -bottom-72 rounded-lg z-10 text-black-900 mx-10 bg-slate-200  w-full max-w-screen-md h-72'>
  <div className='flex justify-around '>
    <div>
      <ul className='flex flex-col gap-3 justify-between'>
        <li className={hover}>Featured Products</li>
        <li className={hover}>New Arrivals</li>
        <li className={hover}>Best Sellers</li>
        <li className={hover}>Special Offers</li>
      </ul>
    </div>
    <div>
      <ul className='flex flex-col gap-3 justify-between'>
        <li className={hover}>Product Categories</li>
        <li className={hover}>Customer Reviews</li>
        <li className={hover}>Product Comparison</li>
      </ul>
    </div>
    <div>
      <ul className='flex flex-col gap-3 justify-between'>
        <li className={hover}>Order Tracking</li>
        <li className={hover}>Warranty Information</li>
        <li className={hover}>Returns & Exchanges</li>
      </ul>
    </div>
    <div>
      <ul className='flex flex-col gap-3 justify-between'>
        <li className={hover}>Product Support</li>
        <li className={hover}>Product Registration</li>
        <li className={hover}>Product Manuals</li>
      </ul>
    </div>
  </div>
</div>

  )
}

