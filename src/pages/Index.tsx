import Hero from "@/components/Hero";
import { Droplet, Building2, Factory, Sprout } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "General Plumbing",
      description: "Complete plumbing solutions for all your needs, including leak detection, pipe repairs, fixture installations, drain cleaning, and emergency plumbing services. We ensure reliable and efficient solutions for your plumbing concerns.",
      Icon: Droplet,
      image: "/lovable-uploads/1fa88823-0c19-4d22-86f9-c74f9500b04f.png",
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
    <div className="min-h-screen bg-water-gradient">
      <Hero />
      
      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-dark">Our Services</h2>
            <p className="mt-4 text-lg sm:text-xl text-gray-600">
              Professional plumbing solutions for every need
            </p>
          </div>
          <div className="grid gap-8 md:gap-12 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <service.Icon className="text-primary h-5 w-5" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-primary-dark">{service.title}</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6 text-center sm:text-left">{service.description}</p>
                {service.image && (
                  <div className="w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto transform transition-transform hover:scale-105 duration-300"
                    />
                    {/* Blurred Logo Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="bg-white/30 backdrop-blur-sm p-4 rounded-full">
                        <img 
                          src="/lovable-uploads/ab9259ef-3a05-4ff1-bec2-79c2fa4ecbb7.png"
                          alt="Haga Water Limited Logo"
                          className="w-24 h-auto opacity-60"
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
    </div>
  );
};

export default Index;