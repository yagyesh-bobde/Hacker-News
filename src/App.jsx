import React from 'react'
import NavBar from './components/NavBar'
import { Home, ContactUs, News } from './pages'
import {
    Routes, 
    Route
} from 'react-router-dom'
import Footer from './components/Footer'
import './App.css'
import NewsState from './context/newsState'



const App = () => {
  return (
    <div>
      <NavBar />
      <NewsState >
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<ContactUs />} />
        <Route exact path='/news/:id' element={<News />} />
      </Routes>
        </NewsState>
    <Footer />
    </div>
  )
}

export default App
