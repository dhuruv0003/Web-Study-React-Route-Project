import { Link,NavLink } from "react-router-dom"
import logo from "../assets/Logo.svg"

export default function Navbar(){
    return (
        <div className="flex gap-5">
            <Link to="/">
                <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
            </Link>
            <nav>
                <ul className="flex gap-3">
                    <li><Link to="/">Home</Link></li>
                    <li> <NavLink to="/">About</NavLink></li>
                    <li><NavLink to="/">Contact</NavLink></li>
                </ul>
            </nav>

        {/* Creating buttons Login - Signup - LogOut - Dashboard */}

            <div className="flex gap-3">
                <NavLink to="/login"><button>Login</button></NavLink>
                <NavLink to="/signup"><button>SignUp</button></NavLink>
                <NavLink to="/"><button>Logout</button></NavLink>
                <NavLink to="/dashboard"><button>DashBoard</button></NavLink>

            </div>

        </div>
    )
} 