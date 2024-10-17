import { Container } from "../common/container";
import { SectionTitle } from "../common/section-title";
import { FaSearch } from "react-icons/fa";



export const IncidentStep5 = () => {
    return(
        <>
        <section className="py-14">
            <Container className="w-[752px]">
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