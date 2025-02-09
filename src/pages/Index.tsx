
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Droplet, Building2, Factory, Sprout, Trophy, Phone, Clock, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const services = [
    {
      title: "Domestic",
      description: "Expert plumbing solutions for homes and residential properties, ensuring comfort and safety for your family.",
      Icon: Building2,
      image: "/lovable-uploads/6679d361-17df-4a56-ad5b-d4f7f985c63a.png"
    },
    {
      title: "Commercial",
      description: "Comprehensive plumbing services for businesses, offices, and commercial establishments.",
      Icon: Factory,
      image: "/lovable-uploads/741d7779-e196-4d5c-8d6e-704e173e5100.png"
    },
    {
      title: "Agricultural",
      description: "Specialized irrigation and water management solutions for farms and agricultural projects.",
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
      title: "25+ Years Experience",
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

  const testimonials = [
    {
      text: "Outstanding service! Fixed our emergency leak quickly and professionally.",
      author: "Sarah Johnson",
      rating: 5
    },
    {
      text: "Very reliable and efficient team. Would highly recommend their services.",
      author: "Michael Smith",
      rating: 5
    },
    {
      text: "Great experience from start to finish. Fair pricing and excellent work.",
      author: "David Brown",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Animated Water Background */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute inset-0 animate-water-wave bg-[url('/water-texture.png')] bg-repeat" />
      </div>

      <div className="relative z-10">
        <Hero />
        
        {/* Features Section */}
        <section className="py-12 bg-white/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0">
                    <feature.icon className="w-12 h-12 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
                    <div className="absolute inset-0 animate-water-ripple opacity-20" />
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

        {/* Testimonials Section */}
        <section className="py-16 bg-blue-50/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <p className="text-gray-900 font-semibold">- {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Call Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              24/7 Emergency Plumbing Services
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Don't wait until it's too late. Contact us now!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +256 755 694 693
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Request Service
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

