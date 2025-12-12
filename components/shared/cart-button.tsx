'use client'

import { useIsMobile } from "@/hooks/useIsMobile";
import { cn } from "@/lib/utils";
import { MoveRight, ShoppingCart } from "lucide-react";

interface Props {
    onClick?: () => void;
}

export const CartButton: React.FC<Props> = ({
    onClick: onCl
}) => {
    const isMobile = useIsMobile();
    return (
        <div className={cn("flex rounded-lg border border-black py-2 px-4 bg-black group items-center justify-center cursor-pointer mx-5 transition-all duration-300", isMobile ? 'p-2 bg-transparent border-border' : "")} onClick={onCl}>
            <div className={cn("relative w-6 h-6", isMobile ? "" : "mr-3")}>
                <ShoppingCart
                color={isMobile ? "black" : "white"}
                className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                size={24}
                />
                <MoveRight
                color={isMobile ? "black" : "white"}
                className="absolute inset-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 transform z-10"
                size={24}
                />
            </div>
            {!isMobile && <p className="h-6 text-[15px] text-white whitespace-nowrap pl-3 border-l text-center flex items-center">$ 40</p> }
        </div>

    )
};