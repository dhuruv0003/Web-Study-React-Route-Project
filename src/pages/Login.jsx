import Template from "../components/Template";
import loginimg from "../assets/login.png"

export default function Login({setloggedin}){
    return(
        <Template 
            title="Welcome Back"
            desc1="Build skills for Today, tomorrow, and beyond."
            desc2="Education to future-proof your career."
            image={loginimg}
            formtype="login"
            setloggedin={setloggedin}
        />
    )
} 