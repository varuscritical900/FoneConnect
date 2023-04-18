import { useState } from 'react'
import Home from './pages/Home'
import './App.css'

function App() {

  return (
    <div className="App">
        <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        <Home/>
        {/* <Profile/> */}
        {/* <Auth/> */}
    </div>
  )
}

export default App