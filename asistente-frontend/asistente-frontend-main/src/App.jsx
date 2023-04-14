import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RegistrationForm from './components/RegistrationForm'
import LandingPage from './pages/LandingPage'

function App() {

  return (
    <div className="App">
      <LandingPage/>
    </div>
  )
}

export default App
