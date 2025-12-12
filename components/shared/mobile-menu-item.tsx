'use client';

import React, { useState, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface Props {
    type: 'link' | 'dropdown';
    children: ReactNode;
    url?: string;
    title?: string;
    isChild?: boolean;
}

export const MobileMenuItem: React.FC<Props> = ({
    type,
    children,
    url,
    title,
    isChild
}) => {
    const [isOpen, setIsOpen] = useState(false);

    if (type === 'link') {
        return (
            <Link
                href={url || "#"}
                className={cn(
                    "text-[18px] font-semibold tracking-[3px] w-full block",
                    isChild ? 'ml-0 mt-[8px]' : 'mx-[20px] mt-[20px]'
                )}
            >
                {children}
            </Link>
        );
    }

    // dropdown
    return (
        <div className="mx-[20px] mt-[20px] w-full">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[18px] font-semibold tracking-[3px] w-full text-left flex justify-between items-center "
            >
                <span>{title}</span>
                <ChevronDown
                    size={20}
                    className={cn(
                        "w-5 h-5 transition-transform duration-300 text-black translate-x-[-40px]",
                        isOpen && "rotate-180"
                    )}
                />
            </button>
            <div
                className={cn(
                    "overflow-hidden transition-all duration-500 ease-in-out",
                    isOpen ? "max-h-[500px]" : "max-h-0"
                )}
            >
                <div className="ml-[10px]">
                    {children}
                </div>
            </div>
        </div>
    );
};
