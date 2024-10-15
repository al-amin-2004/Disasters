import { useState } from "react"
import { RxCross2 } from "react-icons/rx";
import { twMerge } from "tailwind-merge";


export const ChatBox = () => {

    const [chatOpen, setChatOpen] = useState(false);

    return(
        <button className={twMerge('fixed bottom-16 md:bottom-24 lg:bottom-[117px] right-10 md:right-[70px] size-14 md:size-20 rounded-full bg-primary font-bebasNeue text-white text-[35px] md:text-[55px] leading-none flex justify-center items-center hover:scale-105 transition-all duration-200', chatOpen && "bg-white md:text-3xl text-black shadow-chatBtn")} onClick={() => setChatOpen(!chatOpen)}>
            {chatOpen ? <RxCross2 />: "C"}
        </button>
    )
}