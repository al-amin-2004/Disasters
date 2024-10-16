import { FaBars, FaBell, FaTimes } from "react-icons/fa";
import { Container } from "../common/container";
import { navItems } from "../db";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {

    const [openNav, setOpenNav] = useState(false);

    const handleNavbar = () => {
        setOpenNav(!openNav)
    }

    return(
        <>
        <nav className="pt-[23px] pb-[18px] bg-[#E4E4E7] border border-b-[#d3d3d3]">
            <Container className="flex justify-between items-center">
                <img src="img/logo.png" alt="Logo" />

                <menu>
                    <ul className={` hidden md:flex items-center gap-[25px] lg:gap-[35px] text-accent text-sm leading-[18px] ${openNav && "openNav"}`}>

                        {openNav && <FaTimes onClick={handleNavbar} className="text-lg me-5 mb-5 self-end cursor-pointer"/>}
                        
                        {navItems.map(({label, linkTo}, i) => (
                            <NavLink to={linkTo} key={i} className={`hover:text-primary hover:font-semibold transition-all duration-200 cursor-pointer ${openNav && "w-full py-3 border border-b-secondary"}`}> <li>{label}</li> </NavLink>
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

                    <div className="text-accent hidden lg:block">
                        <h3 className="text-base font-semibold leading-5">Usman Zafar</h3>
                        <p className="text-sm leading-[18px]">usmanzafar@gmail.com</p>
                    </div>

                    <div className="text-accent ">
                        <FaBars className="md:hidden text-xl cursor-pointer" onClick={handleNavbar}/>
                    </div>
                </div>
            </Container>
        </nav>

        <Outlet/>
        </>
    )
}