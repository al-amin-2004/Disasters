import { Container } from "../common/container";
import { Button } from "../common/button";
import { SectionTitle } from "../common/section-title";
import { RxCross2 } from "react-icons/rx";
import { ProgressComponent } from "../common/progress";
import { FaSearch } from "react-icons/fa";



export const IncidentStep5 = () => {
    return(
        <>
        <section className="bg-[#E4E4E7] py-[29px]">
            <Container className="flex flex-col lg:flex-row justify-between items-center gap-3">
                <div className="flex items-center gap-[13px]">
                    <div className="text-xl p-3 bg-[#FAFAFA] rounded-full border border-[#E4E4E7] cursor-pointer"><RxCross2 /></div>
                    <div className="space-y-[6px]">
                        <p className="text-xs text-center text-accent md:text-start">Home - Incidents - New Incident</p>
                        <SectionTitle>New Incident</SectionTitle>
                    </div>
                </div>

                <div>
                    <ProgressComponent value="75" className="hidden lg:block"/>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-1.5 md:gap-3.5 text-accent w-full md:w-auto">
                    <Button className="px-10 text-accent bg-[#FAFAFA] border border-[#d4d4d8] w-full">Back</Button>
                    <Button className="w-full text-nowrap">Finished</Button>
                </div>
            </Container>
        </section>

        <section className="py-14">
            <Container className="max-w-[752px]">
                <div>
                    <SectionTitle>Where’s the incident?</SectionTitle>
                    <p className="text-sm text-accent leading-[22px] mb-6 mt-3 max-w-[518px]">Enter a GPS, address. or pin point on the map. Try to be as accurate as possible, or click:Jurisdiction Wide</p>
                    
                    <div className="relative rounded-[10px] overflow-hidden"> 
                        <img src="img/map.png" alt="Location Map" />
                        <div className="space-y-[5px] absolute top-2.5 left-2.5">
                            <div className="w-[250px] h-[42px] py-3 px-2.5 rounded-md bg-[#F4F4F5] border border-[#e4e4e7] flex items-center gap-[5px]">
                                <FaSearch className="text-accent text-sm"/>
                                <input type="text"placeholder="Enter incident address or GPS" className="bg-transparent border-none outline-none placeholder:text-xs"/>
                            </div>
                            <div className="w-[250px] h-[42px] py-3 px-2.5 rounded-md bg-[#F4F4F5] border border-[#e4e4e7] flex items-center gap-[5px]">
                                <FaSearch className="text-accent text-sm"/>
                                <input type="text"placeholder="Pinpoint damage" className="bg-transparent border-none outline-none placeholder:text-xs"/>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        </>
    )
}