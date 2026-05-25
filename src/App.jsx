import React from 'react'
import Reservation from './components/Booking'

import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import { CssBaseline } from '@mui/material';
import BackToTop from './components/BackToTop';
import Contact from './pages/Contact';
import About from './pages/About';

const App = () => {
  return (
    <div>
      <CssBaseline />
      <ScrollToTop/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        {/* <Route path="/menu" element={<Menu/>} /> */}
        <Route path="/booking" element={<Reservation/>} />    
        <Route path="/contacts" element={<Contact/>} />
      </Routes>
      <BackToTop />
      <Footer/>
    </div>
  )
}

export default App