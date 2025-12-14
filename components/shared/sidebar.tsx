'use client'

import { cn } from "@/lib/utils";
import { SidebarItem } from "./sidebar-item";
import { ChartNoAxesCombined, Settings, Shirt } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

interface Props {

}

export const Sidebar: React.FC<Props> = ({

}) => {
    const isMobile = useIsMobile();
    if (isMobile) return <></>
    return (
        <div className={cn(`w-[59px] h-full select-none fixed bg-black hover:w-[15%] transition-all duration-300 group group/sidebar z-10`)}>
            <div className="flex flex-col h-full">
                <SidebarItem href="" Icon={ChartNoAxesCombined}>Dashboard</SidebarItem>
                <SidebarItem href="offers" Icon={Shirt}>Offers</SidebarItem>
                <SidebarItem href="settings" Icon={Settings}>Settings</SidebarItem>
            </div>
        </div>
    )
};
