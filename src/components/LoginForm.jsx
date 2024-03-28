import { useState } from "react"

export default function loginform() {

    const [formData,setFormData]=useState({
        email:"", password:""
    })

    return (
        <form action="">
            <label htmlFor="">
                <p>
                    Email Address <sup>*</sup>
                </p>
                <input 
                placeholder="Enter Emial id" type="email" required value={formData.email} onChange={changeHandler}/>
            </label>
        </form>
    )
} 