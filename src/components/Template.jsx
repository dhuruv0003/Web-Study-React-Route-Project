import frameimage from "../assets/frame.png"
import Signupform from "./Signupform"
import LoginForm from "./LoginForm"

export default function Template({ title, desc1, desc2, image, formtype, setloggedin }) {
    // this template is created in order to have similar components for both login ansd signup page.  
    return (
        <div className="">
            <div className="Left-Section">
                <h1>{title}</h1>
                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>
                {
                    formtype === "signup" ? (<Signupform  setloggedin={setloggedin}/>) : (<LoginForm setloggedin={setloggedin}/>)
                }

                <div className="">
                    <div></div>
                    <p> OR </p>
                    <div></div>
                </div>

                 <button>Sign in With Google</button>
            </div>
            <div className="right-section">
                <img src={frameimage} alt="pattern image" 
                width={558}
                height={504}
                loading="lazy"/>
                <img src={image} alt="pattern image" 
                width={558}
                height={490}
                loading="lazy"/>
            </div>
        </div>
    )
} 