import { Bath, MessageSquare, Toilet } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const Shop = () => {
  const products = [
    {
      name: "Modern Toilet Bowl",
      description: "Dual flush water-saving toilet with soft-close seat",
      icon: Toilet,
      image: "/lovable-uploads/47721987-7060-4846-83b6-5e3bbcb2fb0e.png"
    },
    {
      name: "Squat Toilet",
      description: "Traditional squat toilet with high-quality ceramic finish",
      icon: Toilet,
      image: "/lovable-uploads/a63888f6-044f-4a83-bf35-10bcb2320701.png"
    },
    {
      name: "Wall-Mounted Urinal",
      description: "Modern wall-mounted urinal with automatic flush system",
      icon: Bath,
      image: "/lovable-uploads/741d7779-e196-4d5c-8d6e-704e173e5100.png"
    },
    {
      name: "Flush Cistern",
      description: "Efficient dual-flush cistern mechanism",
      icon: Bath,
      image: "/lovable-uploads/1187a00e-235f-4fa6-9879-c1c38f69a51a.png"
    },
    {
      name: "Kitchen Sink",
      description: "Premium stainless steel kitchen sink with modern faucet",
      icon: Bath,
      image: "/lovable-uploads/8e7fb609-f622-499a-8708-daf14795c28c.png"
    },
    {
      name: "Washroom Sink",
      description: "Contemporary ceramic washroom sink with mounting hardware",
      icon: Bath,
      image: "/lovable-uploads/6679d361-17df-4a56-ad5b-d4f7f985c63a.png"
    }
  ];

  const handleInquiry = (product: typeof products[0]) => {
    const message = `Hello! I'm interested in the ${product.name}. Can you provide more information?`;
    const phoneNumber = "+256755694693";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-water-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary-dark text-center mb-8">
          Sanitary Appliances
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <product.icon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg sm:text-xl">{product.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="aspect-square w-full overflow-hidden rounded-lg mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-gray-600 text-sm sm:text-base mb-2">{product.description}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full gap-2" 
                  onClick={() => handleInquiry(product)}
                >
                  <MessageSquare className="h-4 w-4" />
                  Inquire on WhatsApp
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;