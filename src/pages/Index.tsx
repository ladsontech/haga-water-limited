import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Droplet, Building2, Factory, Sprout, Trophy, Clock, Shield, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Index = () => {
  const services = [
    {
      title: "General Plumbing",
      description: "Comprehensive plumbing solutions for homes, businesses, and industries. Includes pipe repairs, leak detection, water system maintenance, and installations to ensure efficient water flow and drainage.",
      Icon: Wrench,
      images: ["/images/general.jpg" ]
    },
    {
      title: "Domestic Plumbing",
      description: "Focuses on residential water systems, including clean water supply, drainage, rainwater harvesting, and biodigester installation for eco-friendly waste management. Emphasizes water conservation through low-flow fixtures, leak detection, and efficient water heaters.",
      Icon: Building2,
      images: ["/images/domestic_toilet.jpg", "/images/biodigester1.jpg", "/images/biodigester2.jpg"]
    },
    {
      title: "Commercial Plumbing",
      description: "Manages water and sanitation infrastructure for businesses, supplying high-traffic sanitary products and maintaining complex water supply/drainage systems. Ensures compliance with hygiene and water efficiency standards.",
      Icon: Factory,
      images: ["/images/watertank.jpg"]
    },
    {
      title: "Industrial Plumbing",
      description: "Specializes in large-scale water solutions, including water treatment and durable pipeline systems for factories, farms, or municipalities. Prioritizes eco-friendly practices and regulatory compliance.",
      Icon: Sprout,
      images: ["/images/biodigester.png"]
    },
    {
      title: "Water Irrigation Systems",
      description: "Dedicated to designing, installing, and maintaining custom irrigation solutions for residential gardens and commercial landscapes.",
      Icon: Droplet,
      images: ["/images/irrigation.png"]
    }
  ];

  const features = [
    { icon: Trophy, title: "We have been in Existence since 2022", description: "Trusted by thousands of clients" },
    { icon: Clock, title: "24/7 Emergency Service", description: "We're here when you need us" },
    { icon: Shield, title: "Licensed & Insured", description: "Professional certified plumbers" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Hero />

      {/* Features Section */}
      <section className="py-8 sm:py-12 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 sm:p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <feature.icon className="w-12 h-12 text-blue-600 flex-shrink-0" />
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service) => (
              <div key={service.title} className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="p-4 sm:p-6">
                  <service.Icon className="text-blue-600 h-8 w-8 mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
                </div>
                <div className="relative h-48 sm:h-64">
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="h-full"
                  >
                    {service.images.map((img, index) => (
                      <SwiperSlide key={index}>
                        <img 
                          src={img} 
                          alt={`${service.title} ${index + 1}`} 
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Swiper>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Call Section */}
      <section className="py-8 sm:py-16 bg-blue-600 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">24/7 Emergency Plumbing Services</h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6">Don't wait until it's too late. Contact us now!</p>
          <Button 
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-300 text-base sm:text-lg px-6 py-3"
          >
            Call Now: +256 755 694 693
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
