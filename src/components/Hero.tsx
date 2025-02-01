import { Droplet } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-primary text-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6">
              Water Knows Us
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto px-4">
              Your trusted partner for all plumbing and water-related needs. Professional services for domestic, commercial, and industrial projects.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 opacity-10 hidden md:block">
          <Droplet size={300} />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-50" />
    </div>
  );
};

export default Hero;