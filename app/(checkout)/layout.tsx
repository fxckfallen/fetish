import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { CheckoutTotalSide } from "@/components/shared/checkout-total-side";
import logo from '@/public/logo.png'


import BreadcrumbNavigation from "@/components/shared/breadcrumb-navigation";
// const Helvetica = localFont({
//   src: "../fonts/helvetica.otf",
//   weight: "100 200 300 400 500 600 700 900",
// });
//${Helvetica.className}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased flex w-[90%] px-[5%] max-w-[100.8714285714em] mx-auto text-sm del flex-col md:flex-row`}
      >
        
          <main className="w-full md:w-[52%] md:pr-[6%] pt-[4em] flex flex-col items-center">
            <img src={logo.src} alt="logo" className='max-w-[3.5714285714em]'/>
            <BreadcrumbNavigation/>
            {children}
          </main>
          <CheckoutTotalSide/>
      </body>
    </html>
  );
}
