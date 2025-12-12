'use client'

import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface Props {
    children: React.ReactNode
}

export const SidebarBox: React.FC<Props> = ({
    children
}) => {
    const pathname = usePathname();
    
    return (
        <div className={twMerge('', pathname === '/' ? 'text-white' : '')}>
            {children}
                
        </div>
    )
};