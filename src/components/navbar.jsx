import { Link, NavLink } from "react-router-dom"
import logo from "../assets/Logo.svg"
import toast from "react-hot-toast";


export default function Navbar(props) {
    let isloggedin = props.isloggedin;
    let setloggedin = props.setloggedin;
    return (
        <div className="bg-[#003049] flex justify-between items-center    py-4 px-3 mx-auto">
            <Link to="/">
                <img src={logo} alt="logo" width={160} height={22} loading="lazy" />
            </Link>
            <nav>
                <ul className="text-[#fdf0d5] flex gap-x-6">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Contact</NavLink>
                    </li>
                </ul>
            </nav>

            {/* Creating buttons Login - Signup - LogOut - Dashboard */}

            <div className="flex gap-x-5 items-center ">
                {/* agar login nhi hai to login karo  */}

                {!isloggedin &&
                    <NavLink to="/login">
                        <button className=" bg-[#f9dfac] text-[#103969] py-[8px] px-[12px] rounded-md border-[2px] font-bold border-[#0e2960] shadow-lg shadow-black">Login</button>
                    </NavLink>
                }

                {/* agar login nhi hai toh signup karo */}

                {!isloggedin &&
                    <NavLink to="/signup">
                        <button className=" bg-[#f9dfac] text-[#103969] py-[8px] px-[12px] rounded-md border-[2px] font-bold border-[#0e2960] shadow-lg shadow-black">SignUp</button>
                    </NavLink>
                }
                {/* Agar login hai toh logout karo  */}
                {
                    isloggedin &&
                    <NavLink to="/">
                        <button className=" bg-[#f9dfac] text-[#103969] py-[8px] px-[12px] rounded-md border-[2px] font-bold border-[#0e2960] shadow-lg shadow-black"onClick={() =>
                        // after login again set isloggedin as false to react to logout page 
                        { 
                            setloggedin(false)
                            toast.success("Logged Out")
                        }
                        }>Logout</button>
                    </NavLink>
                }
                {/* Agar login hain to main dashboard page par jao  */}
                {
                    isloggedin &&
                    <NavLink to="/dashboard">
                        <button className=" bg-[#fdf0d5] text-[#103969] py-[8px] px-[12px] rounded-md border-[2px] border-[#0e2960] shadow-lg shadow-black">DashBoard</button>
                    </NavLink>
                }

            </div>

        </div>
    )
} 