import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import RegistrationPage from './pages/RegistrationPage'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/register" element={<RegistrationPage/>}/>
      </Routes>
    </div>
  )
}

export default App
