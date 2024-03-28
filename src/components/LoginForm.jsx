import { useState } from "react"
import toast from "react-hot-toast"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"


export default function LoginForm({setloggedin}) {

    // now after login if we want to redirect on dashboard we will use useNavigate()

    const navigate=useNavigate();

    const [formData, setFormData] = useState({
        email: "", password: ""
    })

    const [showpassword, setshowpassword] = useState(false)

    function changeHandler(event) {
        setFormData(
            (prevdata) => ({
                ...prevdata,
                [event.target.name]: event.target.value
            })
        )
    }

    function submithandler(event){
        event.preventDefault();
        //jaise hi login pr click krege isloggeding ko true banadena i.e
        setloggedin(true);
        toast.success("Logged in")
        navigate("/dashboard")
    }

    return (
        <form onSubmit={submithandler} action="">
            <label htmlFor="">
                <p>
                    Email Address <sup>*</sup>
                </p>
                <input
                     placeholder="Enter Emial id"
                     type="email"
                     required 
                     value={formData.email}
                     name="email"
                     onChange={changeHandler} />
            </label>

            <label htmlFor="">
                <p>Password <sup>*</sup></p>
                <input 
                    type={showpassword ? ("text") : ("password")}
                    placeholder="Enter Password"
                    name="password"
                    onChange={changeHandler}
                    value={formData.password}
                    required />

                <span
            // Jaise hi eye par click kere password visible ho jaye and eye par slash aa jaye, and vice versa for next click
                    onClick={() =>
                     setshowpassword((prev)=>(!prev))} >{showpassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                </span>
                
                <Link to="#">
                    <p>Forgot Password</p>
                </Link>

                <button>
                    SignIn Button
                </button>
            </label>

        </form>
    )
} 