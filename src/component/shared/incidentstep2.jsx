import { Container } from "../common/container";
import { Button } from "../common/button";
import { SectionTitle } from "../common/section-title";
import { step2 } from "../db/index"


export const IncidentStep2 = ({handleStep}) => {
    return(
        <>
        <section className="py-10">
            <Container>
                <div className="space-y-[33px]">
                    <div className="space-y-[14px] text-center">
                        <SectionTitle>Let’s get started</SectionTitle>
                        <p className="max-w-[468px] mx-auto">Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit gene</p>
                    </div>

                    <div className="px-6 sm:px-12 md:px-[103px]">
                    <div className="w-full bg-[#E4E4E7] h-[3px] flex justify-between">
                        {Array.from(Array(3).keys()).map((el) => (
                            <div key={el} className="size-[29px] bg-[#E4E4E7] rounded-full -mt-3"/>
                        ))}
                    </div>
                    </div>
                        
                    <div className="flex flex-col md:flex-row justify-center items-center gap-[55px]">
                        {step2.map(({img, title, des}, i) => (
                            <div key={i} className="max-w-[235px] py-[25px] px-[20px] rounded-[10px] bg-[#F4F4F5] border border-[#E4E4E7] space-y-[68px]">
                                <img src={img}/>
                                <div className="space-y-[22px]">
                                    <h3 className="text-xl font-bold leading-[29px] text-secondary">{title}</h3>
                                    <p className="text-sm leading-[22px] text-accent">{des}</p>
                                </div>
                            </div>
                        ))}
                        
                    </div>

                    <div className="text-center">
                        <Button onClick={handleStep}>Get started</Button>
                    </div>
                </div>
            </Container>
        </section>
        </>
    )
}



