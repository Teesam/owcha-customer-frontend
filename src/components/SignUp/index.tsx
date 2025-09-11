import { useState } from "react";
import Start from "./Start";
import SignUpDetails from "./SignUpDetails";


const SignUp = () => {
    const [active, setActive ] = useState<"start" | "details" | "vibe" | "location">("start")
    return(
        <div>
            {active === "start" && <Start updateActive={setActive} />}
            {active === "details" && <SignUpDetails updateActive={setActive} />}
            
        </div>
    )
}

export default SignUp;