import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  image?: string;
}

const ServiceCard = ({ title, description, Icon }: ServiceCardProps) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full group hover:-translate-y-1">
      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4 mx-auto sm:mx-0 group-hover:bg-primary/10 transition-colors">
        <Icon className="text-primary group-hover:scale-110 transition-transform" size={24} />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center sm:text-left text-primary-dark">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base text-center sm:text-left">{description}</p>
    </div>
  );
};

export default ServiceCard;