import { useState } from "react"
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from "react-router-dom";

export default function Signupform({ setloggedin }) {

    const [formdata, setformdata] = useState({
        firstname: "", lastname: "",
        email: "", password: "", confirmpass: ""
    })

    function changehandler(event) {
        setformdata((prevdata) => ({
            ...prevdata,
            [event.target.name]: event.target.value
        }))
    }

    const [showpassword, setshowpassword] = useState(false);
    const [accounttype,setaccounttype]=useState("student")


    const navigate=useNavigate();

    function submithandler(event) {
        event.preventDefault();
        if (formdata.password !== formdata.confirmpass) {
            toast.error("Password does not match")
        }
        setloggedin(true);
        toast.success("Successfully Created Account");
        navigate("/dashboard")
    }

    return (
        <div>
            {/* Student Instructor Tab  */}
            <div className="flex bg-[#a2a2a2] text-[#060d1e] p-2 gap-1 my-6 rounded-full max-w-max">
                <button className={`${accounttype==="student"?"bg-black text-white":"bg-transparent text-black"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=>setaccounttype("student")}>
                    Student
                </button>
                <button className={`${accounttype==="instructor"?"bg-black text-white":"bg-transparent text-black"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=>setaccounttype("instructor")}>
                    Instructor
                </button>
            </div>
            <form onSubmit={submithandler} action="" className="
           mt-4 flex flex-col gap-y-3">
                {/* firstname and lastname container div   */}
                <div className="flex gap-x-4">

                    <label className="w-full relative">
                        <p className="text-[0.875rem] text-black mb-1 leading-[1.375rem]">
                            First Name<sup className="text-[red]">*</sup>
                        </p>
                        <input
                            type="text" placeholder="Enter Firstname" required onChange={changehandler}
                            name="firstname"
                            className="text-[black] bg-[#f3e9e3] placeholder:text-black rounded-[0.5rem] w-full p-[9px]"
                            value={formdata.firstname} />
                    </label>
                    <label className="w-full relative">
                    <p className="text-[0.875rem] text-black mb-1 leading-[1.375rem]">
                        Last Name<sup className="text-[red]">*</sup>
                        </p>
                        <input type="text"
                            value={formdata.lastname}
                            name="lastname"
                            placeholder="Enter last name"
                            className="text-[black] bg-[#f3e9e3] rounded-[0.5rem] placeholder:text-black w-full p-[9px]"
                            onChange={changehandler} />
                    </label>
                </div>

                {/* Email Address */}

                <label className="w-full " >
                <p className="text-[0.875rem] text-black mb-1 leading-[1.375rem]">Email Address</p>
                    <input type="email" onChange={changehandler}
                        value={formdata.email}
                        name="email"
                        placeholder="Enter email address"
                        className="text-[black] bg-[#f3e9e3] rounded-[0.5rem] w-full placeholder:text-black p-[9px]"
                        required />
                </label>

                <div  className="flex
                gap-x-4">
                    <label className="relative w-full">
                    <p className="text-[0.875rem] text-black mb-1 leading-[1.375rem]">Create Password</p>
                        <input type={showpassword ? ("text") : ("password")}
                            placeholder="Enter Password"
                            name="password"
                            className="text-[black] placeholder:text-black bg-[#f3e9e3]  rounded-[0.5rem] w-full p-[9px]"
                            value={formdata.password} onChange={changehandler}
                        />
                        <span className="absolute right-3 top-[40px] cursor-pointer" onClick={() =>
                            setshowpassword(prev => !prev)}>
                            {showpassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>

                    </label>
                    <label className="relative w-full">
                    <p className="text-[0.875rem] text-black mb-1 leading-[1.375rem]">Confirm Password</p>
                        <input type={showpassword ? ("text") : ("password")}
                            placeholder="Enter password again"
                            value={formdata.confirmpass}
                            name="confirmpass"
                            className="text-[black] bg-[#f3e9e3] rounded-[0.5rem] w-full p-[9px] placeholder:text-black"
                            onChange={changehandler} />
                        <span className="absolute right-3 top-[38px] cursor-pointer" onClick={() => setshowpassword(prev => !prev)}>{showpassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}</span>
                    </label>
                </div>

                <button className="w-full mt-4 bg-[#1f1b00] rounded-[8px] font-medium py-2 text-[#e6e6e6]">
                    Create Account
                </button>

            </form>
        </div>
    )
} 