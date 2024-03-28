import frameimage from "../assets/frame.png"
import Signupform from "./Signupform"
import LoginForm from "./LoginForm"
import {FcGoogle} from "react-icons/fc"

export default function Template({ title, desc1, desc2, image, formtype, setloggedin }) {
    // this template is created in order to have similar components for both login ansd signup page.  
    return (
        <div className="flex flex-wrap h-full justify-between w-11/12 mx-auto max-w-[1160px] py-9 gap-x-12 gap-y-0">
            <div className="Left-Section flex-col w-11/12 max-w-[450px]">
                <h1 className="text-black font-semibold text-[1.875rem] leading-[2.375rem]"
                >{title}</h1>
                <p className="flex flex-col text-[1.125rem] leading-[1.625rem] mt-4">
                    <span className="text-[#424242]">{desc1}</span>
                    <span className="italic text-blue-600">{desc2}</span>
                </p>
                {
                    formtype === "signup" ? (<Signupform  setloggedin={setloggedin}/>) : (<LoginForm setloggedin={setloggedin}
                    />)
                }

                <div className="flex w-full items-center my-4 gap-x-2">
                    <div className="h-[1px] w-full bg-slate-800 "></div>
                    <p className="font-medium leading-[1.375rem]"> OR </p>
                    <div className="h-[1px] w-full bg-slate-800 "></div>
                </div>

                 <button className="w-full rounded-[8px] font-medium border border-slate-900 px-[12px] py-[8px] gap-x-2 mt-6 flex items-center justify-center">
                    <FcGoogle/>Sign in With Google</button>
            </div>
            <div className="right-section relative w-11/12 max-w-[450px]">
                <img className="rounded-md" src={frameimage} alt="pattern image" 
                width={558}
                height={504}
                loading="lazy"/>
                <img src={image} alt="pattern image" 
                width={558}
                height={490}
                loading="lazy"
                className="rounded-md absolute -top-4 right-4"/>
            </div>
        </div>
    )
} 