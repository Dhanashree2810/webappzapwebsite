'use client'
import { useState, useEffect } from 'react'
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import Link from 'next/link'
// import { Menu } from 'lucide-react'
import { SlMenu } from "react-icons/sl";
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import webappzaplogo from '@/assets/img/webappzap-logo.png';
import { usePathname } from 'next/navigation';

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
];

export default function HeaderSection() {
    const [isOpen, setIsOpen] = useState(false);
    const [navbarFixed, setNavbarFixed] = useState(false);
    const pathname = usePathname();

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setNavbarFixed(true);
        } else {
            setNavbarFixed(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isActive = (link: string) => {
        return pathname === link || pathname.startsWith(link + '/');
    };

    return (
        <header className={`fixed w-full top-0 left-0 z-50 ${navbarFixed ? ' bg-black' : 'bg-[#0d131f1a]'}`}>
            <div className="container mx-auto lg:px-28 sm:px-14 md:px-16 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" aria-label="Home" className="text-2xl font-bold text-gray-800 dark:text-white">
                            <Image
                                src={webappzaplogo}
                                alt="WebAppZap Logo"
                                height={160}
                                width={160}
                                priority
                            />
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`nav-link text-white uppercase text-xs pb-2 font-semibold ${isActive(item.href) ? 'border-b-2 border-red-500' : ''}`}
                                aria-current={isActive(item.href) ? 'page' : undefined}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <div className="md:hidden lg:px-0 px-3">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild className='headermenu'>
                                <Button variant="default" size="icon" className={`relative z-50 text-white  border-white   ${navbarFixed ? ' bg-black' : 'bg-[#0d131f1a]'}`}>
                                    <SlMenu size={60} className=" text-white" />
                                    <span className="sr-only">Toggle navigation menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[300px] sm:w-[300px] bg-[#00001d] sheetcon">
                                <VisuallyHidden.Root>
                                    <SheetTitle className=' text-white'>Menu</SheetTitle>
                                </VisuallyHidden.Root>
                                <nav className="flex flex-col space-y-4 mt-6">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={`text-white pb-2 uppercase text-xs font-semibold w-fit  dark:hover:text-gray-300 ${isActive(item.href) ? 'border-b-2 border-red-500' : ''}`}
                                            onClick={() => setIsOpen(false)}
                                            aria-current={isActive(item.href) ? 'page' : undefined}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}
