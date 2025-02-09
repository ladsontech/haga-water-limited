
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Droplet, Building2, Factory, Sprout } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "General Plumbing",
      description: "Complete plumbing solutions for all your needs, including leak detection, pipe repairs, fixture installations, drain cleaning, and emergency plumbing services. We ensure reliable and efficient solutions for your plumbing concerns.",
      Icon: Droplet,
      image: "/lovable-uploads/general.jpeg",
    },
    {
      title: "Domestic Services",
      description: "Expert residential plumbing services including bathroom and kitchen installations, water heater maintenance, pipe replacements, water pressure solutions, and preventive maintenance for your home's plumbing system.",
      Icon: Building2,
      image: "/lovable-uploads/da3b8d8f-dde2-4b5b-b750-086568fd0f06.png",
    },
    {
      title: "Commercial & Industrial",
      description: "Large-scale plumbing solutions including water treatment systems, supply of quality plumbing materials, industrial pipe installations, maintenance contracts, and specialized solutions for factories and commercial buildings.",
      Icon: Factory,
      image: "/lovable-uploads/0718387f-8600-4cfd-93ac-6d8b9ba96d09.png",
    },
    {
      title: "Water Irrigation",
      description: "Efficient irrigation systems including sprinkler system design and installation, drip irrigation, smart water management solutions, landscape irrigation, and water conservation systems for agricultural and landscaping needs.",
      Icon: Sprout,
      image: "/lovable-uploads/d13dd86d-f07a-4a88-b2f7-ad15fbfb0adf.png",
    },
  ];

  return (
    <div className="relative min-h-screen bg-water-gradient">
      <div className="relative z-10">
        <Hero />
        
        {/* Decorative Image Section */}
        <div className="relative max-w-5xl mx-auto my-12">
          <img 
            src="/lovable-uploads/ef7f6d0a-d5f1-4a8f-b8ac-b311ed038668.png"
            alt="Water knows us"
            className="w-full h-[300px] object-cover rounded-lg shadow-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg flex items-end justify-center pb-6">
            <p className="text-white text-2xl font-italic font-medium">
              "Water knows us"
            </p>
          </div>
        </div>
        
        {/* Services Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark">
                Our Services
              </h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                Dealers In General Plumbing And Water Engineering Services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {services.map((service) => (
                <div 
                  key={service.title} 
                  className="flex flex-col space-y-4 sm:space-y-6"
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <service.Icon className="text-primary h-6 w-6" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary-dark">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm sm:text-base lg:text-lg text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  {service.image && (
                    <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                          <img 
                            src="/lovable-uploads/logo.png"
                            alt="Haga Water Limited Logo"
                            className="w-12 sm:w-16 h-auto opacity-40"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
