'use client';
import React, { useEffect, useRef } from 'react';
import Typed from "typed.js";
import aboutusmain from '@/assets/img/aboutusmain.png';
import aboutusbg from '@/assets/img/aboutus.png'
import aboutoimg from '@/assets/img/about.png';
import Image from 'next/image';
import Head from 'next/head';

const AboutUs = () => {
  const typed1Ref = useRef<Typed | null>(null);

  useEffect(() => {
    const options1 = {
      strings: [
        "Digital Marketing Agency ^4000",
        "Technology Planners ^3000",
        "Pile of Tech Stack ^2500",
        "Time Saving Agency ^2000",
        "Social Media Geek ^1000",
      ],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
      onComplete: () => {
        typed1Ref.current?.reset();
      }
    };

    typed1Ref.current = new Typed(".typing-element", options1);

    return () => {
      typed1Ref.current?.destroy();
    };
  }, []);

  return (
    <>
      <Head>
        <title>About Us - WebAppZap</title>
        <meta name="description" content="WebAppZap is a software development company specializing in web and mobile app development, digital marketing, and more." />
        <meta property="og:title" content="About Us - WebAppZap" />
        <meta property="og:description" content="WebAppZap offers web and mobile app development, IT consultancy, and digital marketing services to connect businesses with their customers." />
        <meta property="og:image" content={aboutoimg.src} />
        <meta name="twitter:title" content="About Us - WebAppZap" />
        <meta name="twitter:description" content="WebAppZap offers web and mobile app development, IT consultancy, and digital marketing services to connect businesses with their customers." />
      </Head>

      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(#0101c23d, #03032cd4), url(${aboutusbg.src})`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="lg:px-20 md:px-5 sm:px-5">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 py-5 lg:py-10 px-4 md:px-8">
              <div className="flex flex-col relative lg:mb-6 mb-0">
                <Image
                  src={aboutusmain}
                  alt="About Us"
                  className="mx-auto"
                  height={500}
                  width={500}
                />
                <div className="absolute bottom-8 right-8 bg-primaryRed px-3 py-2 text-white transform rotate-90 lg:rotate-0 lg:-right-20">
                  <h1 className='text-xs text-center'>16+ YEARS OF EXPERIENCE</h1>
                </div>
              </div>

              <div className="flex flex-col text-center lg:text-left">
                <div className="lg:p-8 md:p-2 sm:p-2 lg:mt-16 mt-5">
                  <div className="text-content">
                    <h2 className="text-white text-xl lg:text-4xl font-semibold italic tracking-tight leading-tight">
                      We Are a
                    </h2>
                    <h2 className='text-red-500 lg:ml-10 ml-8 text-xl mt-2 lg:mt-0 lg:text-4xl font-semibold italic text-shadow-lg leading-tight'>
                      <span className="typing-element"></span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:text-left text-center mb-12">
              <h3 className="text-white italic text-xl">
                <span className="border-b-2 border-red-500 pb-2">About Us</span>
              </h3>

              <p className="text-white text-xs lg:text-sm mt-4 font-normal leading-5 lg:leading-7 mx-auto max-w-xl lg:max-w-2xl lg:mx-0">
                WebAppZap is modelized with a vision to provide Software Development, web application development, Digital Marketing, IOT, and Mobile App Development solutions. With experienced IT consultants, we help you and your business connect with customers, integrate with vendors, and empower employees to work to their fullest potential.
              </p>
            </div>

            <div className="grid gap-5 grid-cols-2 lg:grid-cols-4 text-center">
              {[
                { count: '150+', label: 'Happy Customers' },
                { count: '200+', label: 'Monthly Visitors' },
                { count: '110+', label: 'Countries Worldwide' },
                { count: '120+', label: 'Top Partners' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="data-card"
                  data-aos="fade-up"
                  data-aos-duration={`${1500 + idx * 200}`}
                >
                  <h3 className="text-primaryRed text-3xl lg:text-5xl font-bold italic mb-5">
                    {item.count}
                  </h3>
                  <span className="text-white text-sm font-normal">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
