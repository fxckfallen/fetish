'use client'

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface Props {
    Icon: LucideIcon;
    children: React.ReactNode;
    href: string;
}

export const SidebarItem: React.FC<Props> = ({ Icon, children, href }) => {
    return (
        <Link href={`/admin/${href}`}>
            <div
                className={cn(
                    "text-white flex items-center relative m-2 rounded border p-2 transition-colors duration-300 hover:bg-white/10 cursor-pointer max-w-[43px] group-hover/sidebar:max-w-full"
                )}
            >
                <Icon width={25} height={25} />
                <p
                    className={cn(
                        "absolute left-[40px] opacity-0 whitespace-nowrap",
                        "transition-all duration-300",
                        "group-hover/sidebar:opacity-100"
                    )}
                >
                    {children}
                </p>
            </div>
        </Link>
    );
};
