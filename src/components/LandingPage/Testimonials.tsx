import Mascots from "../../assets/Owcha Mascots group.svg";
import TestimonialsCard from "./TestimonialCard";

const Testimonials = () => {
    return(
        <section className="w-[90%] relative flex flex-col items-center mt-[5rem] mr-[1rem] ml-[1rem]">
            <img className="absolute top-0 right-[10%] w-[6rem] rotate-30" src={Mascots} />
            <h1 className="text-[3rem] font-extrabold mb-[2rem] text-center w-[80%] leading-tight">What Owchies are saying</h1>
            <p className="text-[#344054] text-center">Join thousands who've transformed their social lives with Owcha</p> 
            <TestimonialsCard
                image="https://randomuser.me/api/portraits/men/5.jpg"
                name="Sarah Chen"
                jobRole="Software developer"
                comment={`"Owcha completely changed how I experience London. I've attended amazing events and made lifelong friends. The community is incredible!"`}
                numberOfStars={5}
            />
            <TestimonialsCard
                image="https://randomuser.me/api/portraits/women/50.jpg"
                name="James Rodriguez"
                jobRole="Marketing Manager"
                comment={`"As someone new to London, Owcha helped me discover the city's hidden gems and connect with locals. Best decision ever!"`}
                numberOfStars={5}
            />
            <TestimonialsCard
                image="https://randomuser.me/api/portraits/men/46.jpg"
                name="Emma Thompson"
                jobRole="Event organizer"
                comment={`"I've organized 15+ events through Owcha. The platform makes it so easy, and the community response is always fantastic!"`}
                numberOfStars={5}
            />
        </section>
    )
}

export default Testimonials;