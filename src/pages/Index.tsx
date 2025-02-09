import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Droplet, Building2, Factory, Sprout, Trophy, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const services = [
    {
      title: "Domestic Plumbing",
      description: "Centers on residential water systems, including clean water supply, drainage, and rainwater harvesting (collecting and reusing rainwater for gardens or household needs). Focuses on water conservation through low-flow fixtures and leak repair.",
      Icon: Building2,
      image: "/lovable-uploads/6679d361-17df-4a56-ad5b-d4f7f985c63a.png"
    },
    {
      title: "Commercial Plumbing",
      description: "Supports water and sanitation infrastructure for businesses, providing durable sanitary products (faucets, toilets) and maintaining water supply/drainage systems. Ensures compliance with hygiene standards and water efficiency in high-traffic environments.",
      Icon: Factory,
      image: "/lovable-uploads/741d7779-e196-4d5c-8d6e-704e173e5100.png"
    },
    {
      title: "Industrial Plumbing",
      description: "Addresses large-scale water management, including treatment (filtering, recycling wastewater) and irrigation systems (drip/sprinkler networks for agriculture or landscaping). Emphasizes durable pipelines and eco-friendly practices to reduce water waste.",
      Icon: Sprout,
      image: "/lovable-uploads/ab9259ef-3a05-4ff1-bec2-79c2fa4ecbb7.png"
    },
    {
      title: "Water Engineering",
      description: "Advanced water engineering services including design, installation, and maintenance of water systems.",
      Icon: Droplet,
      image: "/lovable-uploads/8e7fb609-f622-499a-8708-daf14795c28c.png"
    }
  ];

  const features = [
    {
      icon: Trophy,
      title: "We have been in Existence since 2022",
      description: "Trusted by thousands of clients"
    },
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "We're here when you need us"
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Professional certified plumbers"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Hero />
      
      <section className="py-12 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 rounded-xl bg-white shadow-lg">
                <feature.icon className="w-12 h-12 text-blue-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-600">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="group relative bg-white rounded-2xl shadow-xl">
                <div className="p-6">
                  <service.Icon className="text-blue-600 h-8 w-8" />
                  <h3 className="text-2xl font-bold text-gray-900 mt-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                <img src={service.image} alt={service.title} className="w-full h-64 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-center">
        <h2 className="text-3xl font-bold text-white">24/7 Emergency Plumbing Services</h2>
        <p className="text-xl text-blue-100">Don't wait until it's too late. Contact us now!</p>
        <Button className="mt-4 bg-white text-blue-600">Call Now: +256 755 694 693</Button>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
