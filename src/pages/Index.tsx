import Hero from "@/components/Hero";
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
      image: "/lovable-uploads/da3b8d8f-dde2-4b5b-b750-086568fd0f06.png",
    },
    {
      title: "Commercial & Industrial",
      description: "Large-scale plumbing solutions",
      Icon: Factory,
      image: "/lovable-uploads/0718387f-8600-4cfd-93ac-6d8b9ba96d09.png",
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
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-lg sm:text-xl text-gray-600">
              Professional plumbing solutions for every need
            </p>
          </div>
          <div className="grid gap-12 md:gap-16 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <service.Icon className="text-primary h-5 w-5" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6 text-center sm:text-left">{service.description}</p>
                {service.image && (
                  <div className="w-full rounded-lg overflow-hidden shadow-lg">
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