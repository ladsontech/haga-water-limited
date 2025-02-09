import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Droplet, Building2, Factory, Sprout } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    setBubbles([...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 20 + 10}px`,
      height: `${Math.random() * 20 + 10}px`,
      animationDelay: `${Math.random() * 5}s`
    })));
  }, []);

  const toggleSound = () => {
    setIsPlaying(!isPlaying);
    const audio = document.getElementById("water-sound");
    if (audio instanceof HTMLAudioElement) {
      isPlaying ? audio.pause() : audio.play();
    }
  };

  const services = [
    { title: "Water Supply", description: "Reliable water solutions", image: "/images/water.jpg", icon: Droplet },
    { title: "Building Solutions", description: "Construction services", image: "/images/building.jpg", icon: Building2 },
    { title: "Industrial Supply", description: "Factory-grade solutions", image: "/images/factory.jpg", icon: Factory },
    { title: "Eco-Friendly Solutions", description: "Sustainable development", image: "/images/sprout.jpg", icon: Sprout },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Video Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30">
          <source src="/lovable-uploads/waterfountain.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/20 to-white/50" />
      </div>

      {/* Floating Bubbles Animation */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {bubbles.map((bubble, i) => (
          <div key={i} className="absolute bubble animate-float" style={bubble} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20">
        <Hero />

        {/* Sound Toggle Button */}
        <button 
          onClick={toggleSound}
          className="fixed bottom-4 right-4 p-3 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
        >
          {isPlaying ? "🔊" : "🔇"}
        </button>

        {/* Services Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-primary-dark drop-shadow-md">
              Flowing Solutions
            </h2>
            <p className="mt-4 text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto">
              Where Expertise Meets Liquid Perfection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div key={index} className="group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      {React.createElement(service.icon, { className: "text-primary h-8 w-8" })}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Water Sound Element */}
        <audio id="water-sound" loop>
          <source src="/sounds/water-flowing.mp3" type="audio/mpeg" />
        </audio>

        <Footer className="bg-white/80 backdrop-blur-sm" />
      </div>
    </div>
  );
};

export default Index;
