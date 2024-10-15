import { FaCloudShowersHeavy } from "react-icons/fa";

export const Cards = ({img, weather, title, location, price}) => {
    return(
        <div className="max-w-[306px] space-y-5">
            <div className="relative">
                <img src={img} alt="" />
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fafafa] absolute top-2.5 right-2.5">
                    <FaCloudShowersHeavy />
                    <p className="font-bold text-xs leading-[30px] text-[#18181B]">Blizzard</p>
                </div>
            </div>
            <div>
                <h2 className="font-bold text-base leading-[30px] text-secondary">Tulare County</h2>
                <p className="text-sm leading-[30px] text-accent">Tulare County,  Los Angles, CA 23415</p>
                <h3 className="font-bold text-base leading-[30px] text-secondary">$1,456,654.00</h3>
            </div>
        </div>
    )
}