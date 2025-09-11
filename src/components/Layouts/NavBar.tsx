import { useState } from "react";
import logo from "../../assets/Owcha Lockup_Main_1.png";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="flex justify-between items-center max-w-[100vw] pr-[1rem] pl-[1rem] pt-4 pb-4 border-b-[1px] border-[#0003] lg:px-[5rem]">
          
            <img src={logo} alt="The Owcha Logo" />
            <ul className="hidden md:flex jusify-between items-center text-[#475467]">
                <li><button className="cursor-pointer mr-[1.5rem]">About</button></li>
                <li><button className="cursor-pointer mr-[1.5rem]">Events</button></li>
                <li><button className="cursor-pointer mr-[1.5rem]">How it works</button></li>
                <li><button className="cursor-pointer">Community</button></li>
            </ul>
            <ul className="hidden md:flex jusify-between items-center text-[#475467]">
                <li><Link to="/login" className="cursor-pointer mr-[1.5rem]">Login</Link></li>
                <li><Link to="/sign-up" className="bg-[#7F56D9] px-[1rem] py-[.5rem] text-white rounded-lg cursor-pointer">Sign Up</Link></li>
            </ul>
            <div className="lg:hidden">
                <div className="">
                    <button
                        onClick={toggleMenu}
                        className="text-3xl bg-transparent focus:outline-none"
                        >
                            <div className="w-6 h-[.1rem] bg-black rounded-sm mb-1"></div>
                            <div className="w-4 h-[.1rem] bg-black rounded-sm"></div>
                            <div className="w-6 h-[.1rem] bg-black rounded-sm mt-1"></div>
                    </button>
                </div>
                {/* {isOpen && (
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                )} */}
            </div>
        </nav>
    )
}

export default NavBar;  