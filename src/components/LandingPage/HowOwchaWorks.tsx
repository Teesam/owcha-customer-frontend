import LogoIcon from "../../assets/Owcha Logo_Main.svg";
import useInView from "../../hooks/useInView";

const HowOwchaWorks = () => {
    const { ref, isVisible } = useInView<HTMLDivElement>();
    return(
        <section ref={ref}
            className={`transition-all duration-700 ease-in-out ${
            isVisible ? "opacity-100 mr-[1rem] lg:mr-[unset] ml-[1rem] relative flex flex-col items-center bg-[#FAFAFB] w-[90%] lg:w-[100%] lg:px-[5rem] pr-[1rem] pl-[1rem] mt-[5rem] pt-[5rem] pb-[10rem]"
            : "opacity-0 mr-[1rem] lg:mr-[unset] ml-[1rem] relative flex flex-col items-center bg-[#FAFAFB] w-[90%] lg:w-[100%] lg:px-[5rem] pr-[1rem] pl-[1rem] mt-[5rem] pt-[5rem] pb-[10rem]"}`}
        >
            <img className="absolute w-[3rem] opacity-5 top-[8%] left-[25%] rotate-20" src={LogoIcon} />
            <img className="absolute w-[3rem] opacity-5 top-[17%] right-[15%] rotate-35" src={LogoIcon} />
            <img className="absolute w-[3rem] opacity-5 top-[22%] left-[10%] rotate-20" src={LogoIcon} />
            <img className="absolute w-[3rem] opacity-5 top-[45%] right-[15%] rotate-20" src={LogoIcon} />
            <img className="absolute w-[3rem] opacity-5 top-[48%] left-[15%] rotate-20" src={LogoIcon} />
            <img className="absolute w-[3rem] opacity-5 bottom-[20%] right-[15%] rotate-20" src={LogoIcon} />
            <img className="absolute w-[3rem] opacity-5 bottom-[30%] left-[10%] rotate-20" src={LogoIcon} />
            <img className="absolute w-[3rem] opacity-5 bottom-[7%] right-[55%] rotate-30" src={LogoIcon} />
            <h3 className="text-[2rem] font-bold mb-[2rem] text-center">How Owcha Works</h3>
            <p className="text-center text-[#344054]">Getting started is simple and takes less than 2 minutes</p>
            <div className="lg:flex lg:w-[100%] lg:justify-evenly">
                <div className="flex flex-col items-center w-[100%] lg:w-[30%] mt-[3rem]">
                    <div className="bg-[#7C1EDA] h-[4rem] w-[4rem] rounded-lg text-white flex items-center justify-center"><p>1</p></div>
                    <h4 className="text-[1rem] font-bold mt-[2rem] mb-[1rem]">Sign Up</h4>
                    <p className="text-center text-[#344054]">Create your account in minutes, explore  and join our vibrant community</p>
                </div>
                <div className="flex flex-col items-center w-[100%] lg:w-[30%] mt-[3rem]">
                    <div className="bg-[#EC6640] h-[4rem] w-[4rem] rounded-lg text-white flex items-center justify-center"><p>2</p></div>
                    <h4 className="text-[1rem] font-bold mt-[2rem] mb-[1rem]">Discover Events</h4>
                    <p className="text-center text-[#344054]">Browse curated events or create your own unique experiences</p>
                </div>
                <div className="flex flex-col items-center w-[100%] lg:w-[30%] mt-[3rem]">
                    <div className="bg-[#00ABF0] h-[4rem] w-[4rem] rounded-lg text-white flex items-center justify-center"><p>3</p></div>
                    <h4 className="text-[1rem] font-bold mt-[2rem] mb-[1rem]">Connect & Enjoy</h4>
                    <p className="text-center text-[#344054]">Meet amazing people and create unforgettable memories</p>
                </div>
            </div>
        </section>
    )
}

export default HowOwchaWorks;