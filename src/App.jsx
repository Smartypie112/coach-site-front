import { useState } from 'react'
import './App.css'
import Top from './Top'
import FourBox from './FourBox'
import Results from './Results'
import Offers from './Offers'
import About from './About'
import Links from './Links'
import CTA from './CTA'
import Footer from './Footer'

function App() {
  
  return (
    <div className="absolute left-0">
      <Top/>
      <FourBox/>
      <Results/>
      <Offers/>
      <About/>
      <Links/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default App
