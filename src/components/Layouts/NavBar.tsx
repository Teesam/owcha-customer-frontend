import { useState } from "react";
import logo from "../../assets/Owcha Lockup_Main_1.png";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex justify-between items-center max-w-[100vw] pr-4 pl-4 pt-4 pb-4 border-b border-[#0003] lg:px-20">
      {/* Logo */}
      <img src={logo} alt="The Owcha Logo" />

      {/* Desktop menu */}
      <ul className="hidden md:flex justify-between items-center text-[#475467]">
        <li><button className="cursor-pointer mr-6">About</button></li>
        <li><button className="cursor-pointer mr-6">Events</button></li>
        <li><button className="cursor-pointer mr-6">How it works</button></li>
        <li><button className="cursor-pointer">Community</button></li>
      </ul>

      {/* Desktop auth links */}
      <ul className="hidden md:flex justify-between items-center text-[#475467]">
        <li><Link to="/login" className="cursor-pointer mr-6">Login</Link></li>
        <li>
          <Link
            to="/sign-up"
            className="bg-[#7F56D9] px-4 py-2 text-white rounded-lg cursor-pointer"
          >
            Sign Up
          </Link>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <div className="md:hidden">
        { !isOpen &&
            <button
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center space-y-1 focus:outline-none z-50 relative"
            >
            <div className="w-6 h-0.5 bg-black rounded-sm"></div>
            <div className="w-4 h-0.5 bg-black rounded-sm"></div>
            <div className="w-6 h-0.5 bg-black rounded-sm"></div>
            </button>
        }   
      </div>

      {/* Slide-out mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[100vw] bg-white shadow-lg transform transition-transform duration-300 ease-in-out bg-white z-[10] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-[1rem] border-b border-[#0003]">
            <img src={logo} alt="The Owcha Logo" />
            <IoClose className="text-[2rem]" onClick={toggleMenu} />
        </div>
        <ul className="flex flex-col p-6 space-y-4 text-[#475467]">
          <li className="mb-[2rem] ml-[1rem]"><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li className="mb-[2rem] ml-[1rem]"><Link to="" onClick={toggleMenu}>About</Link></li>
          <li className="mb-[2rem] ml-[1rem]"><Link to="" onClick={toggleMenu}>Events</Link></li>
          <li className="mb-[2rem] ml-[1rem]"><Link to="" onClick={toggleMenu}>Community</Link></li>
          <li className="mb-[2rem] font-bold"><Link to="/login" onClick={toggleMenu}>Login</Link></li>
          <li>
            <Link
              to="/sign-up"
              onClick={toggleMenu}
              className="bg-[#7F56D9] px-4 py-2 text-white rounded-lg block text-center"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
