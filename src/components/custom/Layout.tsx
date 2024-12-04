// 'use client'
// import { usePathname } from 'next/navigation';
// import HeaderSection from "@/components/custom/header/HeaderSection";
// import FooterSection from "@/components/custom/footer/FooterSection";
// import SocialNetworkSection from "@/app/pages/home/SocialNetworkSection";
// import BlankSection from "@/app/pages/home/BlankSection";
// import Loader from "@/components/custom/Loader";
// import { useEffect, useState } from 'react';


// export default function Layout({ children }: { children: React.ReactNode }) {
//     const pathname = usePathname();
//     const [loading, setLoading] = useState(true);

//     const getPageMetadata = () => {
//         switch (pathname) {
//             case '/about':
//                 return { title: 'About Us - WebAppZap', description: 'Learn more about WebAppZap and our mission.' };
//             case '/contact':
//                 return { title: 'Contact Us - WebAppZap', description: 'Get in touch with the WebAppZap team.' };
//             case '/services':
//                 return { title: 'Our Services - WebAppZap', description: 'Discover the services offered by WebAppZap.' };
//             default:
//                 return { title: 'Welcome to WebAppZap', description: 'Explore WebAppZap, your solution for amazing web experiences.' };
//         }
//     };

//     const metadata = getPageMetadata();

//     useEffect(() => {
//         setTimeout(() => {
//             setLoading(false);
//         }, 2000);
//     }, [pathname]);

//     return (
//         <html lang="en">
//             <head>
//                 <title>{metadata.title}</title>
//                 <meta name="description" content={metadata.description} />
//                 <meta name="viewport" content="width=device-width, initial-scale=1" />
//                 <meta name="robots" content="index, follow" />
//                 <link rel="canonical" href={`https://www.yourwebsite.com${pathname}`} />
//                 <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet" />
//             </head>
//             <body
//                 style={{ fontFamily: '"Source Sans Pro", sans-serif' }}
//                 className={` antialiased`}
//             >
//                 {loading && <Loader />}
//                 <HeaderSection />
//                 {children}
//                 <SocialNetworkSection />
//                 <BlankSection />
//                 <FooterSection />
//             </body>
//         </html>
//     );
// }
