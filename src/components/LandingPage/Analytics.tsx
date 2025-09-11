const Analytics = () => {
    return(
        <section className="flex flex-wrap items-center justify-between lg:justify-between lg:items-center w-[100vw] bg-[#340D5C] mt-[4rem] py-[5rem] px-[2rem] lg:px-[5rem] text-white">
            <div className="flex flex-col items-center w-[40%] lg:w-[25%] mb-[2rem] lg:mb-[unset]">
                <h1 className="font-bold text-[2rem] text-[#FF4B27]">25K+</h1>
                <p className="text-[.7rem]">Active Members</p>
            </div>
            <div className="flex flex-col items-center w-[40%] lg:w-[25%] mb-[2rem] lg:mb-[unset]">
                <h1 className="font-bold text-[2rem] text-[#7C1EDA]">5K+</h1>
                <p className="text-[.7rem]">Monthly Events</p>
            </div>
            <div className="flex flex-col items-center w-[40%] lg:w-[25%]">
                <h1 className="font-bold text-[2rem] text-[#00ABF0]">100K+</h1>
                <p className="text-[.7rem]">Connections Made</p>
            </div>
            <div className="flex flex-col items-center w-[40%] lg:w-[25%]">
                <h1 className="font-bold text-[2rem] text-[#FF4B27]">2K+</h1>
                <p className="text-[.7rem]">Activity Destination</p>
            </div>
        </section>
    )
}

export default Analytics;