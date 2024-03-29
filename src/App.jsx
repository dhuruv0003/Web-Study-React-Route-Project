import { useState } from 'react'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Navbar from './components/navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import './App.css'


function App() {

  const [isloggedin, setloggedin] = useState(false)

  return (
    <div className="w-screen h-screen overflow-hidden bg-[#fdf0d5]">
      <Navbar isloggedin={isloggedin} setloggedin={setloggedin}/>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/login' element={<Login setloggedin={setloggedin}></Login>}></Route>

        <Route path='/signup' element={<Signup  setloggedin={setloggedin}></Signup>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>

      </Routes>
    </div>
  )
}

export default App
