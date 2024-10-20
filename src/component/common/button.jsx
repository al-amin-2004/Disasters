import { twMerge } from "tailwind-merge";

export const Button = ({className, children, onClick}) => {
    return(
        <button className={twMerge("py-3 px-[25px] bg-primary text-xs font-bold text-[#FAFAFA] rounded-md hover:scale-105 transition-all duration-200", className)} onClick={onClick}>{children}</button>
    )
}