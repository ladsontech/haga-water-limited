
import { Droplet } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative py-8 sm:py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <img 
            src="/lovable-uploads/ef7f6d0a-d5f1-4a8f-b8ac-b311ed038668.png"
            alt="Water knows us"
            className="w-full h-[400px] object-cover rounded-lg shadow-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent rounded-lg">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-4">
                We are the PLUMBERS
              </p>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto px-2 sm:px-4">
                Your trusted partner for all plumbing and water-related needs. Professional services for domestic, commercial, and industrial projects.
              </p>
              <p className="text-2xl font-italic font-medium mt-4">
                "Water knows us"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
