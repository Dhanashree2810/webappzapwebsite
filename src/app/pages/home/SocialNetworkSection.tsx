import React from 'react';
import footerimg from '@/assets/img/footer.jpg';
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

                <li className="relative">
                  <a
                    href="https://www.facebook.com/Webappzap-Enterprise-107215775394142/"
                    target="_blank"
                    title="Follow Us On Facebook"
                    aria-label="Follow Us On Facebook"
                    className="text-white text-lg p-2 rounded-full hover:bg-[#3b5998] block relative z-10 hover:scale-105 transition"
                  >
                    <FaFacebookF />
                  </a>
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full shadow-blue-700" />
                </li>

                <li className="relative">
                  <a
                    href="https://twitter.com/WebAppZap"
                    target="_blank"
                    title="Follow Us On Twitter"
                    aria-label="Follow Us On Twitter"
                    className="text-white text-lg p-2 rounded-full block relative z-10 hover:scale-105 transition hover:bg-[#00aced]"
                  >
                    <FaTwitter />
                  </a>
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full shadow-blue-500" />
                </li>

                <li className="relative">
                  <a
                    href="https://www.instagram.com/webappzap/"
                    target="_blank"
                    title="Follow Us On Instagram"
                    aria-label="Follow Us On Instagram"
                    className="text-white text-lg p-2 rounded-full hover:bg-[#8a3ab9] block relative z-10 hover:scale-105 transition"
                  >
                    <FaInstagram />
                  </a>
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full shadow-purple-500" />
                </li>
                {/* LinkedIn */}
                <li className="relative">
                  <a
                    href="https://www.linkedin.com/in/webappzap-enterprise-88076122b/"
                    target="_blank"
                    title="Follow Us On LinkedIn"
                    aria-label="Follow Us On LinkedIn"
                    className="text-white text-lg p-2 hover:bg-[#007bb6] rounded-full block relative z-10 hover:scale-105 transition"
                  >
                    <FaLinkedin />
                  </a>
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full shadow-blue-700" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialNetworkSection;
