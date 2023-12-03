import React from 'react'
import Home from './home'
import About from './about'
import Product from './product'
import Acount from './acount'
import Contact from './contact'
import Faq from './Faq'

export default function NavTip(props){
 
  switch (props.tip) {
    case 'home':
      return <Home/>
      case 'about':
        return <About/>
        case 'products':
          return <Product/>
          case 'account':
      return <Acount/>
      case 'contact':
      return <Contact/>
      case 'faq':
      return <Faq/>
  
    default:
      return null
  }
}

