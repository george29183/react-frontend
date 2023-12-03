import React from 'react'
import Hero from '../hero/hero'
import Subhero from '../subhero/subhero'
import Sub2 from '../sub2/sub2'
import Last from '../last/last'
import Footer from '../footer/footer'

export default function MainHome(){
  return (
    <div className=' bg-slate-400/40'>
      <Hero/>
    <Subhero/>
    <Sub2/>
    <Last/>
    <Footer/>
    </div>
    
  )
}

