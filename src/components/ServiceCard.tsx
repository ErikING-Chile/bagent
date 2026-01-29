
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    image: string;
    delay?: string;
}

const ServiceCard = ({ title, description, image, delay = '0ms' }: ServiceCardProps) => {
    return (
        <div
            className="group relative h-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden transition-all duration-300 hover:border-brand-purple/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:-translate-y-2"
            style={{ animationDelay: delay }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative p-8 h-full flex flex-col">
                <div className="h-48 mb-6 -mx-8 -mt-8 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-purple transition-colors">
                    {title}
                </h3>

                <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                    {description}
                </p>

                <div className="flex items-center text-sm font-medium text-white/50 group-hover:text-white transition-colors">
                    Más información <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
