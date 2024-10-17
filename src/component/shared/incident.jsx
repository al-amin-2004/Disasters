import { Container } from "../common/container";
import { Cards } from "../shared/cards";
import { cardDatas } from "../db/index";


export const Incident = () => {
    return(
        <>
        <section className="py-10">
            <Container className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-[25px] gap-y-[35px]">
                {cardDatas.map((cardData, i) => (
                    <Cards key={i} {...cardData}/>
                ))}
            </Container>
        </section>
        </>
    )
}