
import { Droplet } from "lucide-react";

const Hero = () => {
  return (
    <div 
      className="relative py-8 sm:py-12 md:py-20 overflow-hidden"
      style={{
        background: `linear-gradient(rgba(14, 165, 233, 0.85), rgba(51, 195, 240, 0.85)), url('/lovable-uploads/c679483b-e4d8-4326-b013-b79a7ceec1b3.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          <div className="text-center">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-bold mb-4">
              We are the PLUMBERS
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto px-2 sm:px-4 text-white">
              Your trusted partner for all plumbing and water-related needs. Professional services for domestic, commercial, and industrial projects.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 opacity-20 hidden md:block">
          <Droplet size={300} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
