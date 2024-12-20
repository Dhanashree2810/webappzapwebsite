
import "@/app/globals.css";
import HeaderSection from "@/components/custom/header/HeaderSection";
import type { Metadata } from "next";
import localFont from "next/font/local";
import SocialNetworkSection from "./pages/home/SocialNetworkSection";
import BlankSection from "./pages/home/BlankSection";
import FooterSection from "@/components/custom/footer/FooterSection";
// import ClientLoaderWrapper from "@/components/custom/ClientLoaderWrapper";

const interFont = localFont({
  src: "./fonts/SourceSansPro-Regular.ttf.woff2",
  variable: "--font-inter",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: {
    template: '%s | WebAppZap',
    default: 'WebAppZap',
  },
  description: "Explore WebAppZap, your solution for amazing web experiences.",
  metadataBase: new URL('https://webappzap.com'),
  keywords: "Innovative Web Development Services,Responsive Website Design Solutions,Responsive Web Design Services,Next.js Web Development,Fast & Secure Web Hosting Solution,Advance Web Technolgies,Web Development Solution,How to build a Modern Web App,Web Application that scale your Bussiness,Professional Website Design, Best Web Developers Near me,User-centric Web Solution,Next Generation Website Developement,Innovative",
  openGraph: {
    title: "WebAppZap",
    description: "Explore WebAppZap, your solution for amazing web experiences.",
    images: ['https://www.google.com/imgres?q=webappzap&imgurl=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1555520825771847682%2FVrkIQ0zy_400x400.jpg&imgrefurl=https%3A%2F%2Ftwitter.com%2FWebAppZap&docid=NP05r2BZVLA4uM&tbnid=FPJ2UWErJCsmoM&vet=12ahUKEwi6lrmSmIuKAxVpTWwGHTwENKIQM3oECEYQAA..i&w=299&h=299&hcb=2&itg=1&ved=2ahUKEwi6lrmSmIuKAxVpTWwGHTwENKIQM3oECEYQAA'],
    url: 'https://webappzap.com'
  },
  twitter: {
    title: "WebAppZap",
    description: "Explore WebAppZap, your solution for amazing web experiences.",
    images: ['https://www.google.com/imgres?q=webappzap&imgurl=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1555520825771847682%2FVrkIQ0zy_400x400.jpg&imgrefurl=https%3A%2F%2Ftwitter.com%2FWebAppZap&docid=NP05r2BZVLA4uM&tbnid=FPJ2UWErJCsmoM&vet=12ahUKEwi6lrmSmIuKAxVpTWwGHTwENKIQM3oECEYQAA..i&w=299&h=299&hcb=2&itg=1&ved=2ahUKEwi6lrmSmIuKAxVpTWwGHTwENKIQM3oECEYQAA'],
    card: 'summary_large_image',
    creator: "WebAppZap"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={`${interFont.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style data-href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet">
        </style>
      </head>
      <body className="antialiased font-inter">
        {/* <ClientLoaderWrapper> */}
          <HeaderSection />
          {children}
          <SocialNetworkSection />
          <BlankSection />
          <FooterSection />
        {/* </ClientLoaderWrapper> */}
      </body>
    </html>
  );
}
