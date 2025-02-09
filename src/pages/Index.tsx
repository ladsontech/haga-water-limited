import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Droplet, Building2, Factory, Sprout } from "lucide-react";

const Index = () => {
  const services = [
    // ... (keep services array unchanged)
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Animated Water Background */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute inset-0 animate-water-wave bg-[url('/water-texture.png')] bg-repeat" />
      </div>

      <div className="relative z-10">
        <Hero />
        
        {/* Services Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-dark bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                Our Services
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                Dealers In General Plumbing And Water Engineering Services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {services.map((service) => (
                <div 
                  key={service.title} 
                  className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-blue-100 rounded-lg transform group-hover:rotate-12 transition-transform">
                        <service.Icon className="text-blue-600 h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mt-2">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {service.description}
                    </p>
                  </div>
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-100/50 to-transparent z-10" />
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Animated Water Ripple */}
                    <div className="absolute inset-0 animate-water-ripple opacity-20" />
                    {/* Logo Overlay */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/80 p-2 rounded-lg backdrop-blur-sm">
                        <img 
                          src="/lovable-uploads/logo.png"
                          alt="Logo"
                          className="w-12 h-12"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer className="border-t border-blue-50 bg-white/80 backdrop-blur-sm" />
      </div>
    </div>
  );
};

export default Index;

// Add to your globals.css:
`
@keyframes water-wave {
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
  100% { transform: translateY(0) rotate(0deg); }
}

@keyframes water-ripple {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-water-wave {
  animation: water-wave 8s ease-in-out infinite;
}

.animate-water-ripple {
  background: radial-gradient(circle at 50% 50%, rgba(100,200,255,0.3) 0%, transparent 20%);
  background-size: 400% 400%;
  animation: water-ripple 12s linear infinite;
}
`