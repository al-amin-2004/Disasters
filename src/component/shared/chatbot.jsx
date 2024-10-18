import { Button } from "../common/button";
import { BsCamera } from "react-icons/bs";
import { SlPicture } from "react-icons/sl";
import { GoPaperclip } from "react-icons/go";

export const Chatbot = () => {
    const chatstyle = {
        maxWidth: "213px",
        fontSize: "12px",
        lineHeight: "19px",
        padding: "15px 12px",
        borderRadius: "7px",
        letterSpacing: "0.05em",
    };

    const chatBox = document.querySelector(".overflow-y-scroll");
    // chatBox.scrollTo(0, chatBox.scrollHeight);
    console.log();
    
    return(
        <>
        <section className="absolute right-16 bottom-10">
            <div className="w-[331px] bg-[#F4F4F5] rounded-xl overflow-hidden">
                <div className="bg-primary py-[25px] px-[15px]">
                    <h2 className="text-lg font-bold  text-[#fafafa]">Chat with Cypher</h2>
                </div>

                <div className="p-[15px]">
                    <div className="h-[273px] overflow-y-scroll my-[15px] space-y-[15px]">
                        <p style={chatstyle} className="float-right text-white bg-[#3F3F46]">Lorem ipsum dolar sit general sac mascho werho</p>

                        <p style={chatstyle} className="float-left text-accent border border-[#E4E4E7]"> Lorem ipsum dolar sit general sac mascho werho</p>

                        <p style={chatstyle} className="float-left text-accent border border-[#E4E4E7]"> Lorem ipsum dolar sit general sac mascho werho</p>

                        <p style={chatstyle} className="float-right text-white bg-[#3F3F46]">Lorem ipsum dolar sit general sac mascho werho</p>

                        <p style={chatstyle} className="float-left text-accent border border-[#E4E4E7]"> Lorem ipsum dolar sit general sac mascho werho</p>
                    </div>

                    <div className="space-y-2.5">
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
        </section>
        </>
    )
}