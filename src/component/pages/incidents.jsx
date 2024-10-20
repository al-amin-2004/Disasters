import { useState } from "react";
import { Incident } from "../shared/incident";
import { IncidentStep2 } from "../shared/incidentstep2";
import { IncidentStep3 } from "../shared/incidentstep3";
import { IncidentStep4 } from "../shared/incidentstep4";
import { IncidentStep5 } from "../shared/incidentstep5";
import { SectionTitle } from "../common/section-title";
import { Button } from "../common/button";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { Container } from "../common/container";
import { ProgressComponent } from "../common/progress";
import { RxCross2 } from "react-icons/rx";
import { twMerge } from "tailwind-merge";


const ShowStep = ({step, handleStep}) => {

    switch (step) {
    case 1:
        return <Incident/>
    break;
    case 2:
        return <IncidentStep2 handleStep={handleStep}/>
    break;
    case 3:
        return <IncidentStep3/>
    break;
    case 4:
        return <IncidentStep4/>
    break;
    case 5:
        return <IncidentStep5/>
        }
}


export const Incidents = () => {

    const [step, setStep] = useState(1);
    
    const handleStep = () => {
        setStep(step + 1)

        if (step == 5) {
            setStep(1)
        }
    }

    return(
        <>

        <section className="bg-[#E4E4E7] py-[29px]">
            <Container className={twMerge("flex flex-col lg:flex-row justify-between items-center gap-3", step == 2 && "hidden")}>
                <div className="flex items-center gap-[13px]">
                    <div className="text-xl p-3 bg-[#FAFAFA] rounded-full border border-[#E4E4E7] cursor-pointer"><RxCross2 /></div>
                    <div className="space-y-[6px]">
                        <p className="text-xs text-center text-accent md:text-start">Home - Incidents {step >= 3 && "- New Incident"}</p>
                        <SectionTitle>New Incident</SectionTitle>
                    </div>
                </div>

                
                <div className={step < 3 || step > 5 ? "hidden" : "block"}>
                    <ProgressComponent value={step == 3 && "33" || step == 4 && "66" || step == 5 && "100"} className="hidden lg:block"/>
                </div>


                {step < 2 ? (
                    <div className={twMerge("flex flex-col md:flex-row items-center gap-1.5 md:gap-3.5 text-accent")}>
                        <div className="w-full flex gap-[5px] bg-white py-3 px-2.5 rounded-md border border-[#d3d3d3] cursor-pointer">
                            <IoSearch className="text-lg"/>
                            <input type="text" placeholder="Search incident" className="text-xs border-none outline-none"/>
                        </div>
                        <div className="w-full flex gap-[5px] bg-white py-3 px-2.5 rounded-md border border-[#d3d3d3] cursor-pointer">
                            <input type="date" className="text-xs w-full"/>
                        </div>
                        <Button className="w-full flex gap-[5px] items-center" onClick={handleStep}><FaPlus className="text-base"/>New Incident</Button>
                    </div>
                ) : (
                    <div className="flex flex-col sm:flex-row items-center gap-1.5 md:gap-3.5 text-accent w-full md:w-auto">
                        <Button className="px-10 text-accent bg-[#FAFAFA] border border-[#d4d4d8] w-full" onClick={() => setStep(step - 1)}>Back</Button>
                        <Button className="w-full text-nowrap" onClick={handleStep}>{step == 5 ? "Finished" : "Next step"}</Button>
                    </div>
                )}
            </Container>
        </section>


        <ShowStep step={step} handleStep={handleStep}/>
        </>
    )
}
