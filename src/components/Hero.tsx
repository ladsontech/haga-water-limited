
import { Droplet } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary to-accent text-white py-8 sm:py-12 md:py-20 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/lovable-uploads/waterfountain.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          <div className="text-center">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-bold mb-4">
              We are the PLUMBERS
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto px-2 sm:px-4">
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
