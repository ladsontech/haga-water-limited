
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Droplet, Building2, Factory, Sprout, Trophy, Clock, Shield, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Helmet } from "react-helmet";
import { useState } from "react";
import ImageModal from "@/components/ImageModal";

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const services = [
    {
      title: "General Plumbing",
      description: "Comprehensive plumbing solutions for homes, businesses, and industries throughout Uganda. Includes pipe repairs, leak detection, water system maintenance, and installations to ensure efficient water flow and drainage. Our trained plumbers in Kampala deliver professional service.",
      Icon: Wrench,
      images: ["/images/general.jpeg" ]
    },
    {
      title: "Domestic Plumbing",
      description: "Uganda's top residential plumbing services focusing on home water systems, including clean water supply, drainage, rainwater harvesting, and biodigester installation for eco-friendly waste management. Our expert plumbers emphasize water conservation through low-flow fixtures, leak detection, and efficient water heaters.",
      Icon: Building2,
      images: ["/images/Haga water installtion team.png", "/images/traditiontoilet.png", "/images/washroomsink.png"]
    },
    {
      title: "Commercial Plumbing",
      description: "Leading commercial plumbers in Kampala managing water and sanitation infrastructure for businesses, supplying high-traffic sanitary products and maintaining complex water supply/drainage systems. Our professional plumbing team ensures compliance with hygiene and water efficiency standards.",
      Icon: Factory,
      images: ["/images/watertank.jpg"]
    },
    {
      title: "Industrial Plumbing",
      description: "Uganda's expert industrial plumbers specializing in large-scale water solutions, including water treatment and durable pipeline systems for factories, farms, or municipalities. Our professional plumbing contractors prioritize eco-friendly practices and regulatory compliance.",
      Icon: Sprout,
      images: ["/images/biodigesterman.png"]
    },
    {
      title: "Water Irrigation Systems",
      description: "Kampala's premier irrigation specialists dedicated to designing, installing, and maintaining custom irrigation solutions for residential gardens and commercial landscapes throughout Uganda.",
      Icon: Droplet,
      images: ["/images/irrigation.png"]
    }
  ];

  const features = [
    { icon: Trophy, title: "Uganda's Trusted Plumbers Since 2021", description: "Serving thousands of clients in Kampala and beyond" },
    { icon: Clock, title: "24/7 Emergency Plumbing Service", description: "Professional plumbers available when you need us most" },
    { icon: Shield, title: "Licensed & Insured Plumbers", description: "Fully certified professional plumbing contractors" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Helmet>
        <title>Best Plumbers in Uganda | Haga Water Limited - Professional Plumbing Services in Kampala</title>
        <meta name="description" content="Top-rated plumbers in Uganda providing professional plumbing services, water treatment solutions, and irrigation systems in Kampala and throughout Uganda. Available 24/7 for all your plumbing needs." />
        <meta name="keywords" content="best plumbers in Uganda, plumbers in Kampala, Uganda plumbing services, water treatment Uganda, emergency plumbing Kampala, commercial plumbers, industrial plumbing contractors" />
        <meta property="og:title" content="Best Plumbers in Uganda | Haga Water Limited - Professional Plumbing Services" />
        <meta property="og:description" content="Expert plumbing services and water solutions in Kampala and throughout Uganda. Commercial, industrial, and residential plumbing services available 24/7." />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Hero />

      {/* Features Section */}
      <section className="py-6 sm:py-12 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-6">Uganda's Premier Plumbing Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-center p-4 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-3 sm:mb-0 sm:mr-4 flex-shrink-0" />
                <div className="text-center sm:text-left">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-6 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-center text-blue-600 mb-6 sm:mb-8">Professional Plumbing Services in Uganda</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {services.map((service) => (
              <div key={service.title} className="group relative bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
                <div className="p-4 sm:p-6">
                  <div className="flex items-center mb-4">
                    <service.Icon className="text-blue-600 h-6 w-6 sm:h-8 sm:w-8" />
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-900 ml-3">{service.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">{service.description}</p>
                </div>
                <div className="flex-grow">
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="w-full"
                    style={{ height: 'auto' }}
                  >
                    {service.images.map((img, index) => (
                      <SwiperSlide key={index} className="!h-auto">
                        <div className="w-full">
                          <img 
                            src={img} 
                            alt={`${service.title} ${index + 1}`} 
                            className="w-full h-auto max-h-[600px] object-contain cursor-pointer hover:opacity-90 transition-opacity"
                            loading="lazy"
                            onClick={() => setSelectedImage({ src: img, alt: `${service.title} ${index + 1}` })}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
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
          <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">24/7 Emergency Plumbing Services in Kampala</h2>
          <p className="text-base sm:text-xl text-blue-100 mb-4 sm:mb-6">Need urgent help? Uganda's best plumbers are just a call away!</p>
          <Button 
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-300 text-sm sm:text-lg px-4 sm:px-6 py-2 sm:py-3"
          >
            Call Now: +256 780 498 580
          </Button>
        </div>
      </section>

      <Footer />

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
        />
      )}
    </div>
  );
};

export default Index;
