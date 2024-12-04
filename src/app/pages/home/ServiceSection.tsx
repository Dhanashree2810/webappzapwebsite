'use client'
import 'aos/dist/aos.css';
import AOS from "aos";
import { StaticImageData } from 'next/image';
import { useEffect } from 'react';
import { ServiceCard } from '@/components/custom/ServiceCard';
import servicebg from '@/assets/img/services.jpg';
import webdevelopment from '@/assets/img/services/web-development.png';
import mobileapp from '@/assets/img/services/mobile-app.png';
import digitalmarketing from '@/assets/img/services/digital-marketing.png';
import iot from '@/assets/img/services/iot.png';
import Link from 'next/link';

export interface Service {
    id: number;
    title: string;
    description: string;
    imageSrc: StaticImageData;
    alt: string;
}

const services: Service[] = [
    {
        id: 1,
        title: 'Web Development',
        description: 'WebAppZap is here to provide a platform that combines smart web design with cutting-edge business principles to make your website incredibly attractive, user-friendly, and customer-friendly. By motivating, communicating, servicing, and interacting with the appropriate audience, our team ensures a premium experience.',
        imageSrc: webdevelopment,
        alt: 'Web Development',
    },
    {
        id: 2,
        title: 'Mobile App Development',
        description: 'We develop and deploy customised mobile apps. This covers expert business analysis, design and development of your mobile app from concept to launch, integration of the new product into your infrastructure, and on-demand optimization and scaling-up. We create mobile apps for a variety of platforms utilising cutting-edge technology and tried-and-true methods.',
        imageSrc: mobileapp,
        alt: 'Mobile App Development',
    },
    {
        id: 3,
        title: 'Digital Marketing',
        description: 'WebAppZap&apos;s Internet Marketing is a dynamic, versatile, and complete digital marketing agency that does not rely on illusions to attract new customers. Instead, WebAppZap relies on its own search engine optimization (SEO) and marketing expertise to attract new visitors to our site.',
        imageSrc: digitalmarketing,
        alt: 'Digital Marketing',
    },
    {
        id: 4,
        title: 'IOT Development',
        description: 'The Internet of Things has grown common these days in many sectors of life, from households to industries to businesses. IoT is making the world smarter and better than ever before by connecting everything and everyone. But this is only the beginning. To realize the full potential of the Internet of Things, companies must first recognize the prospects for value creation and then solve the underlying issues in a systematic manner.',
        imageSrc: iot,
        alt: 'IOT Development',
    },
];

interface ServicesSectionProps {
    pathname: string;
}

export const ServicesSection = ({ pathname }: ServicesSectionProps) => {
    useEffect(() => {
        AOS.init({
            duration: 3000,
        });
    }, []);

    return (
        <section
            className="relative bg-[#00001d] bg-fixed bg-cover bg-center bg-blend-color-dodge overflow-hidden py-12 md:py-16 lg:py-20"
            style={{ backgroundImage: `url(${servicebg.src})`}}
        >
            <div className="container mx-auto px-4 text-center" data-aos="fade-up" data-aos-duration="3000">
                <div className="lg:py-10 sm:py-8 md:px-6 lg:px-12">
                    <div className="titleContainer mb-6 md:mb-8 lg:mb-12 pt-8 lg:pt-0">
                        <h1 className="text-[#d3d6ff] text-xl md:text-xl lg:text-2xl italic font-normal">
                            <span className="border-b-2 border-red-500 pb-2">We</span> Are Expert In
                        </h1>
                        <h2 className="text-white font-semibold text-xl lg:text-5xl my-6 md:my-8 lg:my-10 italic">Our Services</h2>
                    </div>

                    <p className="text-white mx-auto text-xs lg:text-sm mb-8 md:mb-10 lg:mb-12 font-normal pt-8 lg:pt-0" data-aos="fade-up" data-aos-duration="1200">
                        Our expertise is in Web Application Development, UI/Front End Dev, Mobile App Dev, Mobile App Testing, Testing Services
                    </p>

                    <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 ">
                        {services.map(service => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>

                    <div className="mt-8 md:mt-10 lg:mt-12">
                        {pathname === '/' && (
                            <Link href="https://www.webappzap.com">
                                <span className="btn btn-secondary text-indigo-950 bg-white py-3 px-6 md:py-4 md:px-8 rounded-md text-sm md:text-base font-semibold">
                                    Explore All Services
                                </span>
                            </Link>
                        )}
                        {pathname === '/services' && (
                            <Link href="/contact">
                                <span className="btn btn-secondary text-indigo-950 bg-white py-3 px-6 md:py-4 md:px-8 rounded-md text-sm md:text-base font-semibold">
                                    Get to Know More About Services
                                </span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};