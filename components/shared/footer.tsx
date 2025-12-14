'use client';
import { usePathname } from "next/navigation";

interface Props {}


export const Footer: React.FC<Props> = ({

}) => {
    const pathname = usePathname();

    if (pathname === "/") return <></>

    return(
        <div className="fixed text-center bottom-[-105px] h-[150px] w-full bg-black transition-all duration-500 z-3 group hover:bottom-0">
            <div className="text-white mt-[10px] mb-[40px] opacity-100 transition-all duration-500 group-hover:opacity-0 group-hover:m-0 group-hover:mb-[0px]">
                Open Footer
            </div>
            <div className="flex justify-between items-center mx-[40px]">
                <div className="flex flex-col gap-y-[5px] gap-x-[60px] text-left">
                    <a className="text-white wrap-break-word" href="/cc">Customer Care</a>
                    <a className="text-white wrap-break-word" href="/cc">Shipping</a>
                    <a className="text-white wrap-break-word" href="/cc">Return</a>
                    <a className="text-white wrap-break-word" href="/cc">Private policy</a>
                </div>
                <div className="flex flex-col gap-y-[5px] gap-x-[60px] text-left">
                    <a className="text-white wrap-break-word">Contact us:</a>
                    <a className="text-white wrap-break-word" href="mailto:i.am.your.fetish1@gmail.com">i.am.your.fetish1@gmail.com</a>
                </div>
                <div className="flex flex-col gap-y-[5px] gap-x-[60px] text-left">
                    <a className="text-white wrap-break-word">Instagram:</a>
                    <a className="text-white wrap-break-word" href="https://www.instagram.com/i.am.your.fetish/">@i.am.your.fetish</a>
                </div>
                <div className="flex flex-col gap-y-[5px] gap-x-[60px] text-left">
                    <a className="text-white wrap-break-word">ФОП Фетисова-Колодіста Анастасія Віталіївна (ITN 3596802706).</a>
                    <a className="text-white wrap-break-word">Kyiv, Khreschatyk 38, 01001</a>
                </div>
            </div>
        </div>
    )

};
