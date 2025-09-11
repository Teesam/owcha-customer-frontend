import LogoIcon from "../../assets/Logo Coloured - Primary BG.jpg";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import useInView from "../../hooks/useInView";

const FirstSection = () => {
    const {ref, isVisible} = useInView<HTMLDivElement>();

    return(
        <section ref={ref}
            className={`transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100 bg-[#F9FAFB] pt-[5rem] pb-[5rem] pr-[1rem] pl-[1rem] w-[90%] lg:w-[100%] lg:pr-[5rem] lg:pl-[5rem] mr-[1rem] ml-[1rem] lg:flex lg:items-start lg:justify-between"
        : "opacity-0 bg-[#F9FAFB] pt-[5rem] pb-[5rem] pr-[1rem] pl-[1rem] w-[90%] lg:w-[100%] lg:pr-[5rem] lg:pl-[5rem] mr-[1rem] ml-[1rem] lg:flex lg:items-start lg:justify-between"}
        `}
        >
            <div className="lg:w-[40%]">
                <h1 className="text-[2.5rem] font-extrabold mb-[1rem] leading-tight">
                    Tired of missing out on the best events near you?
                </h1>

                {/* Block 1 */}
                <div className="flex items-start gap-4 mt-[2rem]">
                    <div className="w-[1rem] h-[1rem] rounded-full bg-[#F04438] border-[6px] border-[#F9E3E2]"></div>
                    <div className="flex-1">
                    <h3 className="text-[1rem] font-bold mb-[1rem]">Events sell out before you know</h3>
                    <p>Popular events disappear in minutes, leaving you disappointed</p>
                    </div>
                </div>

                {/* Block 2 */}
                <div className="flex items-start gap-4 mt-[2rem]">
                    <div className="w-[1rem] h-[1rem] rounded-full bg-[#F04438] border-[6px] border-[#F9E3E2]"></div>
                    <div className="flex-1">
                    <h3 className="text-[1rem] font-bold mb-[1rem]">Hard to meet like-minded people</h3>
                    <p>Attending events alone can feel intimidating and isolating</p>
                    </div>
                </div>

                {/* Block 3 */}
                <div className="flex items-start gap-4 mt-[2rem]">
                    <div className="w-[1rem] h-[1rem] rounded-full bg-[#F04438] border-[6px] border-[#F9E3E2]"></div>
                    <div className="flex-1">
                    <h3 className="text-[1rem] font-bold mb-[1rem]">Scattered event information</h3>
                    <p>Events are spread across multiple platforms and hard to discover</p>
                    </div>
                </div>
                </div>


            <div className="flex flex-col items-center bg-white pt-[3rem] pr-[1rem] pl-[1rem] pb-[3rem] pt-[4rem] rounded-2xl mt-[4rem] lg:m-[unset] shadow-lg lg:w-[50%] lg:pl-[5rem]">
                <img className="h-[3rem] w-[3rem] rounded-md" src= {LogoIcon} alt= "Owcha icon" />
                <h3 className="font-bold text-[1.5rem] mt-[1rem]">Owcha solves this</h3>
                <div className="w-[100%]">
                    <div className="w-[%100] flex items-center justify-start mt-[2rem]">
                        <IoMdCheckmarkCircleOutline className="text-[#50CA1C] mr-[1rem] text-[1rem]" />
                        <p>Early access to premium events</p>
                    </div>
                    <div className="w-[%100] flex items-center justify-start mt-[2rem]">
                        <IoMdCheckmarkCircleOutline className="text-[#50CA1C] mr-[1rem] text-[1rem]" />
                        <p>Connect with verified community</p>
                    </div>
                    <div className="w-[%100] flex items-center justify-start mt-[2rem]">
                        <IoMdCheckmarkCircleOutline className="text-[#50CA1C] mr-[1rem] text-[1rem]" />
                        <p>All London events in one place</p>
                    </div>
                    <div className="w-[%100] flex items-center justify-start mt-[2rem]">
                        <IoMdCheckmarkCircleOutline className="text-[#50CA1C] mr-[1rem] text-[1rem]" />
                        <p>Create and organize your own events</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FirstSection;