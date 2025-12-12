import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { Header } from "@/components/shared/header";
import { Toaster } from "@/components/ui/sonner"
import { Footer } from "@/components/shared/footer";

const Helvetica = localFont({
  src: "../fonts/helvetica.otf",
  weight: "100 200 300 400 500 600 700 900",
});

export const metadata: Metadata = {
  title: "I AM YOUR FETISH",
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
        className={`${Helvetica.className}  antialiased overflow-x-hidden min-h-screen flex flex-col`}
      >
        {/* <Sidebar /> */}
          <Header />
          {children}
          <Toaster />
          <Footer />
      </body>
    </html>
  );
}
