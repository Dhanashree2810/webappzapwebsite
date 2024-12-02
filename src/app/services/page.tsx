'use client'
import { ServicesSection } from '../pages/home/ServiceSection'
import { usePathname } from 'next/navigation';

export default function ServicesPage() {
  const pathname = usePathname();

  return (
    <div>
      <ServicesSection pathname={pathname}/>
    </div>
  )
}
