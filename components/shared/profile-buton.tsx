'use client'

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User as UserIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useUser } from "@/hooks/useUser";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { NavLink } from "./nav-link";

interface Props {}

export const ProfileButton: React.FC<Props> = () => {
  const path = usePathname();
  const isMobile = useIsMobile();
  const { user } = useUser();


  return user !== null ? (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="[&>svg]:hidden">
            <Link
              href={`/my`}
              className={cn(
                "flex border hover:border-black rounded-lg py-2 px-4 group items-center justify-center cursor-pointer whitespace-nowrap transition-all duration-300",
                path === "/" ? "text-white hover:border-white" : "",
                isMobile ? "p-2 bg-transparent" : ""
              )}
            >
              <UserIcon className={isMobile ? "" : "mr-1"} />
              {isMobile ? "" : user?.first_name || "-"}
            </Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
              <ul className="p-4">
                <NavLink url="/wishlist">Wish List</NavLink>
                <NavLink url="/repass">Change Password</NavLink>
                <NavLink url="/logout">Logout</NavLink>
              </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ) : (
    <Link
      href={"/auth"}
      className={cn(
        "flex border hover:border-black rounded-lg py-2 px-4 group items-center justify-center cursor-pointer whitespace-nowrap transition-all duration-300",
        path === "/" ? "text-white hover:border-white" : ""
      )}
    >
      Sign In
    </Link>
  );
};
