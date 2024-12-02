import React from 'react';
import qualitysolutions from '@/assets/img/quality-solutions.png';
import timelydelivery from '@/assets/img/timely-delivery.png';
import customersupport from '@/assets/img/customer-support.png';
import Image from 'next/image';

const solutionData = [
  {
    imgSrc: qualitysolutions,
    alt: 'Quality solutions',
    title: 'Quality solutions',
  },
  {
    imgSrc: timelydelivery,
    alt: 'Timely Delivery',
    title: 'Timely Delivery',
  },
  {
    imgSrc: customersupport,
    alt: 'Customer Support',
    title: 'Customer Support',
  },
];

const SolutionsSection = () => {
  return (
    <section className="bg-[#00001d]">
      <div className="container mx-auto">
        <div className=' py-10 px-5 lg:px-20'>
          <div className="grid gap-5 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1  text-center">
            <div className="mb-6 mx-auto max-w-3xl">
              <h2 className="block text-xl mb-5 lg:mb-0 text-white animate-fadeUp italic" data-aos="fade-up" data-aos-duration="1000">
                <span className='border-b-2 border-red-500 pb-2'>Our</span> solutions
              </h2>
              <h2 className="text-2xl lg:text-5xl text-white font-bold animate-fadeUp lg:my-5 sm:my-10 md:my-5 italic" data-aos="fade-up" data-aos-duration="1000">
                Here’s How We Can Make Your Business Easier
              </h2>
            </div>
            <p className="text-white mx-auto font-normal text-xs leading-6 lg:mb-10 sm:mb-5 md:mb-5 lg:w-[680px] md:w-[420px] sm:w-[320px]" data-aos="fade-up" data-aos-duration="1200">
              Our committed teams have a unique blend of functional & operational knowledge, technical expertise, and result-oriented management experience ranging from Application Development to end-to-end solutions.
            </p>
          </div>

          <div className="container mx-auto grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 justify-center gap-10">
            {solutionData.map((solution, index) => (
              <div
                key={index}
                className=" p-4 animate-zoomIn"
                data-aos="zoom-in"
                data-aos-duration={`${1400 + index * 400}`}
              >
                <div className="bg-transparent text-center p-6 shadow-lg h-full flex flex-col items-center">
                  <Image src={solution.imgSrc} alt={solution.alt} className=" mx-auto" width={280} height={280}/>
                  <h3 className="font-bold italic text-xl text-white mt-6">{solution.title}</h3>
                </div>
              </div>
            ))}
          </div>        
        </div>
      </div>
    </section>
  );
};



export default SolutionsSection;
