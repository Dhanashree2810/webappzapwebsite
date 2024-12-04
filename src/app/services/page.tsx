// ./src/app/services/page.tsx
import ServicesPageClient from './ServicesPageClient';

export const metadata = {
  title: "Our Services - WebAppZap",
  description: "Discover the services offered by WebAppZap.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
