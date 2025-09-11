import { useState } from "react";
import LogoIcon from "../../assets/Owcha Logo_Main.svg";
import { GoPeople } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { FiCalendar } from "react-icons/fi";


const Start = ({updateActive}: {updateActive: (active: string) => void}) => {
    const [currentMenu, setCurrentMenu] = useState<"attendee" | "vendor">();

    return(
        <div className="py-[2rem] px-[1rem]">
            <div className="flex flex-col items-center justify-center h-[100%]">
                <Link to="/" className="mb-[1rem] flex items-center w-[100%]">
                    <IoIosArrowBack />
                    <p className="font-bold ml-[.5rem]">Home</p>
                </Link>
                <img className="w-[3rem]" src={LogoIcon} />
                <h2 className="font-bold text-[1.5rem] mt-[1rem] text-center">How would you like to use Owcha?</h2>
                <button className="w-[100%]" onClick={() => setCurrentMenu("attendee")}>
                    <div className={`${currentMenu === "attendee" ? "w-[100%] flex px-[1rem] py-[2rem] rounded-lg border-2 border-[#7C1EDA] mt-[1rem]" 
                        : "w-[100%] flex px-[1rem] py-[2rem] rounded-lg border-2 border-[#E4E7EC] mt-[1rem]"}`}>
                        <div className={`${currentMenu === "attendee" ? "text-white flex items-center justify-center bg-[#7C1EDA] rounded-full w-[3rem] h-[3rem]" 
                        : "flex items-center justify-center bg-[#F2F4F7] rounded-full w-[3rem] h-[3rem]"}`}>
                            <GoPeople className="w-[1.5rem]" />
                        </div>
                        <div className="flex flex-col items-start ml-[1rem]">
                            <h4 className="font-bold text-[1rem]">Attendee</h4>
                            <p className="text-[#475467] text-start mt-[.2rem]">Discover events and meet people</p>
                        </div>
                    </div>
                </button>
                <button className="w-[100%]"  onClick={() => setCurrentMenu("vendor")}>
                    <div className={`${currentMenu === "vendor" ? "w-[100%] flex px-[1rem] py-[2rem] rounded-lg border-2 border-[#7C1EDA] mt-[1rem]" 
                        : "w-[100%] flex px-[1rem] py-[2rem] rounded-lg border-2 border-[#E4E7EC] mt-[1rem]"}`}>
                        <div className={`${currentMenu === "vendor" ? "text-white flex items-center justify-center bg-[#7C1EDA] rounded-full w-[3rem] h-[3rem]" 
                        : "flex items-center justify-center bg-[#F2F4F7] rounded-full w-[3rem] h-[3rem]"}`}>
                            <FiCalendar className="w-[1.5rem]" />
                        </div>
                        <div className="flex flex-col items-start ml-[1rem]">
                            <h4 className="font-bold text-[1rem]">Event Organizer</h4>
                            <p className="text-[#475467] text-start mt-[.2rem]">Create events and build community</p>
                        </div>
                    </div>
                </button>

                <button 
                    className="mt-[2rem] w-[100%] bg-[#7C1EDA] py-[1rem] rounded-lg text-white" 
                    onClick={() => {if(currentMenu === 'attendee') updateActive("details")}}
                    >
                    Continue
                </button>
            </div>
        </div>
    )
}

export default Start;