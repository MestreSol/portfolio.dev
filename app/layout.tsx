import React from "react";
import { baseURL, home, person } from "@/app/resources";
import GlobalMenu from "@/components/area/GlobalMenu";
import "./globals.css";
import Footer from "@/components/area/Footer";

export async function generateMetadata() {
  return {
    metadataBase: new URL(`https://${baseURL}`),
    title: {
      default: home.title,
      template: "%s | Portfy",
    },
    description: home.description,
    openGraph: {
      title: `${person.firstName}'s Portfolio`,
      description: "Portfolio website showcasing my work.",
      url: baseURL,
      siteName: `${person.firstName}'s Portfolio`,
      locale: "en_US",
      type: "website",
      //image: ["/api/og?title=portfy"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
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
        <Footer></Footer>
      </body>
    </html>
  );
}
