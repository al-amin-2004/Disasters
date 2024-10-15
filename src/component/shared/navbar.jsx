import { FaBell } from "react-icons/fa";
import { Container } from "../common/container";
import { navItems } from "../db";
import { NavLink, Outlet } from "react-router-dom";

export const Navbar = () => {
    return(
        <>
        <nav className="pt-[23px] pb-[18px] bg-[#E4E4E7] border border-b-[#d3d3d3]">
            <Container className="flex justify-between items-center">
                <img src="img/logo.png" alt="Logo" />

                <menu>
                    <ul className="flex items-center gap-[35px] text-accent text-sm leading-[18px]">
                        {navItems.map(({label, linkTo}, i) => (
                            <NavLink to={linkTo} key={i}> <li className="cursor-pointer">{label}</li> </NavLink>
                        ))}
                    </ul>
                </menu>

                <div className="flex items-center gap-[9px]">
                    <div className="bg-[#FAFAFA] rounded-full p-2.5 border border-white relative">
                        <FaBell className="cursor-pointer text-[17px] text-[#09090B] opacity-40  ">
                        </FaBell>
                            <div className="absolute size-2.5 bg-[#4ADE80] rounded-full -top-[1px] -right-[1px] border border-white"/>
                    </div>

                    <div>
                        <img src="img/user.png" alt="User Image" className="cursor-pointer"/>
                    </div>

                    <div className="text-accent ">
                        <h3 className="text-base font-semibold leading-5">Usman Zafar</h3>
                        <p className="text-sm leading-[18px]">usmanzafar@gmail.com</p>
                    </div>
                </div>
            </Container>
        </nav>

        <Outlet/>
        </>
    )
}