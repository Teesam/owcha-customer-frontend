import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../components/LandingPage/index";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/index";

const AllRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/" element={<LandingPage />} />
                <Route path = "/login" element={<Login />} />
                <Route path = "/sign-up" element={<SignUp />} />
           </Routes>
        </BrowserRouter>
    )
}

export default AllRoutes;