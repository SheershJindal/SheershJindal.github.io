import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import Header from './components/Header'

const App = () => {
  return (<Router className='App'>
    <Header />
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