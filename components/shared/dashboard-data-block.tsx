'use client'

import { LucideIcon } from "lucide-react";

interface Props {
    Icon: LucideIcon;
    color: string;
    number: number;
    desc: string
}

export const DashboardDataBlock: React.FC<Props> = ({
    Icon,
    color,
    number,
    desc
}) => {
    return (
        <div className={` flex flex-col gap-[10px] w-full p-5 rounded-lg text-white max-w-[300px]`} style={{backgroundColor: color}}>
            <Icon width={90} height={90}/>
            <span className="text-[48px] font-bold">{number}</span>
            <span className="text-[25px] font-medium">{desc}</span>
        </div>
    )
};