import ExploreIcon from "../../assets/explore icon.svg";
import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineShield } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { PiMedal } from "react-icons/pi";
import { FiGlobe } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";

const ExploreSection = () => {
    return (
        <section className="mt-[4rem] flex flex-col items-center text-[#fff]">
            <h3 className="font-extrabold text-center text-[#000] text-[2rem] w-50 leading-tight">Everything you need to explore</h3>
            <p className="text-center w-70 text-[#344054] mt-[2rem]">From discovering events to creating lasting connections, Owcha has you covered.</p>

            <div className="bg-[#EC6640] mb-[2rem] w-[90%] rounded-lg pl-[2rem] pr-[2rem] pt-[3rem] pb-[3rem] mt-[2rem]">
                <img src={ExploreIcon} className="w-[4rem]" />
                <h3 className="font-bold text-[2rem] mt-[2rem] mb-[2rem]">Premium Ticket Access</h3>
                <p className="mb-[2rem]">Skip the queues and secure your spot at London's most sought-after events. From West End shows to exclusive rooftop parties</p>
                <div className="flex flex-wrap items-center text-[.6rem]">
                    <div className="w-[50%] mb-[1rem] flex items-center text-[#fff]">
                        <MdOutlineStarOutline className="mr-[1rem] font-bold" />
                        <p>Instant booking</p>
                    </div>
                    <div className="w-[50%] mb-[1rem] flex items-center text-[#fff]">
                        <PiMedal className="mr-[1rem] font-bold" />
                        <p>VIP Access</p>
                    </div>
                    <div className="w-[50%] flex items-center text-[#fff]">
                        <MdOutlineShield className="mr-[1rem] font-bold" />
                        <p>Affordable Pricing</p>
                    </div>
                    <div className="w-[50%] flex items-center text-[#fff]">
                        <FaRegClock className="mr-[1rem] font-bold" />
                        <p>24/7 Support</p>
                    </div>
                </div>
            </div>
            <div className="bg-[linear-gradient(135deg,#7C1EDA99_10%,#7C1EDA)] mb-[2rem] w-[90%] rounded-lg pl-[2rem] pr-[2rem] pt-[3rem] pb-[3rem] mt-[2rem]">
                <FiGlobe className="text-[4rem]" />
                <h3 className="font-bold text-[1.5rem] mt-[2rem] mb-[2rem]">Global Community</h3>
                <p className="mb-[2rem]">Connect with adventurers from around the world and make lasting friendships</p>
                <h3 className="text-[1.5rem] font-bold mb-2">25k+</h3>
                <p>Active members worldwide</p>
            </div>
            <div className="bg-[linear-gradient(135deg,#00A8F099_10%,#00A8F0)] mb-[2rem] w-[90%] rounded-lg pl-[2rem] pr-[2rem] pt-[3rem] pb-[3rem] mt-[2rem]">
                <FiCalendar className="text-[4rem]" />
                <h3 className="font-bold text-[1.5rem] mt-[2rem] mb-[2rem]">Create Events</h3>
                <p className="mb-[2rem]">Bring your ideas to life with our intuitive event creation tools</p>
                <button className="text-[#00ABF0] flex items-center justify-center bg-[#fff] rounded-md pr-[2rem] pl-[2rem] pb-[1rem] pt-[1rem]">Start creating</button>
            </div>
            <div className="bg-[linear-gradient(135deg,#50CA1CCC_10%,#50CA1C)] mb-[2rem] w-[90%] rounded-lg pl-[2rem] pr-[2rem] pt-[3rem] pb-[2rem] mt-[2rem]">
                <img src={ExploreIcon} className="w-[4rem]" />
                <h3 className="font-bold text-[1.5rem] mt-[2rem] mb-[2rem]">Safe and inclusive environment</h3>
                <p className="mb-[2rem]">All members are verified, and our community guidelines ensure everyone feels welcome and secure</p>
            </div>
        </section>
    )
}

export default ExploreSection;