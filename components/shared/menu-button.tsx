'use client'

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Menu, Search, User as UserIcon } from "lucide-react";

interface Props {
    onClick?: () => void;
}

export const MenuButton: React.FC<Props> = ({
    onClick
}) => {
    const path = usePathname()
    return(
        <button onClick={onClick} className={cn("flex border ml-5 hover:border-black rounded-lg py-2 px-4 group items-center justify-center cursor-pointer whitespace-nowrap tranition-all duration-300 p-2 bg-transparent ", path === '/' ? 'text-white hover:border-white' : '')}>
            <Menu />
        </button>
    ) 
    
};