import React from 'react'
import NavBar from './components/NavBar'
import { Home, ContactUs } from './pages'
import {
    Routes, 
    Route
} from 'react-router-dom'
import Footer from './components/Footer'
import './App.css'



const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<ContactUs />} />
      </Routes>
    <Footer />
    </div>
  )
}

export default App
