import { Mail, Phone, Globe, Home, Users, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Footer = () => {
  const menuItems = [
    { icon: <Home className="w-4 h-4" />, label: "Home", path: "/" },
    { icon: <Users className="w-4 h-4" />, label: "About Us", path: "/about" },
    { icon: <Briefcase className="w-4 h-4" />, label: "Projects", path: "/project/Finished Projects" },
  ];

  const contactInfo = [
    { icon: <Phone className="w-4 h-4" />, label: "+256 787 556897", link: "tel:+256787556897" },
    { icon: <Mail className="w-4 h-4" />, label: "hagawater11@gmail.com", link: "mailto:hagawater11@gmail.com" },
    { icon: <Globe className="w-4 h-4" />, label: "Spot Complex, Kasangati, Kampala", link: "https://maps.google.com/maps?q=Spot+Complex,+Kasangati,+Kampala" },
  ];

  return (
    <footer className="bg-gradient-to-r from-primary/10 to-accent/10 mt-16 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="/lovable-uploads/4f17371f-4ef0-4656-875b-ae4ee6bd3b09.png" 
              alt="Haga Water Limited Logo" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-sm text-gray-600 text-center md:text-left">
              Your trusted partner for all plumbing and water-related needs.
            </p>
          </div>

          {/* Navigation Menu */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-primary mb-4">Quick Links</h3>
            <div className="flex flex-col gap-3">
              {menuItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-2 hover:bg-primary/10"
                  >
                    {item.icon}
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-primary mb-4">Contact Us</h3>
            <div className="flex flex-col gap-3">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  {info.icon}
                  <span>{info.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Haga Water Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;