import { Bath, MessageSquare, Shower, Toilet } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const Shop = () => {
  const products = [
    {
      name: "Modern Toilet Bowl",
      description: "Dual flush water-saving toilet with soft-close seat",
      price: "UGX 450,000",
      icon: Toilet,
      image: "/lovable-uploads/fe9d00f9-1c8e-4adc-b1f3-9973f453190a.png"
    },
    {
      name: "Luxury Bathroom Sink",
      description: "Wall-mounted ceramic sink with modern design",
      price: "UGX 280,000",
      icon: Bath,
      image: "/lovable-uploads/81654459-4af4-40f3-8b89-8b91ff3c89f6.png"
    },
    {
      name: "Premium Shower Set",
      description: "Complete shower system with rainfall head",
      price: "UGX 350,000",
      icon: Shower,
      image: "/lovable-uploads/ab9259ef-3a05-4ff1-bec2-79c2fa4ecbb7.png"
    },
    {
      name: "Flushing Cistern",
      description: "Efficient dual-flush cistern mechanism",
      price: "UGX 180,000",
      icon: Bath,
      image: "/lovable-uploads/0f62153d-08d5-4f04-8f8a-413b39a35609.png"
    }
  ];

  const handleInquiry = (product: typeof products[0]) => {
    const message = `Hello! I'm interested in the ${product.name} (${product.price}). Can you provide more information?`;
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <product.icon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">{product.name}</CardTitle>
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
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="font-semibold text-primary">{product.price}</p>
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