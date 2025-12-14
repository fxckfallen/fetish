'use client'

import { CircleCheck, Eye, Heart, ShoppingCart } from "lucide-react";
import { DashboardDataBlock } from "./dashboard-data-block";
import { useIsMobile } from "@/hooks/useIsMobile";

interface Props {

}

export const DashboardBlocks: React.FC<Props> = ({

}) => {
    const isMobile = useIsMobile();
    if (isMobile)
        return (
            <div className="flex flex-col justify-between items-center gap-[100px]">
                <DashboardDataBlock Icon={Eye} color={'#7A87FF'} number={1300} desc={'Total items viewied'}/>
                <DashboardDataBlock Icon={ShoppingCart} color={'#FE5454'} number={500} desc={'Items added to cart'}/>
                <DashboardDataBlock Icon={Heart} color={'#4DA9FF'} number={700} desc={'Items added to wishlist'}/>
                <DashboardDataBlock Icon={CircleCheck} color={'#5FDC3F'} number={100} desc={'Total orders this month'}/>
            </div>
        )
    else
    return (
        <div className="flex  justify-between items-center gap-[100px]">
            <DashboardDataBlock Icon={Eye} color={'#7A87FF'} number={1300} desc={'Total items viewied'}/>
            <DashboardDataBlock Icon={ShoppingCart} color={'#FE5454'} number={500} desc={'Items added to cart'}/>
            <DashboardDataBlock Icon={Heart} color={'#4DA9FF'} number={700} desc={'Items added to wishlist'}/>
            <DashboardDataBlock Icon={CircleCheck} color={'#5FDC3F'} number={100} desc={'Total orders this month'}/>
        </div>
    )
};
