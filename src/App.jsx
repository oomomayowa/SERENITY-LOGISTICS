import React from 'react'
import { Route, Form, Routes } from 'react-router-dom'
import About from './Component/About'
import Form from './Component/Form'
import Footer from './Component/Footer'
import Dashboard from './Component/Dashboard'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
        <Footer/>
    </div>
  )
}


export default App