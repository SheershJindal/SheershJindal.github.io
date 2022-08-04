import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import './App.css'

const App = () => {
  return (<Router className='App'>
    <Navbar />
    {/* <Router>
      <Routes>
        <Route to='/'>
          <h1>abcd</h1>
        </Route>
      </Routes>
    </Router> */}
  </Router>
  )
}

export default App