'use client';
import Typed from "typed.js";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import hero from '@/assets/img/hero.png';
import icon1 from '@/assets/img/icon1.png';
import icon2 from '@/assets/img/icon2.png';
import icon3 from '@/assets/img/icon3.png';
import icon4 from '@/assets/img/icon4.png';
import icon5 from '@/assets/img/icon5.png';
import icon6 from '@/assets/img/icon6.png';
import Image from 'next/image';
import herobg from '@/assets/img/herobg.jpg'
import { RiArrowRightUpFill } from "react-icons/ri";
import { useEffect, useRef } from 'react';
import Link from 'next/link';


export default function HeroSection() {
    const typed1Ref = useRef<Typed | null>(null);
    const typed2Ref = useRef<Typed | null>(null);

    useEffect(() => {
        const options1 = {
            strings: ["Digitalize ^4000 ", "Enhance ^3000"],
            typeSpeed: 150,
            backSpeed: 150,
            loop: true,
            backDelay: 1000,
        };

        typed1Ref.current = new Typed(".typing-element", options1);

        const options2 = {
            strings: ["Dreams ^4000", "Business ^3000"],
            typeSpeed: 150,
            backSpeed: 150,
            loop: true,
            startDelay: 2000,
            backDelay: 1000,
        };

        typed2Ref.current = new Typed(".typing-elements", options2);

        return () => {
            typed1Ref.current?.destroy();
            typed2Ref.current?.destroy();
        };
    }, []);

    return (
        <section className="relative  bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${herobg.src})` }}>
            <div className=' relative py-8 lg:py-14 px-4 lg:px-24'>
                <div className="absolute inset-0 bg-[#00001d]  bg-opacity-50 z-10"></div>

                <span className="icon absolute top-96 right-32 lg:top-[600px] lg:right-64">
                    <Image src={icon1} alt="icon1" width={20} height={20} className="animate-spin" style={{ animationDuration: '5s', animationTimingFunction: 'linear' }} />
                </span>
                <span className="icon absolute top-40 right-28 lg:top-60 lg:right-60">
                    <Image src={icon2} alt="icon2" width={20} height={20} className="animate-spin" style={{ animationDuration: '5s', animationTimingFunction: 'linear' }} />
                </span>
                <span className="icon absolute top-[600px] right-56">
                    <Image src={icon3} alt="icon3" width={20} height={20} className="animate-spin" style={{ animationDuration: '5s', animationTimingFunction: 'linear' }} />
                </span>
                <span className="icon absolute top-20 left-52">
                    <Image src={icon4} alt="icon4" width={20} height={20} className="animate-spin" style={{ animationDuration: '5s', animationTimingFunction: 'linear' }} />
                </span>
                <span className="icon absolute top-44 right-[500px]">
                    <Image src={icon5} alt="icon5" width={20} height={20} className="animate-spin" style={{ animationDuration: '5s', animationTimingFunction: 'linear' }} />
                </span>
                <span className="icon absolute bottom-12 left-[500px]">
                    <Image src={icon6} alt="icon6" width={20} height={20} className="animate-spin" style={{ animationDuration: '5s', animationTimingFunction: 'linear' }} />
                </span>

                <div className="relative z-20">
                    <div className="grid gap-2 lg:gap-20 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  items-center justify-between mt-8">
                        <div className="flex flex-col">
                            <Image
                                src={hero}
                                alt="Hero Image"
                                height={650}
                                width={650}
                                className="mx-auto"
                            />
                        </div>

                        <div className="flex flex-col lg:offset-lg-1 xl:offset-xl-1">
                            <div className="flex-container relative z-20 px-2 lg:px-10 text-white">
                                <div className="flex-content">
                                    <div className="text-content">
                                        <h1 className="text-4xl lg:text-[62px] italic font-extrabold text-main text-[#e7f1ff] capitalize tracking-tight leading-8">
                                            We <span className="typing-element text-[#FF1B46] text-shadow-lg"></span>
                                        </h1>
                                        <h1 className="text-4xl lg:text-[62px] italic font-extrabold  text-[#e7f1ff] text-main capitalize tracking-tight leading-8 mt-5 lg:mt-8">
                                            your <span className="typing-elements text-[#FF1B46] text-shadow-lg"></span>
                                        </h1>
                                    </div>

                                    <div data-aos="fade-up" data-aos-duration="3000" className="mt-0 lg:mt-10">
                                        <p className="text-xs my-5 font-normal leading-6 text-[#e7f1ff] lg:mr-32" >
                                            60-80% boost your sales with our strategy. We help business from local to organized business to gain more sales & brand awareness by promoting them on social media in a suitable budget for them.
                                        </p>

                                        <Link href="/services" className=' flex flex-row w-fit mt-0 lg:mt-10'>
                                            <span className="btn primary-btn inline-flex items-center text-sm lg:text-[16px] px-1 py-2 lg:px-4 lg:py-4 text-white  bg-[#ff1b46] rounded-lg hover:bg-blue-950 transition">
                                                Get Started <RiArrowRightUpFill className=' text-white w-6 h-6' />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:block left-5 absolute top-[40%]  transform -translate-y-[40%] bg-[#1e2c61a8] z-30 py-3 rounded-r-lg">
                    <a
                        href="https://www.facebook.com/Webappzap-Enterprise-107215775394142/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Follow Us On Facebook"
                        className="text-white text-[16px] p-3 block transition-all duration-1000 ease-out hover:text-[#ff1b46]"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://twitter.com/WebAppZap"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Follow Us On Twitter"
                        className="text-white text-[16px] p-3 block transition-all duration-1000 ease-out hover:text-[#ff1b46]"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://www.instagram.com/webappzap/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Follow Us On Instagram"
                        className="text-white text-[16px] p-3 block transition-all duration-1000 ease-out hover:text-[#ff1b46]"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/webappzap-enterprise-88076122b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Follow Us On LinkedIn"
                        className="text-white text-[16px] p-3 block transition-all duration-1000 ease-out hover:text-[#ff1b46]"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </section>
    );
}
