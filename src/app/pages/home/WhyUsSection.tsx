import React from 'react';
import Image from 'next/image';
import professionals from '@/assets/img/professionals.png';
import expertteam from '@/assets/img/expert-team.png';
import totalexperience from '@/assets/img/total-experience.png';
import servicequality from '@/assets/img/service-quality.png';

const reasons = [
  { src: professionals, alt: "Professional Work", title: "Professional Work" },
  { src: expertteam, alt: "Expert Team", title: "Expert Team" },
  { src: totalexperience, alt: "16+ Years Experience", title: "16+ Years Experience" },
  { src: servicequality, alt: "Best Service Quality 24*7", title: "Best Service Quality 24*7" },
];

const WhyUsSection = () => {
  return (
    <section className="relative py-12 bg-[#00001d]" aria-labelledby="why-us-heading">
      <div className="container mx-auto text-center mb-5 lg:mb-12">
        <header className="lg:px-20 px-5 text-white font-normal mt-2">
          <h1
            id="why-us-heading"
            data-aos="fade-up"
            data-aos-duration="1000"
            className="italic mb-5 lg:mb-10 text-xl lg:text-2xl"
          >
            <span className="border-b-2 border-red-500 pb-2">Why</span> People Choose Us
          </h1>
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-white font-extrabold text-2xl lg:text-5xl mb-5 lg:mb-10 italic"
          >
            Because We Give Our Best
          </h2>
        </header>

        <main>
          <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-6 my-5 mx-8 lg:mx-0">
            {reasons.map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-duration={`${1000 + index * 200}`}
                className="bg-darkBlue/15 border border-dashed border-purple rounded-sm backdrop-blur-md px-8 py-14 transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="flex flex-col justify-center items-center text-center z-10">
                  <div className="w-24 h-24 mb-6">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={75}
                      height={75}
                      className="mx-auto"
                      priority={index === 0} 
                    />
                  </div>
                  <div className="content">
                    <h3 className="text-sm font-semibold italic text-white mb-2">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default WhyUsSection;