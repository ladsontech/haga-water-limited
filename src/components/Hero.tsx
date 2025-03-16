
import { Droplet } from "lucide-react";

const Hero = () => {
  return (
    <div 
      className="relative h-[50vh] bg-cover bg-center bg-no-repeat" 
      style={{
        backgroundImage: `url('/images/waterbackground.png')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center h-full text-white">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-shadow">
              Best Plumbers in Uganda
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto px-2 sm:px-4 text-center font-semibold text-shadow">
              Your trusted plumbing partner in Kampala and throughout Uganda. Professional plumbing services for domestic, commercial, and industrial projects.
            </p>
            <p className="text-2xl font-italic font-medium mt-4 text-shadow-lg">
              "Water knows us"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
