import { Container } from "../common/container";
import { SectionTitle } from "../common/section-title";



export const IncidentStep4 = () => {
    return(
        <>
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