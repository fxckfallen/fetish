'use client'
import Image from "next/image";
import { SearchBar } from "./searchbar";
import { NavigationM } from "./nav-menu";
import { CartButton } from "./cart-button";
import { ProfileButton } from "./profile-buton";
import { useState } from "react";
import { Cart } from "./cart";
import { usePathname } from "next/navigation";
import { useIsMobile } from "@/hooks/useIsMobile";

import React from "react";
import { SearchButton } from "./search-button";
import { MobileSearchBar } from "./mobile-search-bar";
import { MenuButton } from "./menu-button";
import { MobileMenu } from "./mobile-menu";


interface Props {
}

export const Header: React.FC<Props> = ({
}) => {
    const isMobile = useIsMobile();
    const pathname = usePathname();
    const [cartOpen, setCartOpen] = useState(false);
    
    const [searchMobileOpen, setSearchMobileOpen] = useState(false);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const hideAll = () => {
        setSearchMobileOpen(false);
        setCartOpen(false);
        setIsMenuOpen(false);
    }
    if (pathname === "/") return <></>
    
    return isMobile ? (
        <>
        <div className="mb-[calc(70px+2rem)]"></div>
            {/* Mobile version */}
         <header className={` fixed  bg-white z-[49] w-full lg:hidden py-4 px-[5%] border-b flex items-center justify-between ${pathname === '/' ? 'bg-transparent border-none' : ''}`}>
            
                <Image src="/logo.png" alt="logo" width={75.65} height={70} className={pathname === '/' ? ' invert' : ''}/>
                <div className="flex">
                    <SearchButton onClick={() => { hideAll(); setSearchMobileOpen(!searchMobileOpen); }}/>
                    <CartButton onClick={() => { hideAll(); setCartOpen(!cartOpen) }}/>
                    <ProfileButton />
                    <MenuButton onClick={() => { hideAll(); setIsMenuOpen(!isMenuOpen) }}/>
                </div>  
            </header>   
            <Cart onClick={() => {hideAll(); setCartOpen(!cartOpen)}} opened={cartOpen}/>
            <MobileSearchBar opened={searchMobileOpen}/>
            <MobileMenu opened={isMenuOpen}/>
        </>
    ) : (
        <>
            {/* Desktop version */}
            <header className={`h-[10%] hidden lg:flex w-full py-4 px-[5%] border-b  items-center justify-between ${pathname === '/' ? 'bg-transparent border-none' : ''}`}>
            
                <Image src="/logo.png" alt="logo" width={75.65} height={70} className={pathname === '/' ? ' invert' : ''}/>
            
                <div className="mx-10 flex w-full justify-center">
                    <NavigationM/>
                    <SearchBar/>
                </div>
                <CartButton  onClick={() => setCartOpen(!cartOpen)}/>
                <ProfileButton />
            </header>
            <Cart onClick={() => setCartOpen(!cartOpen)} opened={cartOpen}/>
        </>
    )
        
};