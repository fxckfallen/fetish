import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { Sidebar } from "@/components/shared/sidebar";



export const metadata: Metadata = {
  title: "admin panel",
  description: "BE CONFIDENT, BE SEXY, BE BRAVE.",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased overflow-x-hidden min-h-screen flex flex-col`}
      >
        <Sidebar /> 
        {children}
      </body>
    </html>
  );
}
