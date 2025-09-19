import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './pages/Navbar'
import HomePage from './pages/HomePage'
import About from './pages/About'

function App() {


  return (
     <BrowserRouter>
     {/* <Navbar/> */}
    
     <Routes>
      <Route path='/about' element={<About/>}></Route>
     </Routes>
     
     </BrowserRouter>
  )
}

export default App
