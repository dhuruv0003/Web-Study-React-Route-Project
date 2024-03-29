import { useState } from 'react'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Navbar from './components/navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import PrivateRoute from './components/PrivateRoute.jsx'

function App() {

  const [isloggedin, setloggedin] = useState(false)

  return (
    <div className="w-screen h-screen  bg-[#fdf0d5]">
      <Navbar isloggedin={isloggedin} setloggedin={setloggedin} />

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/login' element={<Login setloggedin={setloggedin}></Login>}></Route>

        <Route path='/signup' element={<Signup setloggedin={setloggedin}></Signup>}></Route>

        {/* <PrivateRoute/> :- routes that require authentication before granting access to specific components or pages. */}

        {/* Here we want to access dashborad only when we are logged in. Thatswhy we will keep dashboard inside private route tab */}


        <Route path='/dashboard' element={
          <PrivateRoute isloggedin={isloggedin} >
            {/* note here Dashboard is the children of privateroute   */}
            <Dashboard></Dashboard>
          </PrivateRoute>
        }></Route>

      </Routes>
    </div>
  )
}

export default App
