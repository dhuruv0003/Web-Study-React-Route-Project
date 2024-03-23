import { useState } from 'react'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Navbar from "./components/Navbar.jsx"
import { Route,Routes } from 'react-router-dom'
import './App.css'



function App() {


  return (
    <div className="">
      <Navbar></Navbar>

      <Routes>
        <Route path='' element=""></Route>
      </Routes>
    </div>
  )
}

export default App
