"use client";

import { Heart } from "lucide-react";
import { useState } from "react";
import { twMerge } from 'tailwind-merge'

interface Props {
    id: number;
    title: string;
    price: number;
    image: string;
    image2: string;
    type: number;   
    liked: boolean
}

export const Offer: React.FC<Props> = ({
    id, 
    title,
    price,
    image,
    image2,
    liked,
    type
}) => {
    const [like, setLike] = useState(liked);
    return (
        <div className={`relative mb-5 ${type === 1 ? 'w-[calc(50%-6px)] lg:w-[calc(33.3%-8px)]' : 'w-[calc(50%-6px)]'} h-full text-center`}>
            <Heart onClick={()=> setLike(!like)} size={20} className={twMerge(`z-20 absolute top-0 left-[18%] hover:scale-125 transition-all duration-300 cursor-pointer`, like ? 'fill-black' : '')}/>
            <a href={`/preview/${id}`} className="w-full h-full flex items-center justify-center ">
                <div className="flex w-[300px] overflow-hidden group ">
                    <img src={image} alt="offer" className="w-[300px] h-full group-hover:translate-x-[-300px] transition-all duration-300 z-[-1]"/>
                    <img src={image2} alt="offer" className="w-[300px] h-full group-hover:translate-x-[-300px] transition-all duration-300 z-[-1]"/>
                </div>
            </a>
            <p className="font-thin text-[0.9em] tracking-widest z-[-1] relative">{title}</p>
            <p className="font-semibold text-[0.9em] tracking-widest z-[-1] relative">${price}</p>
        </div>
    )
};