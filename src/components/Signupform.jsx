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

    const navigate=useNavigate()

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
            <div className="">
                <button>
                    Student
                </button>
                <button>
                    Instructor
                </button>
            </div>
            <form onSubmit={submithandler} action="">
                {/* firstname and lastname container div   */}
                <div className="">

                    <label htmlFor="">
                        <p>
                            First Name<sup>*</sup>
                        </p>
                        <input
                            type="text" placeholder="Enter Firstname" required onChange={changehandler}
                            name="firstname"
                            value={formdata.firstname} />
                    </label>
                    <label htmlFor="">
                        <p>Last Name<sup>*</sup>
                        </p>
                        <input type="text"
                            value={formdata.lastname}
                            name="lastname"
                            placeholder="Enter last name"
                            onChange={changehandler} />
                    </label>
                </div>

                {/* Email Address */}

                <label htmlFor="">
                    <p>Email Address</p>
                    <input type="email" onChange={changehandler}
                        value={formdata.email}
                        name="email"
                        placeholder="Enter email address"
                        required />
                </label>

                <div className="">
                    <label htmlFor="">
                        <p>Create Password</p>
                        <input type={showpassword ? ("text") : ("password")}
                            placeholder="Enter Password"
                            name="password"
                            value={formdata.password} onChange={changehandler}
                        />
                        <span onClick={() =>
                            setshowpassword(prev => !prev)}>
                            {showpassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>

                    </label>
                    <label htmlFor="">
                        <p>Confirm Password</p>
                        <input type={showpassword ? ("text") : ("password")}
                            placeholder="Enter password again"
                            value={formdata.confirmpass}
                            name="confirmpass"
                            onChange={changehandler} />
                        <span onClick={() => setshowpassword(prev => !prev)}>{showpassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}</span>
                    </label>
                </div>

                <button>
                    Create Account
                </button>

            </form>
        </div>
    )
} 