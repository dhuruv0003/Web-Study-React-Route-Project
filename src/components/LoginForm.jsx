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
        <form onSubmit={submithandler} className="flex flex-col w-full gap-y-4 mt-6" action="">
            <label className="w-full">
                <p className="text-[0.875rem] text-black mb-1 leading-[1.375rem]">
                    Email Address <sup className="text-[red]">*</sup>
                </p>
                <input
                    className="text-[black] bg-[#e6e6e6] rounded-[0.5rem] w-full p-[12px]"
                     placeholder="Enter Email id"
                     type="email"
                     required 
                     value={formData.email}
                     name="email"
                     onChange={changeHandler} />
            </label>

            <label htmlFor="" className="w-full relative">
                <p className="text-[0.875rem] text-black mb-1 leading-[1.375rem]">Password <sup className="text-[red]">*</sup></p>
                <input 
                    type={showpassword ? ("text") : ("password")}
                    placeholder="Enter Password"
                    name="password"
                    onChange={changeHandler}
                    value={formData.password}
                    className="text-[black] bg-[#e6e6e6] rounded-[0.5rem] w-full p-[12px]"
                    required />

                <span className="absolute right-3 top-[40px] cursor-pointer"
            // Jaise hi eye par click kere password visible ho jaye and eye par slash aa jaye, and vice versa for next click
                    onClick={() =>
                     setshowpassword((prev)=>(!prev))} >{showpassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) : (<AiOutlineEye fontSize={24} fill="black" />)}
                </span>
                
                <Link to="#">
                    <p className=" text-sm mt-1 text-blue-500 text-right">Forgot Password?</p>
                </Link>

                <button className="w-full mt-4 bg-[#1f1b00] rounded-[8px] font-medium py-2 text-[#e6e6e6]">
                    Login Button
                </button>
            </label>

        </form>
    )
} 