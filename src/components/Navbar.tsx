
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Shop" },
    { path: "/project/Finished Projects", label: "Finished Projects" },
    { path: "/about", label: "About" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/logo.png" 
                alt="Haga Water Limited Logo" 
                className="h-14 w-auto sm:h-16"
              />
              <div className="flex flex-col ml-2">
                <span className="border-b-2 border-red-500">
                  <span className="text-lg sm:text-2xl font-bold text-red-500">HAGA WATER </span>
                  <span className="text-lg sm:text-2xl font-bold text-primary">LIMITED</span>
                </span>
                <span className="text-sm text-red-500 italic mt-1 text-center w-full">"Water knows us"</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-gray-700 hover:text-primary transition-colors ${
                  isActive(item.path)
                    ? "border-b-2 border-primary text-primary font-medium"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className={`bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors ${
                isActive("/contact") ? "ring-2 ring-primary-dark" : ""
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md ${
                    isActive(item.path)
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className={`block px-3 py-2 bg-primary text-white rounded-md hover:bg-primary-dark ${
                  isActive("/contact") ? "ring-2 ring-primary-dark" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
