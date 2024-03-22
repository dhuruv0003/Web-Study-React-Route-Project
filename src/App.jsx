import { useState } from 'react'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Navbar from "./components/Navbar.jsx"
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Navbar></Navbar>
    </div>
  )
}

export default App
