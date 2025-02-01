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
    },
  ];

  return (
    <div>
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-xl text-gray-600">
              Professional plumbing solutions for every need
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
            <p className="mt-4 text-xl text-gray-600">
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