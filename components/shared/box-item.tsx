'use client'

import { ChevronDown, LucideIcon, Play } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
    text: string;
    type: string;
    url?: string;
    children?: React.ReactNode
}

export const BoxItem: React.FC<Props> = ({
    text,
    type,
    url,
    children
}) => {
    if (type === "link") {
        return (
            <a href={url} className="flex group items-center content-center  uppercase translate-x-[-15px] hover:translate-x-0 transition-all duration-300">
                <Play size={12} className="opacity-0 transition-all duration-300 group-hover:opacity-100 fill-white"/>
                <span className="group-hover:ml-3 transition-all duration-300 font-semibold tracking-widest leading-tight text-sm">
                    {text}
                </span>
            </a>
        )
    }
    const [open, setOpen] = useState(false);
    return (
        <div className="font-semibold tracking-widest uppercase transition-all duration-300 cursor-default">
            <div className="flex items-center content-center translate-x-[-15px] hover:translate-x-0 transition-all duration-300 group" onClick={() => setOpen(!open)}>
                <Play size={12} className="opacity-0 transition-all duration-300 group-hover:opacity-100 "/>
                <span className="group-hover:ml-3 transition-all duration-300 font-semibold tracking-widest leading-tight text-sm">
                    {text}
                </span>
                <ChevronDown size={20} className={twMerge('transition-all duration-1000', open ? 'rotate-180 opacity-100' : ' rotate-0 opacity-50  ')}/>
            </div>
            <div
                className={twMerge(
                    'ml-3 transition-all  duration-300',
                    open ? 'max-h-[500px]' : 'max-h-0 overflow-hidden'
                )}
                style={{
                    maxHeight: open && Array.isArray(children) ? `${children.length * 24}px` : '0',
                }}
            >
                {children}
            </div>
        </div>
    )

};