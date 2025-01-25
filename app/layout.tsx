import React from "react";
import "./globals.css";
import GlobalMenu from "@/components/area/globalMenu";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GlobalMenu></GlobalMenu>
        {children}
      </body>
    </html>
  );
}
