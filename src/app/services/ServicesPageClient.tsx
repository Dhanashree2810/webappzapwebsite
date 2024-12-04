// ./src/app/services/ServicesPageClient.tsx
'use client';

import { ServicesSection } from '../pages/home/ServiceSection';
import { usePathname } from 'next/navigation';

export default function ServicesPageClient() {
  const pathname = usePathname();

  return (
    <div>
      <ServicesSection pathname={pathname} />
    </div>
  );
}
