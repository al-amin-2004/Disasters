import { Button } from "../common/button";
import { BsCamera } from "react-icons/bs";
import { SlPicture } from "react-icons/sl";
import { GoPaperclip } from "react-icons/go";

import { useState } from "react"
import { RxCross2 } from "react-icons/rx";
import { twMerge } from "tailwind-merge";


export const ChatBox = () => {

    const chatstyle = {
        maxWidth: "72%",
        fontSize: "12px",
        lineHeight: "19px",
        padding: "12px",
        borderRadius: "7px",
        letterSpacing: "0.05em",
    };

    const [chatOpen, setChatOpen] = useState(false);

    return(
        <section className="fixed bottom-16 md:bottom-24 lg:bottom-[117px] right-10 md:right-[70px] space-y-4">
            <div className={`w-screen h-screen fixed sm:static bottom-0 left-0 sm:h-auto sm:w-[331px] bg-[#F4F4F5] rounded-xl overflow-hidden transition-all duration-500 shadow-lg ${chatOpen ? "scale-100" : "scale-0"}`}>
                <div className="bg-primary py-[25px] px-[15px] flex justify-between items-center">
                    <h2 className="text-lg font-bold  text-[#fafafa]">Chat with Cypher</h2>
                    <RxCross2 className="sm:hidden text-xl cursor-pointer" onClick={() => setChatOpen(false)}/>
                </div>

                <div className="p-[15px] h-screen sm:h-auto">
                    <div className="sm:h-[273px] overflow-y-scroll my-[15px] space-y-[15px] chatScrollbar-hide">
                        <p style={chatstyle} className="float-right text-white bg-[#3F3F46]">Lorem ipsum dolar sit general sac mascho werho</p>

                        <p style={chatstyle} className="float-left text-accent border border-[#E4E4E7]"> Lorem ipsum dolar sit general sac mascho werho</p>

                        <p style={chatstyle} className="float-left text-accent border border-[#E4E4E7]"> Lorem ipsum dolar sit general sac mascho werho</p>

                        <p style={chatstyle} className="float-right text-white bg-[#3F3F46]">Lorem ipsum dolar sit general sac mascho werho</p>
                    </div>

                    <div className="space-y-2.5 w-full absolute sm:static bottom-0 left-0 p-3 sm:p-0">
                        <input type="text" placeholder="Enter your question..." className="w-full text-xs outline-none border border-[#E5E7EB] py-3 px-2.5 bg-[#F3F4F6] rounded-md"/>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3 text-accent text-2xl cursor-pointer">
                                <BsCamera />
                                <SlPicture />
                                <GoPaperclip />
                            </div>
                            <Button className="text-xs rounded-full">Send</Button>
                        </div>
                    </div>
                </div>
            </div>

            <button className={twMerge('float-end size-14 md:size-20 rounded-full bg-primary font-bebasNeue text-white text-[35px] md:text-[55px] leading-none flex justify-center items-center hover:scale-105 transition-all duration-200', chatOpen && "bg-white md:text-3xl text-black shadow-chatBtn")} onClick={() => setChatOpen(!chatOpen)}>
                {chatOpen ? <RxCross2 />: "C"}
            </button>
        </section>
    )
}