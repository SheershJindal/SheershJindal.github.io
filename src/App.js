import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Header from './components/Header/Header'
import './App.css'
import Footer from './components/Footer/Footer'

const App = () => {
  return (<Router className='App'>
    <Header />
    <Routes>
      <Route path='/'
        element={<Home />} />
    </Routes>
    <Footer />
  </Router>
  )
}

export default App