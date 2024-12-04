'use client';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import aboutoimg from '@/assets/img/about.png';
import aboutbg from '@/assets/img/aboutus.png';
import Image from 'next/image';
import { RiArrowRightUpFill } from 'react-icons/ri';
import Link from 'next/link';

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <section
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(#0101c23d, #03032b), url(${aboutbg.src})`,
      }}
    >
      <div className="container mx-auto  max-w-7xl" data-aos="fade-up">
        <div className="py-10 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col text-center lg:text-left">
              <h1 className="text-white text-xl italic  pb-2" data-aos="fade-up">
                <span className='border-b-2 border-red-500'>Ab</span>out Us
              </h1>
              <h2
                className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold my-4 italic"
                data-aos="fade-up"
              >
                Who We Are
              </h2>
              <p
                className="text-white mt-6 mb-12 text-xs lg:text-[13px] leading-6 lg:leading-7 font-medium"
                data-aos="fade-up"
              >
                WebAppZap is modelized with a vision to provide a Software Development, web application development, Digital Marketing, IOT and Mobile App Development company with experienced IT consultants who can offer valuable business solutions. We help you and your business connect with customers, integrate with vendors and empower employees to work to their fullest potential.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-8" data-aos="fade-up">
                {[
                  { count: '150+', label: 'Happy Customers' },
                  { count: '200+', label: 'Monthly Visitors' },
                  { count: '110+', label: 'Countries Worldwide' },
                  { count: '120+', label: 'Top Partners' },
                ].map((item, idx) => (
                  <div key={idx} className="text-center" data-aos="fade-up" data-aos-duration={`${1500 + idx * 200}`}>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl italic font-bold text-[#ff1b46] mb-2">{item.count}</h3>
                    <span className="text-white text-xs font-normal">{item.label}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="flex flex-row justify-center lg:justify-start w-full lg:w-fit"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <span className="btn primary-btn inline-flex items-center text-sm lg:text-[16px] px-3 py-3 lg:px-4 lg:py-4 text-white bg-[#ff1b46] rounded-lg hover:bg-blue-950 transition">
                  Know More <RiArrowRightUpFill className="text-white w-5 h-5 ml-2" />
                </span>
              </Link>
            </div>

            <div className="relative flex justify-center items-center" data-aos="fade-up">
              <Image
                src={aboutoimg}
                alt="About"
                sizes="(max-width: 640px) 150px, (max-width: 768px) 250px, 400px"
                className="animate-[upDown_6s_ease-out_infinite_alternate] mt-10 lg:mt-24 z-10"
                style={{
                  height: "auto",
                  width: "100%",
                }}
                height={0}
                width={0}
              // height={400}
              // width={400}
              />
              <div className="absolute hidden lg:block -top-2 left-20 w-48 sm:w-60 lg:w-72 h-48 sm:h-60 lg:h-72 rounded-full bg-gradient-to-br from-[#ff1b46] to-[#ff1b4600] animate-[upDown_5s_ease-out_infinite_alternate]"></div>
              <div className="absolute top-0 right-0 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 rounded-full bg-gradient-to-bl from-[#42378f] to-[#ff1b46] animate-[spin_20s_ease-out_infinite_alternate]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
