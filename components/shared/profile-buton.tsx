'use client'

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User as UserIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useUser } from "@/hooks/useUser";
import { getUser } from "@/api/users";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { NavLink } from "./nav-link";


interface Props {}

export const ProfileButton: React.FC<Props> = () => {
  const path = usePathname();
  const isMobile = useIsMobile();
  const { user, setUser } = useUser();

  const [id, setId] = useState<number | null>(null);

  // читаем localStorage только на клиенте
  useEffect(() => {
    const storedId = localStorage.getItem("id");
    if (storedId) {
      setId(parseInt(storedId, 10));
    }
  }, []);

  useEffect(() => {
    if (id && id !== 0) {
      getUser(id).then((res) => {
        setUser(res);
      });
    }
  }, [id, setUser]);

  const isAuth = id !== null && id !== 0;

  return isAuth ? (
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
            <NavigationMenuLink>
              <ul className="p-4">
                  <NavLink url="/wishlist">Wish List</NavLink>
                  <NavLink url="/repass">Change Password</NavLink>
                  <NavLink url="/logout">Logout</NavLink>
                </ul>
            </NavigationMenuLink>
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
