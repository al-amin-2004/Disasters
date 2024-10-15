import { Container } from "../../common/container";
import { SectionTitle } from "../../common/section-title";
import { Button } from "../../common/button";
import { IoSearch } from "react-icons/io5";
import { Cards } from "../../shared/cards";
import { cardDatas } from "../../db";

export const Home = () => {
    return(
        <>
        <section className="bg-[#E4E4E7] py-[29px]">
            <Container className="flex justify-between items-center">
                <div className="space-y-[6px]">
                    <p className="text-xs">Welcome Back</p>
                    <SectionTitle>Dashboard</SectionTitle>
                </div>

                <div className="flex items-center gap-3.5 text-accent">
                    <div className="flex gap-[5px] bg-white py-3 px-2.5 rounded-md border border-[#d3d3d3] cursor-pointer">
                        <IoSearch className="text-lg"/>
                        <input type="text" placeholder="Search incident" className="text-xs border-none outline-none"/>
                    </div>
                    <div className="flex gap-[5px] bg-white py-3 px-2.5 rounded-md border border-[#d3d3d3] cursor-pointer">
                        <input type="date" className="text-xs"/>
                    </div>
                    <Button>Cypher AI</Button>
                </div>
            </Container>
        </section>

        <section className="py-10">
            <Container className="grid grid-cols-4 gap-x-[25px] gap-y-[35px]">
                {cardDatas.map((cardData, i) => (
                    <Cards key={i} {...cardData}/>
                ))}
            </Container>
        </section>
        </>
    )
}