import { Droplet } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary to-accent text-white py-8 sm:py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">
              Water Knows Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto px-2 sm:px-4">
              Your trusted partner for all plumbing and water-related needs. Professional services for domestic, commercial, and industrial projects.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 opacity-20 hidden md:block">
          <Droplet size={300} />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
      
      {/* Animated wave effect */}
      <div className="absolute bottom-0 left-0 right-0 h-16 opacity-30">
        <div className="absolute inset-0 animate-wave" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 1200 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z' fill='%23FFFFFF' fill-opacity='.25'/%3E%3C/svg%3E\")",
          backgroundSize: "100% 100%",
          width: "200%",
        }} />
      </div>
    </div>
  );
};

export default Hero;