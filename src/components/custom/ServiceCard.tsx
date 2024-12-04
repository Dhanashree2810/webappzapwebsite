import Image , { StaticImageData } from 'next/image';
import { Card, CardTitle, CardDescription } from '@/components/ui/card';

export interface Service {
    id: number;
    title: string;
    description: string;
    imageSrc: StaticImageData;
    alt: string;
}

interface ServiceCardProps {
    service: Service;
}

export const ServiceCard = ({ service }: ServiceCardProps) => (
    <Card  className="bg-[#00001dbf] py-8 lg:py-16 md:py-12 sm:py-10 px-4 lg:px-8 md:px-6 sm:px-5 mt-10 border border-dashed border-[#3e047b] hover:border-[#ff1b46] hover:shadow-xl transition-transform transform hover:-translate-y-2 rounded-lg relative overflow-hidden cursor-pointer backdrop-blur-sm">
        <div className="text-center z-10">
            <Image
                src={service.imageSrc}
                alt={service.alt}
                width={100}
                height={100}
                className="mx-auto mb-4 sm:mb-5 md:mb-6"
            />
            <CardTitle className="text-white text-base sm:text-lg lg:text-xl mb-2 sm:mb-4 md:mb-6 lg:mx-10 md:mx-6 sm:mx-5">
                {service.title}
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm md:text-base lg:text-xs  text-white line-clamp-3 px-2 sm:px-4 md:px-4 lg:px-2">
                <h1 className='leading-6'>  {service.description}</h1>
            </CardDescription>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#ff1b464d] to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
    </Card>
);
