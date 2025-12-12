
import { cn } from "@/lib/utils";
import { Search, User as UserIcon } from "lucide-react";

interface Props {
    opened: boolean
}

export const MobileSearchBar: React.FC<Props> = ({
    opened
}) => {
    return(
        <div className={cn("fixed w-full flex items-center px-2  h-[5%] bg-white transition-all duration-300 border-b", opened ? 'top-[calc(70px+2rem)] opacity-100 z-[48]' : 'z-[-1] top-0 opacity-0')}>
            <Search/>
            <input type="text" placeholder="Search" className="w-full h-full ml-2 border-none outline-none text-[15px] "/>
        </div>
    ) 
    
};