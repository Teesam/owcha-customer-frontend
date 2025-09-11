import { Link } from "react-router-dom";

interface SignUpLoginSwitchProps{
    active: string
}

const SignUpLoginSwitch = ({active}: SignUpLoginSwitchProps) => {
    return(
        <div className="w-[100%] flex items-center rounded-lg bg-[#F9FAFB] border-1 border-[#E4E7EC] mt-[1rem]">
            <div className={active==="signUp"? 
                "bg-white rounded-lg w-[50%] cursor-pointer font-bold text-[#344054] px-[.5rem] flex items-center justify-center" 
                : "w-[50%] text-[#667085] cursor-pointer font-bold flex items-center justify-center"
                }>
                <Link className="px-[2rem] py-[1rem]" to="/sign-up">Sign Up</Link>
            </div>
            <div className={active==="login"? 
            "bg-white rounded-lg w-[50%] cursor-pointer font-bold text-[#344054] px-[.5rem] flex items-center justify-center" 
                : "w-[50%] text-[#667085] cursor-pointer font-bold flex items-center justify-center"
                }>
                <Link className="px-[2rem] py-[1rem]" to="/login">Login</Link>
            </div>
        </div>
    )
}

export default SignUpLoginSwitch;