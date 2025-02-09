import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Droplet, Building2, Factory, Sprout, Trophy, Phone, Clock, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  // ... (keep all your existing data arrays unchanged)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="relative z-10">
        <Hero />
        
        {/* Features Section - Made more responsive */}
        <section className="py-8 md:py-12 bg-white/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 md:p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0">
                    <feature.icon className="w-8 h-8 md:w-12 md:h-12 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section - Improved mobile layout */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                Our Services
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                Dealers In General Plumbing And Water Engineering Services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service) => (
                <div 
                  key={service.title} 
                  className="group relative bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="p-4 sm:p-6 md:p-8">
                    <div className="flex items-start gap-3 md:gap-4 mb-4">
                      <div className="p-2 md:p-3 bg-blue-100 rounded-lg transform group-hover:rotate-12 transition-transform">
                        <service.Icon className="text-blue-600 h-6 w-6 md:h-8 md:w-8" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-1">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="relative h-48 md:h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-100/50 to-transparent z-10" />
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/80 p-2 rounded-lg backdrop-blur-sm">
                        <img 
                          src="/lovable-uploads/logo.png"
                          alt="Logo"
                          className="w-8 h-8 md:w-12 md:h-12"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Call Section - Removed Request Service button */}
        <section className="py-12 md:py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
              24/7 Emergency Plumbing Services
            </h2>
            <p className="text-base md:text-xl text-blue-100 mb-6 md:mb-8">
              Don't wait until it's too late. Contact us now!
            </p>
            <div className="flex justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +256 755 694 693
              </Button>
            </div>
          </div>
        </section>

        <Footer className="border-t border-blue-50 bg-white/80 backdrop-blur-sm" />
      </div>
    </div>
  );
};

export default Index;