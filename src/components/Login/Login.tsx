import { useFormik } from "formik";
import LogoIcon from "../../assets/Owcha Logo_Main.svg";
import SignUpLoginSwitch from "../Layouts/SignUpLoginSwitch";
import { userApis } from "../../apis";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate} from "react-router-dom";

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
        <div className="w-[100vw] px-[1rem] py-[5rem]">
            <div className="flex flex-col items-center">
                <Link onClick={() => navigate(-1)} to="/" className="mb-[1rem] flex items-center w-[100%]">
                    <IoIosArrowBack />
                    <p className="font-bold ml-[.5rem]">Back</p>
                </Link>
                <img className="w-[3rem]" src={LogoIcon} />
                <h2 className="my-[1rem] text-[1.5rem] font-bold text-[#101828]">Login to your account</h2>
                <p className=" text-[#475467] mb-[1rem]">Welcome back! Please enter your details.</p>
                <SignUpLoginSwitch active="login" />
                <form className="my-[2rem] w-[100%]" onSubmit={formik.handleSubmit}>
                    <div className="flex flex-col item-starts">
                        <label className="mb-[.5rem] text-[#344054]" htmlFor= "email">Email</label>
                        <input {...formik.getFieldProps("email")} className="rounded-lg border-1 border-[#D0D5DD]" name="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="flex flex-col item-starts mt-[1rem]">
                        <label className="mb-[.5rem] text-[#344054]" htmlFor= "password">Password</label>
                        <input {...formik.getFieldProps("password")} className="rounded-lg border-1 border-[#D0D5DD]" name="password" type="password" placeholder="Enter your password" />
                    </div>
                    <div className="flex itext-center justify-between mt-[1rem]">
                        <div className="flex items-center">
                            <input className="mr-[.5rem]" type="checkbox" />
                            <p>Keep me logged in</p>
                        </div>
                        <h4 className="font-bold text-[#7C1EDA]">Forgot Password</h4>
                    </div>
                    <button className="w-[100%] py-[.5rem] bg-[#7C1EDA] text-white mt-[2rem] rounded-lg" type="submit">Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Login;