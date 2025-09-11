import { useFormik } from "formik";
import LogoIcon from "../../assets/Owcha Logo_Main.svg";
import SignUpLoginSwitch from "../Layouts/SignUpLoginSwitch";
import { IoIosArrowBack } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { userApis } from "../../apis";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface CreateUser{
    lastName: string,
    firstName: string,
    role: string,
    email: string,
    gender: string,
    password: string
}

const SignUpDetails = ({updateActive}: {updateActive: (active: string) => void}) => {
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const navigate = useNavigate();

    const createUser = async (arg: CreateUser) => {
        try{
            const response = await userApis.createUser(arg);
            console.log(response);
        }catch(error){
            if (error instanceof Error) throw new Error(error.message);
        }
    }

    const formik = useFormik({
        initialValues: {
            lastName: '',
            firstName: '',
            role: 'attendee',
            email: '',
            gender: '',
            password: ''
        },
    onSubmit: (values) => {
        createUser(values);
    }
    });
    return(
        <div className="w-[100vw] px-[1rem] py-[2rem]">
            <div className="flex flex-col items-center">
                <button onClick={() => navigate(-1)} className="mb-[1rem] flex items-center w-[100%]">
                    <IoIosArrowBack />
                    <p className="font-bold ml-[.5rem]">Back</p>
                </button>
                <img className="w-[3rem]" src={LogoIcon} />
                <h2 className="my-[1rem] text-[1.5rem] font-bold text-[#101828]">Create an account</h2>
                <p className=" text-[#475467] mb-[1rem]">Join as an attendee</p>
                <SignUpLoginSwitch active="signUp" />
                <form className="my-[2rem] w-[100%]" onSubmit={formik.handleSubmit}>
                    {/* <div className="flex flex-col item-starts">
                        <label className="mb-[.5rem] text-[#344054]" htmlFor= "firstName">First Name</label>
                        <input {...formik.getFieldProps("firstName")} className="rounded-lg border-1 border-[#D0D5DD]" name="firstName" type="text" placeholder="Enter your first name" />
                    </div>
                    <div className="flex flex-col item-starts mt-[1rem]">
                        <label className="mb-[.5rem] text-[#344054]" htmlFor= "lastName">Last Name</label>
                        <input {...formik.getFieldProps("lastName")} className="rounded-lg border-1 border-[#D0D5DD]" name="lastName" type="text" placeholder="Enter your last name" />
                    </div>
                    <div className="w-[100%] text-[grey] mt-[1rem] flex flex-col items-start">
                        <label className="mb-[.5rem] text-[#344054]" htmlFor="gender">Gender</label>
                        <select {...formik.getFieldProps("gender")} className="w-[100%] rounded-lg border-1 border-[#D0D5DD]" name="gender">
                            <option value="">Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            <option value="prefer not say">Prefer not to say</option>
                        </select>
                    </div> */}
                    <div className="flex flex-col item-starts mt-[1rem]">
                        <label className="mb-[.5rem] text-[#344054]" htmlFor= "email">Email</label>
                        <input {...formik.getFieldProps("email")} className="rounded-lg border-1 border-[#D0D5DD]" name="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="flex flex-col item-starts mt-[1rem]">
                        <label className="mb-[.5rem] text-[#344054]" htmlFor= "password">Password</label>
                        <input {...formik.getFieldProps("password")} className="rounded-lg border-1 border-[#D0D5DD]" name="password" type="password" placeholder="Enter your passwod" />
                    </div>
                    <div className="flex flex-col item-starts mt-[1rem]">
                        <label className="mb-[.5rem] text-[#344054]" htmlFor= "password">Confirm Password</label>
                        <input onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} className="rounded-lg border-1 border-[#D0D5DD]" name="password" type="password" placeholder="Confirm your password" />
                    </div>

                    <div className="mt-[1rem] flex items-center">
                        <FaCheckCircle className={`${formik.values.password.length < 6 ? "text-[#475467] text-[.7rem]"
                            : "text-[#50CA1C] text-[.7rem]"
                        }`} />
                        <p className="text-[#475467] ml-[.5rem] text-[.7rem]">Password must be at least 6 characters long</p>
                    </div>
                    <div className="mt-[1rem] flex items-center">
                        <FaCheckCircle className="text-[#475467] text-[.7rem]" />
                        <p className="text-[#475467] ml-[.5rem] text-[.7rem]">Password must contain one special character</p>
                    </div>

                    <button disabled={confirmPassword !== formik.values.password} 
                    className={`${confirmPassword === formik.values.password ? "w-[100%] py-[1rem] bg-[#7C1EDA] text-white mt-[2rem] rounded-lg"
                        : "w-[100%] py-[1rem] bg-[#c499c1] text-white mt-[2rem] rounded-lg"
                    }`} 
                    type="submit"
                    
                    >
                        Continue
                    </button>
                    
                </form>
            </div>
        </div>
    )
}

export default SignUpDetails;