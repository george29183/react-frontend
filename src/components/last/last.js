import React from 'react'

export default function Last(){
  return (
    <div className='mt-16'>
      <h1 className='text-4xl ml-2 mb-3 sm:text-8xl'>Tailwind</h1>
      <p className='text-lg mb-3 mr-2 ml-5 sm:text-2xl lg:text-4xl'>Tailwind CSS is a popular utility-first CSS framework that streamlines the process of building modern, responsive web designs. It was created by Adam Wathan, Jonathan Reinink, David Hemphill, and Steve Schoger. Tailwind CSS takes a different approach compared to traditional CSS frameworks by providing a set of low-level utility classes that can be composed to create flexible and highly customized designs.</p>
      <div className='mx-auto rounded-lg bg-light_black text-slate-200 border mt-20 border-black_black w-[70%] p-5 flex flex-col justify-center'>
        <p className='mb-3 self-center text-lg sm:text-3xl'>Just made a thing with tailwind above (the thing on the alien, not much to show!):</p>
        <div className='w-[100%] flex justify-center'>
        <input
      type='text'
      className='p-2  sm:text-3xl text-black basis-2/3'
      spellCheck='false'
      placeholder='Email'
    />
    <button className='bg-light_blue border-4 border-light_black hover:bg-slate-600 active:bg-purple-900 transition sm:text-3xl p-2 rounded-lg basis-1/3'>Submit</button>
        </div>
      
      </div>
      
    </div>
  )
}

