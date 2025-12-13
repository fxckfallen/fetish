import type { Metadata } from "next";
import "../globals.css";


export const metadata: Metadata = {
  title: "Return",
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
        {children}
      </body>
    </html>
  );
}
