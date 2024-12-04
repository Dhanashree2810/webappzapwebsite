'use client'
import HeroSection from "./pages/home/HeroSection";
import AboutSection from "./pages/home/AboutSection";
import { ServicesSection } from "./pages/home/ServiceSection";
import WhyUsSection from "./pages/home/WhyUsSection";
import SolutionsSection from "./pages/home/SolutionsSection";
import { usePathname } from 'next/navigation';

export default function Home() {
  const pathname = usePathname();

  return (
    <>
      <div>
        <HeroSection />
        <AboutSection />
        <ServicesSection pathname={pathname} />         
        <WhyUsSection />
        {/* WhyUsSection 92 */}
        <SolutionsSection />
        {/* solutions 89 */}

      </div>
    </>
  );
}
