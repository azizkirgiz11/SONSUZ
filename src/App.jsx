import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import { CssBaseline } from '@mui/material';
import BackToTop from './components/BackToTop';

const App = () => {
  return (
    <div>
      <CssBaseline />
      <ScrollToTop/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <BackToTop />
      <Footer/>
    </div>
  )
}

export default App