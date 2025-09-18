import people from "../people.json";
import { FaStar } from "react-icons/fa6";

interface Person{
    id: number,
    image: string
}

const OnboardDesktopView = () => {
    return (
        <div className="relative w-[100%] h-[100%] px-[10%] text-white flex flex-col items-start justify-center">
            <img className="absolute top-0 bottom-0 left-0 right-0 object-cover w-[100%] h-[100%]" src="https://plus.unsplash.com/premium_photo-1661715804059-cc71a28f2c34?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#53389E]/75"></div>
            <div className="w-[5rem] relative mb-[6rem]">
                <svg className="absolute top-0" width="1.2rem" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C7.62742 12 12 7.62742 12 0C12 7.62742 16.3726 12 24 12C16.3726 12 12 16.3726 12 24C12 16.3726 7.62742 12 0 12Z" fill="#FEC84B"/>
                </svg>

                <svg width="4rem" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 40C25.4247 40 40 25.4247 40 0C40 25.4247 54.5753 40 80 40C54.5753 40 40 54.5753 40 80C40 54.5753 25.4247 40 0 40Z" fill="white"/>
                </svg>
                
                <svg className="absolute top-[20%] right-[20%]" width=".7rem" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C7.62742 12 12 7.62742 12 0C12 7.62742 16.3726 12 24 12C16.3726 12 12 16.3726 12 24C12 16.3726 7.62742 12 0 12Z" fill="#FEC84B"/>
                </svg>
            </div>
            <h1 className="text-[2rem] font-bold w-[70%] mb-[1rem] z-[2]">Explore events, meet people & stay connected.</h1>
            <p className="text-[#C398EE] z-[2]">Discover exciting events, register quickly, and enjoy seamless experiences with our-friendly platform designed for events enthusiasts.</p>
            <div className="flex items-center mt-[2rem] z-[2]">
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
                <div className="ml-[1rem]">
                    <div className="flex items-center">
                        <div className="flex mr-[1rem]">
                            <FaStar className="text-[#F3CE49] w-[.5rem]" />
                            <FaStar className="text-[#F3CE49] w-[.5rem]" />
                            <FaStar className="text-[#F3CE49] w-[.5rem]" />
                            <FaStar className="text-[#F3CE49] w-[.5rem]" />
                            <FaStar className="text-[#F3CE49] w-[.5rem]" />
                        </div>
                        <p className="text-[.5rem]">5.0</p>
                    </div>
                    <p className="text-[#C398EE] text-[.5rem]">From 200+ reviews</p>
                </div>
            </div>
        </div>
    )
}

export default OnboardDesktopView;