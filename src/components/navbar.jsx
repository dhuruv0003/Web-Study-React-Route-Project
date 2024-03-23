import { Link, NavLink } from "react-router-dom"
import logo from "../assets/Logo.svg"
import toast from "react-hot-toast";


export default function Navbar(props) {
    let isloggedin = props.isloggedin;
    let setloggedin = props.setloggedin;
    return (
        <div className="mt-2 flex justify-evenly gap-5">
            <Link to="/">
                <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
            </Link>
            <nav>
                <ul className="flex gap-3">
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

            <div className="flex gap-3">
                {/* agar login nhi hai to login karo  */}

                {!isloggedin &&
                    <NavLink to="/login">
                        <button onClick={() =>
                        // after login again set isloggedin as false to react to logiut page 
                        {
                            setloggedin(false)
                            toast.success("Logged in")
                        }
                        }>Login</button>
                    </NavLink>
                }

                {/* agar login nhi hai toh signup karo */}

                {!isloggedin &&
                    <NavLink to="/signup">
                        <button>SignUp</button>
                    </NavLink>
                }
                {/* Agar login hai toh logout karo  */}
                {
                    isloggedin &&
                    <NavLink to="/">
                        <button>Logout</button>
                    </NavLink>
                }
                {/* Agar login hain to main dashboard page par jao  */}
                {
                    isloggedin &&
                    <NavLink to="/dashboard">
                        <button>DashBoard</button>
                    </NavLink>
                }

            </div>

        </div>
    )
} 