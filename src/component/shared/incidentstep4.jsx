import { Container } from "../common/container";
import { Button } from "../common/button";
import { SectionTitle } from "../common/section-title";
import { RxCross2 } from "react-icons/rx";
import { ProgressComponent } from "../common/progress";



export const IncidentStep4 = () => {
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
                    <ProgressComponent value="50" className="hidden lg:block"/>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-1.5 md:gap-3.5 text-accent w-full md:w-auto">
                    <Button className="px-10 text-accent bg-[#FAFAFA] border border-[#d4d4d8] w-full">Back</Button>
                    <Button className="w-full text-nowrap">Next step</Button>
                </div>
            </Container>
        </section>

        <section className="py-14">
            <Container className="space-y-[25px]">
                <div>
                    <SectionTitle>Let’s give the incident a title?</SectionTitle>
                    <p className="text-sm text-accent leading-[22px] mb-6 mt-3">Make a title that will easily identify the incidents</p>
                    <input type="text" placeholder="Add title here" className="w-full py-3 px-2.5 bg-[#f4f4f5] rounded-md border border-[#e4e4e7] outline-none"/>
                </div>
                <div>
                    <SectionTitle>Describe what happened during the incident?</SectionTitle>
                    <p className="text-sm text-accent leading-[22px] mb-6 mt-3">Share some information about the incident. The when, where, how.</p>
                    <textarea rows="5" placeholder="Type here" className="w-full py-3 px-2.5 bg-[#f4f4f5] rounded-md border border-[#e4e4e7] outline-none resize-none"></textarea>
                </div>
            </Container>
        </section>
        </>
    )
}