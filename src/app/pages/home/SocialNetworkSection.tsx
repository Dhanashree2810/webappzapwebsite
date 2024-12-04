import React from 'react';
// import Image from 'next/image'; // For lazy-loaded images
import footerimg from '@/assets/img/footer.jpg'; // Static import for images
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialNetworkSection = () => {
  return (
    <section
      className="follow-us bg-[#00001d] bg-cover bg-fixed bg-blend-color-dodge"
      style={{ backgroundImage: `url(${footerimg.src})` }}
    >
      <div className="container mx-auto py-12">
        <div className="py-10 lg:px-28 md:px-10 sm:px-5">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 items-center">
            <div className="text-left ml-4">
              <h2 className="text-xl text-[#8d99ae] animate-fadeUp italic">
                <span className="border-b-2 border-red-500 pb-2">Foll</span>ow Us On
              </h2>
              <h2 className="text-white text-2xl md:text-5xl font-bold italic my-6 md:my-10">
                Social Network
              </h2>
            </div>

            <div>
              <ul className="flex flex-wrap justify-center md:justify-evenly gap-6 lg:gap-6 md:gap-10 sm:gap-10 bg-opacity-70 rounded-xl mx-auto">
                {[
                  {
                    icon: <FaFacebookF />,
                    url: 'https://www.facebook.com/Webappzap-Enterprise-107215775394142/',
                    title: 'Follow Us On Facebook',
                    bgColor: '#3b5998',
                    hoverColor: 'hover:bg-[#3b5998]',
                  },
                  {
                    icon: <FaTwitter />,
                    url: 'https://twitter.com/WebAppZap',
                    title: 'Follow Us On Twitter',
                    bgColor: '#00aced',
                    hoverColor: 'hover:bg-[#00aced]',
                  },
                  {
                    icon: <FaInstagram />,
                    url: 'https://www.instagram.com/webappzap/',
                    title: 'Follow Us On Instagram',
                    bgColor: '#8a3ab9',
                    hoverColor: 'hover:bg-[#8a3ab9]',
                  },
                  {
                    icon: <FaLinkedin />,
                    url: 'https://www.linkedin.com/in/webappzap-enterprise-88076122b/',
                    title: 'Follow Us On LinkedIn',
                    bgColor: '#007bb6',
                    hoverColor: 'hover:bg-[#007bb6]',
                  },
                ].map(({ icon, url, title, bgColor, hoverColor }, index) => (
                  <li key={index} className="relative">
                    <a
                      href={url}
                      target="_blank"
                      title={title}
                      aria-label={title}
                      className={`text-white text-lg p-2 rounded-full ${hoverColor} block relative z-10 hover:scale-105 transition`}
                    >
                      {icon}
                    </a>
                    <span
                      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full shadow-[${bgColor}]`}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialNetworkSection;