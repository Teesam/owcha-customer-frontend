import { useFormik } from "formik";
import LogoIcon from "../../assets/Owcha Logo_Main.svg";
import SignUpLoginSwitch from "../Layouts/SignUpLoginSwitch";
import { userApis } from "../../apis";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate} from "react-router-dom";
import OnboardDesktopView from "../OnboardingDesktopView";

interface LoginInfo{
    email: string,
    password: string
}

const Login = () => {

    const navigate = useNavigate();
    const loginUser = async (arg: LoginInfo) => {
        try{
            const response = await userApis.userLogin(arg);
            const token = response.data.token;
            localStorage.setItem("accessToken", token);
        }catch(error){
            console.log('Login failed');
        }finally{
            
        }
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
    onSubmit: (values) => {
        loginUser(values);
    }
    });
    return(
        <div className="w-[100vw] px-[1rem] lg:py-[unset] lg:px-[unset] lg:flex lg:min-h-[100vh]">
            <div className="flex justify-center items-center w-[100%] lg:w-[40%] min-h-[100vh]">
                <div className="flex w-[100%] flex-col items-center lg:px-[6rem]">
                    <Link onClick={() => navigate(-1)} to="/" className="hidden mb-[1rem] flex items-center w-[100%]">
                        <IoIosArrowBack />
                        <p className="ml-[.5rem] lg:text-[.8rem]">Back</p>
                    </Link>
                    <img onClick={() => navigate("/")} className="w-[3rem] lg:w-[2rem] cursor-pointer" src={LogoIcon} />
                    <h2 className="my-[1rem] text-[1.5rem] font-bold text-[#101828] lg:text-[1rem]">Login to your account</h2>
                    <p className=" text-[#475467] mb-[1rem] lg:text-[.8rem]">Welcome back! Please enter your details.</p>
                    <SignUpLoginSwitch active="login" />
                    <form className="my-[2rem] w-[100%]" onSubmit={formik.handleSubmit}>
                        <div className="flex flex-col item-starts">
                            <label className="mb-[.5rem] text-[#344054] lg:text-[.8rem]" htmlFor= "email">Email</label>
                            <input {...formik.getFieldProps("email")} className="rounded-lg border-1 border-[#D0D5DD] lg:text-[.8rem] lg:py-[.3rem]" name="email" type="email" placeholder="Enter your email" />
                        </div>
                        <div className="flex flex-col item-starts mt-[1rem]">
                            <label className="mb-[.5rem] text-[#344054] lg:text-[.8rem]" htmlFor= "password">Password</label>
                            <input {...formik.getFieldProps("password")} className="rounded-lg border-1 border-[#D0D5DD] lg:text-[.8rem] lg:py-[.3rem]" name="password" type="password" placeholder="Enter your password" />
                        </div>
                        <div className="flex itext-center justify-between mt-[1rem]">
                            <div className="flex items-center">
                                <input className="mr-[.5rem]" type="checkbox" />
                                <p className="lg:text-[.7rem]">Keep me logged in</p>
                            </div>
                            <h4 className="font-bold text-[#7C1EDA] lg:text-[.8rem]">Forgot Password</h4>
                        </div>
                        <button className="w-[100%] cursor-pointer py-[1rem] lg:py-[.7rem] bg-[#7C1EDA] text-white mt-[2rem] rounded-lg lg:text-[.8rem]" type="submit">Continue</button>
                    </form>
                </div>
            </div>
            <div className="hidden lg:block w-[60%]">
                <OnboardDesktopView />
            </div>
        </div>
    )
}

export default Login;