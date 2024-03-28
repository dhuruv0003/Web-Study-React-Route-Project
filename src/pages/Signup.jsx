import Template from "../components/Template"
import singupimg from "../assets/signup.png"


export default function Signup({setloggedin}){
    return(
        <Template 
            title="Welcome Back"
            desc1="Build skills for Today, tomorrow, and beyond."
            desc2="Education to future-proof your career."
            image={singupimg}
            formtype="signup"
            setloggedin={setloggedin}
        />
    )
} 