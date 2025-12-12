"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { NavLink } from "./nav-link"

export function NavigationM() {
  const path = usePathname()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* SHOP DROPDOWN */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-4">
              <NavLink url="/shop">New Arrivals</NavLink>
              <NavLink url="/shop">All</NavLink>
              <NavLink url="/shop">Tops</NavLink>
              <NavLink url="/shop">Bottom</NavLink>
              <NavLink url="/shop">Dresses</NavLink>
              <NavLink url="/shop">Swim</NavLink>
              <NavLink url="/shop">Accessories</NavLink>
              <NavLink url="/shop">Sets</NavLink>
              <NavLink url="/shop">Bodysuits</NavLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* SALES */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/shop"
              className={cn(
                navigationMenuTriggerStyle(),
                path === "/" ? "text-white" : "",
                "relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-[80%]"
              )}
            >
              Sales
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* ARCHIVE */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/archive"
              className={cn(
                navigationMenuTriggerStyle(),
                path === "/" ? "text-white" : "",
                "relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-[80%]"
              )}
            >
              Archive
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* CONTACT */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/contact"
              className={cn(
                navigationMenuTriggerStyle(),
                path === "/" ? "text-white" : "",
                "relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-[80%]"
              )}
            >
              Contact
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* CUSTOMER CARE */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/cc"
              className={cn(
                navigationMenuTriggerStyle(),
                path === "/" ? "text-white" : "",
                "relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-[80%]"
              )}
            >
              Customer Care
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
