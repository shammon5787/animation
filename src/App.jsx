import React from 'react'
import Background from './Pages/Background'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hooks from './Pages/Hooks'
import Navbar from './Pages/Navbar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element ={<Background />} />
        <Route path='/hooks' element = {<Hooks/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App