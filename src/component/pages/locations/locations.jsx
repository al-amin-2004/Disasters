import { Button } from "../../common/button";
import { Container } from "../../common/container";
import { SectionTitle } from "../../common/section-title";
import { IoSearch } from "react-icons/io5";
import { TiLocation } from "react-icons/ti";
import { Cards } from "../../shared/cards";
import { locationCards } from "../../db";

export const Location = () => {
    return(
        <>
        <section className="bg-[#E4E4E7] py-[29px]">
            <Container className="flex flex-col md:flex-row justify-between items-center gap-3">
                <div className="space-y-[6px]">
                    <p className="text-xs text-center text-accent md:text-start">Incidents - DR-4699 March 2023 Severe Storms</p>
                    <div className="flex items-center gap-[15px]">
                        <img src="img/Group-13.png"/>
                        <SectionTitle> DR-4699 March 2023 Severe Storms</SectionTitle>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-1.5 md:gap-3.5 text-accent">
                    <div className="w-full flex gap-[5px] bg-white py-3 px-2.5 rounded-md border border-[#d3d3d3] cursor-pointer">
                        <IoSearch className="text-lg"/>
                        <input type="text" placeholder="Search incident" className="text-xs border-none outline-none"/>
                    </div>
                    <div className="w-full flex gap-[5px] bg-white py-3 px-2.5 rounded-md border border-[#d3d3d3] cursor-pointer">
                        <input type="date" className="text-xs border-none outline-none w-full"/>
                    </div>
                    <Button className="w-full">New Location</Button>
                </div>
            </Container>
        </section>


        <section>
            <Container className="grid grid-cols-1 xl:grid-cols-[680px_526px] gap-x-[94px]">
                <div>
                    <div className="space-y-[45px] py-10 border-b border-b-[#E4E4E7]">
                        <div className="flex items-center gap-[15px]">
                            <TiLocation className="text-[53px] text-accent rounded-full p-3 bg-[#F4F4F5]"/>
                            <div>
                                <p>Location</p>
                                <SectionTitle>Tulare County,  Los Angles, CA 23415</SectionTitle>
                            </div>
                        </div>
                        <div className="flex items-center gap-[15px]">
                            <img src="img/Frame.png" className="scale-125 rounded-full p-3 bg-[#F4F4F5]"/>
                            <div>
                                <p>Approx. Cost:</p>
                                <SectionTitle>$60,607,456.00</SectionTitle>
                            </div>
                        </div>
                    </div>

                    <div className="py-10 border-b border-b-[#E4E4E7]">
                        <SectionTitle className="text-sm">Description</SectionTitle>
                        <p className="text-base text-accent">Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</p>
                    </div>

                    <div className="py-10 border-b border-b-[#E4E4E7]">
                        <div className="flex justify-between items-center">
                            <SectionTitle className="text-sm">Locations</SectionTitle>
                            <p className="text-[#A1A1AA] text-sm underline cursor-pointer hover:text-blue-600">See all</p>
                        </div>
                        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-[17.5px] mt-2">
                            {locationCards.map((locationCard, i) => (
                                <Cards key={i} {...locationCard}/>
                            ))}
                        </div>
                    </div>

                    <div className="py-10 border-b border-b-[#E4E4E7]">
                        <div className="flex justify-between items-center">
                            <SectionTitle className="text-sm">Activities</SectionTitle>
                            <p className="text-[#A1A1AA] text-sm underline cursor-pointer hover:text-blue-600">See all</p>
                        </div>
                        <div className="mt-2 space-y-[15px]">
                            {Array.from(Array(2).keys()).map((el) => (
                                <div key={el} className="flex flex-col sm:flex-row items-start sm:items-center gap-[17px] py-[15px] px-2.5 bg-[#F4F4F5] rounded-[10px]">
                                <img src="img/building-3.png"/>
                                <div>
                                    <h2 className="font-bold text-base leading-[30px] text-secondary">Activity name</h2>
                                    <p className="text-sm leading-[30px] text-accent">Location name: 16.12212, -122.1424</p>
                                    <h3 className="font-bold text-base leading-[30px] text-secondary">$1,456,654.00</h3>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>

                    <div className="py-10 border-b border-b-[#E4E4E7]">
                        <div className="flex justify-between items-center">
                            <SectionTitle className="text-sm">Documents</SectionTitle>
                            <p className="text-[#A1A1AA] text-sm underline cursor-pointer hover:text-blue-600">See all</p>
                        </div>
                        <div className="mt-2 space-y-[15px]">
                            {Array.from(Array(2).keys()).map((el) => (
                                <div key={el} className="flex flex-col sm:flex-row items-start sm:items-center gap-[17px] py-[15px] px-2.5 bg-[#F4F4F5] rounded-[10px]">
                                <img src="img/building-3.png"/>
                                <div>
                                    <h2 className="font-bold text-base leading-[30px] text-secondary">Document name</h2>
                                    <p className="text-sm leading-[30px] text-accent">Location name: 16.12212, -122.1424</p>
                                    <h3 className="font-bold text-base leading-[30px] text-secondary">$1,456,654.00</h3>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="space-y-5 py-10">
                    <p className="text-sm text-accent leading-[22px]">Incident Map</p>
                    <img src="img/map-2.png" alt="Location Map" />
                    <p className="text-sm text-accent leading-[22px]">Start 19.1232, -118.233 End 19.3245, -119.2323</p>
                </div>
            </Container>
        </section>
        </>
    )
}