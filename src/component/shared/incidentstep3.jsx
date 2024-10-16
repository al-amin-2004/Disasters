import { Container } from "../common/container";
import { Button } from "../common/button";
import { SectionTitle } from "../common/section-title";
import { RxCross2 } from "react-icons/rx";
import { ProgressComponent } from "../common/progress";
import { step3 } from "../db";
import { useState } from "react";
import { twMerge } from "tailwind-merge";



export const IncidentStep3 = () => {

    const [active, setActive] = useState()



    return(
        <>
        <section className="bg-[#E4E4E7] py-[29px]">
            <Container className="flex flex-col lg:flex-row justify-between items-center gap-3">
                <div className="flex items-center gap-[13px]">
                    <div className="text-xl p-3 bg-[#FAFAFA] rounded-full border border-[#E4E4E7]"><RxCross2 /></div>
                    <div className="space-y-[6px]">
                        <p className="text-xs text-center text-accent md:text-start">Home - Incidents - New Incident</p>
                        <SectionTitle>New Incident</SectionTitle>
                    </div>
                </div>

                <div>
                    <ProgressComponent value="25" className="hidden lg:block"/>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-1.5 md:gap-3.5 text-accent w-full md:w-auto">
                    <Button className="px-10 text-accent bg-[#FAFAFA] border border-[#d4d4d8] w-full">Back</Button>
                    <Button className="w-full text-nowrap">Next step</Button>
                </div>
            </Container>
        </section>

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
