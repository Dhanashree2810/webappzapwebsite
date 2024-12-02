'use client'
import "./globals.css";
import HeaderSection from "@/components/custom/header/HeaderSection";
import FooterSection from "@/components/custom/footer/FooterSection";
import SocialNetworkSection from "./pages/home/SocialNetworkSection";
import BlankSection from "./pages/home/BlankSection";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import Loader from "@/components/custom/Loader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    switch (pathname) {
      case "/about":
        document.title = "About Us";
        break;
      case "/contact":
        document.title = "Contact Us";
        break;
      case "/services":
        document.title = "Services";
        break;
      default:
        document.title = "WebAppZap";
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [pathname]);

  return (
    <html lang="en">
       <head>
        {/* <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap"
        /> */}
        <style href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet"></style>
      </head>
      <body
       style={{ fontFamily: '"Source Sans Pro", sans-serif' }}
        className={` antialiased`}
      >
         {loading && <Loader />}
        <HeaderSection />
        {children}
        <SocialNetworkSection />
        <BlankSection />
        <FooterSection />
      </body>
    </html>
  );
}
