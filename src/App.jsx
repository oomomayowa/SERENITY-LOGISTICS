import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import About from './Component/About'
import NavBar from './Component/NavBar'
import Footer from './Component/Footer'
import Dashboard from './Component/Dashboard'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/navbar' element={<NavBar/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
        <Footer/>
    </div>
  )
}


export default App