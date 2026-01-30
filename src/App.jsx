import { useState } from 'react'
import './App.css'
import Top from './Top'
import FourBox from './FourBox'
import Results from './Results'
import Offers from './Offers'

function App() {
  
  return (
    <div className="absolute left-0">
      <Top/>
      <FourBox/>
      <Results/>
      <Offers/>
    </div>
  )
}

export default App
