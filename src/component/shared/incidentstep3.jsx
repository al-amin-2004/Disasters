import { Container } from "../common/container";
import { SectionTitle } from "../common/section-title";
import { step3 } from "../db";
import { useState } from "react";
import { twMerge } from "tailwind-merge";



export const IncidentStep3 = () => {

    const [active, setActive] = useState()



    return(
        <>
        <section className="py-14">
            <Container className="max-w-[769px] space-y-[25px]">
                <SectionTitle className="text-2xl">Which of these best describes the incident?</SectionTitle>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-[11px]">
                    {step3.map(({img, title}, i) => (
                        <div key={i} className={twMerge("w-full md:w-[180px] h-[69px] py-[22px] px-5 rounded-md bg-[#F4F4F5] border border-[#E4E4E7] flex items-center gap-2.5 text-accent cursor-pointer", active == i && "bg-primary text-white")} onClick={() => setActive(i)}>
                            <img src={img} className="fill-primary"/>
                            <p className="text-sm leading-[18px]">{title}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
        </>
    )
}
