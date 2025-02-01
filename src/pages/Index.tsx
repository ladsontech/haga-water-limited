import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import { Droplet, Building2, Factory, Sprout } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "General Plumbing",
      description: "Complete plumbing solutions for all your needs",
      Icon: Droplet,
      image: "/lovable-uploads/1fa88823-0c19-4d22-86f9-c74f9500b04f.png",
    },
    {
      title: "Domestic Services",
      description: "Expert residential plumbing services",
      Icon: Building2,
    },
    {
      title: "Commercial & Industrial",
      description: "Large-scale plumbing solutions",
      Icon: Factory,
    },
    {
      title: "Water Irrigation",
      description: "Efficient irrigation systems",
      Icon: Sprout,
      image: "/lovable-uploads/d13dd86d-f07a-4a88-b2f7-ad15fbfb0adf.png",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-3 sm:mt-4 text-lg sm:text-xl text-gray-600">
              Professional plumbing solutions for every need
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col">
                <ServiceCard {...service} />
                {service.image && (
                  <div className="mt-4 rounded-lg overflow-hidden shadow-md">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Contact Us</h2>
            <p className="mt-3 sm:mt-4 text-lg sm:text-xl text-gray-600">
              Get in touch with our expert team
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Index;