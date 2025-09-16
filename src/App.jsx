import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './pages/Navbar'
import HomePage from './pages/HomePage'

function App() {


  return (
     <BrowserRouter>
     <Navbar/>
     {/* <HomePage/> */}
     <Routes>
      <Route></Route>
     </Routes>
     
     </BrowserRouter>
  )
}

export default App
