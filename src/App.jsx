import { useState } from 'react'
import './App.css'
import Top from './Top'
import FourBox from './FourBox'
import Results from './Results'

function App() {
  
  return (
    <div className="absolute left-0">
      <Top/>
      <FourBox/>
      <Results/>
    </div>
  )
}

export default App
