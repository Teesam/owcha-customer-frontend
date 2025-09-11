import { useState } from "react";
import Start from "./Start";
import SignUpDetails from "./SignUpDetails";


const SignUp = () => {
    const [active, setActive ] = useState<string>("start")
    return(
        <div>
            {active === "start" && <Start updateActive={setActive} />}
            {active === "details" && <SignUpDetails />}
        </div>
    )
}

export default SignUp;