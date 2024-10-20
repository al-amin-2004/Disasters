import { Link } from "react-router-dom";
import { Button } from "../common/button";
import { Container } from "../common/container";
import { SectionTitle } from "../common/section-title";

export const Error = () => {
    return(
        <section>
            <Container className="text-center pt-20 space-y-10">
                <img src="img/error.svg" className="mx-auto"/>

                <div>
                    <SectionTitle>Oops! You seem to be lost</SectionTitle>
                <p className="text-accent w-8/12 mx-auto mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magni debitis corporis reprehenderit nemo. Molestiae?</p>
                </div>

                <Button><Link to="/">Go To Home</Link></Button>
            </Container>
        </section>
    )
}