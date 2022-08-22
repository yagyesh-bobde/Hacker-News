import React from 'react'
import NavBar from './components/NavBar'
import { Home, ContactUs } from './pages'
import {
    Routes, 
    Route
} from 'react-router-dom'




const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<ContactUs />} />
      </Routes>
    </div>
  )
}

export default App
