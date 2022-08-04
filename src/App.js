import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import './App.css'

const App = () => {
  return (<Router className='App'>
    <Home />
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