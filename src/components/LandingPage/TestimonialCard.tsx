import { FaStar } from "react-icons/fa6";

interface TestimonialCardProps{
    name: string,
    image: string,
    jobRole: string,
    comment: string,
    numberOfStars: number

}

const TestimonialsCard = ({image, name, jobRole, comment, numberOfStars}: TestimonialCardProps) => {
    return(
        <div className="w-[100%] border-1 border-[#E3E8EF] rounded-md mt-[2rem] p-[2rem] shadow-lg">
                <div className="flex items-center mb-[2rem]">
                    <img className="rounded-full w-[3rem] mr-[1rem]" src={image} />
                    <div className="flex flex-col">
                        <h3 className="font-bold text-[1.5rem]">{name}</h3>
                        <p>{jobRole}</p>
                    </div>
                </div>
                <p>{comment}</p>
                <div className="flex mt-[2rem]">
                    <FaStar className="text-[#F3CE49]" />
                    <FaStar className="text-[#F3CE49]" />
                    <FaStar className="text-[#F3CE49]" />
                    <FaStar className="text-[#F3CE49]" />
                    <FaStar className="text-[#F3CE49]" />
                </div>
            </div>
    )
}

export default TestimonialsCard;