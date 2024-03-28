import { useState } from "react"

export default function Signupform() {

    const [formdata, setformdata] = useState({
        firstname: "", lastname: "",
        email: "", password: "", confirmpass: ""
    })

    return (
        <div className="">
            {/* Student Instructor Tab  */}
            <div className="">
                <button>
                    Student
                </button>
                <button>
                    Instructor
                </button>
            </div>
            <form action="">
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
                    placeholder="Enter email address" />
                </label>
            </form>
        </div>
    )
} 