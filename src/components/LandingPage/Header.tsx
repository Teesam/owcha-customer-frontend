import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import people from "../../people.json";
import {Carousel} from "flowbite-react";
import LogoIcon from "../../assets/Owcha Logo_Main.svg";

interface Person{
    id: number,
    image: string
}

const Header = () => {
    return(
        <header className="relative pr-[1rem] pl-[1rem]">
            <img className="absolute w-[10rem] opacity-10 top-[48%] scale-y-[-1] left-[-15%] rotate-250 z-[-1]" src={LogoIcon} />
            <img className="absolute w-[10rem] opacity-10 top-[60%] scale-y-[-1] right-[-15%] rotate-100 z-[-1]" src={LogoIcon} />
            <div className="rounded-lg mt-[1rem] mb-[1rem] bg-[#F5F5F6] flex justify-center items-center pt-1 pb-1 w-55">
                <IoLocationOutline className="text-[#EC6640] text-1xl mr-1" />
                <p className="text-[1rem]">#1 Social Event Platform</p>
            </div>
            <div className="w-100">
                <h1 className="text-[3rem] font-extrabold">Connect.</h1>
                <h1 className="text-[#EC6640] text-[3rem] font-extrabold">Explore.</h1>
                <h1 className="text-[3rem] font-extrabold">Exprerience.</h1>
            </div>
            <p className="text-[1.2rem] text-[#344054] mt-[2rem] mb-[2rem]">Discover London's most exciting events, connect with amazing people, and create unforgettable memories. Your gateway to the city's vibrant social scene.</p>
            <div className="w-100">
                <button className="flex items-center justify-center rounded-md bg-[#EC6640] text-[white] pr-5 pl-5 p-2 w-95">
                    Get Started
                    <IoIosArrowRoundForward className="ml-4 text-4xl" />
                </button>
            </div>
            <div className="flex items-center justify-between mt-5 mb-5">
                <div className="flex -space-x-2">
                    {
                        people.map((person: Person) => (
                            <img 
                                key={person.id} 
                                src = {person.image} 
                                alt="An image of a user" 
                                className="w-[1.5rem] h-[1.5rem] rounded-full border-2 border-[#fff] "
                            />
                        ))
                    }
                </div>
                <p className="text-[#344054]">{people.length}+ active users</p>
            </div>
            <div className="mt-[2rem] mb-[5rem] h-65">
                <Carousel>
                    <img className="h-100" src = "https://images.unsplash.com/photo-1465850238811-80ce79442c7a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="An image of the shard"/>
                    <img src = "https://images.unsplash.com/photo-1571936804022-90d128047136?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="An image of food"/>
                    <img src = "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="An image of a train in Scotland"/>
                </Carousel>
            </div>
        </header>
    )
}

export default Header;