import { FiMusic } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { IoRestaurantOutline } from "react-icons/io5";
import {Link} from "react-router-dom";

const Footer = () => {
    return(
        <section className="w-[100%] mt-[3rem] bg-[linear-gradient(90deg,#FF4B27,#EC6640,#7C1EDA,#00A8F0,#50CA1C)] pr-[1rem] pl-[1rem] pt-[5rem] pb-[5rem] flex flex-col items-center">
            <h1 className="w-[60%] text-[2rem] text-center font-extrabold text-white leading-tight lg:text-[3rem] lg:w-[50%]">Ready to Transform Your London Experience?</h1>
            <p className="w-[80%] mt-[1rem] text-white text-center lg:w-[35%]">Join 25,000 + users who've already discovered their new favourite experiences through Owcha</p>
            <Link to="/sign-up" className="bg-white mt-[1rem] rounded-2xl text-[#000] pt-[1rem] pb-[1rem] pr-[3rem] pl-[3rem]">Get Started</Link>
            <div className="mt-[2rem] text-white lg:flex lg:w-[100%] lg:items-center lg:justify-evenly lg:mt-[5rem]">
                <div className="relative lg:w-[30%]">
                    <img className="rounded-2xl w-[100%]" src="https://images.unsplash.com/photo-1497911270199-1c552ee64aa4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />  
                    
                    <div className="absolute left-[5%] bottom-[7%] text-white flex flex items-center">
                        <FiMusic className="mr-[.5rem] text-[#EC6640]" />
                        <p>Jazz & Blues</p>
                    </div>
                </div>
                <div className="mt-[1rem] lg:mt-[unset] lg:w-[30%] relative">
                    <img className="rounded-2xl w-[100%]" src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    
                    <div className="absolute left-[5%] bottom-[7%] text-white flex items-center">
                        <IoRestaurantOutline className="mr-[.5rem] text-[#EC6640]" />
                        <p>Food & Culture</p>
                    </div>
                </div>
                <div className="mt-[1rem] lg:mt-[unset] lg:w-[30%] relative">
                    <img className="rounded-2xl w-[100%]" src="https://images.unsplash.com/photo-1525875098832-46c7d9d0794e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    
                    <div className="absolute left-[5%] bottom-[7%] text-white flex items-center">
                        <FaRegHeart className="mr-[.5rem] text-[#EC6640]" />
                        <p>Out With Ya</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;