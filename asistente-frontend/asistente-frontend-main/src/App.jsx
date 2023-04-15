import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import RegistrationPage from './pages/RegistrationPage'
import Dashboard from './pages/Dashboard'

import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './contexts/authContext'

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/register" element={<RegistrationPage/>}/>
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
