import { Phone, Mail, MessageCircle, UserCircle, MapPin } from "lucide-react";

const ContactInfo = () => {
  const contacts = [
    {
      icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "WhatsApp",
      value: "+256755694693",
      link: "https://wa.me/256755694693"
    },
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Customer Care",
      value: "+256787556897",
      link: "tel:+256787556897"
    },
    {
      icon: <UserCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Managing Director",
      value: "+256780498580",
      link: "tel:+256780498580"
    },
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Email",
      value: "hagawater11@gmail.com",
      link: "mailto:hagawater11@gmail.com"
    },
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Location",
      value: "Spot Complex, Kasangati, Kampala",
      link: "https://maps.google.com/maps?q=Spot+Complex,+Kasangati,+Kampala"
    },
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Postal Address",
      value: "P.O. Box 108195 Kampala",
      link: "#"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-4 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-primary">Contact Us</h1>
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target={contact.link !== "#" ? "_blank" : undefined}
            rel={contact.link !== "#" ? "noopener noreferrer" : undefined}
            className="flex items-center p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-full flex items-center justify-center mr-3 sm:mr-4">
              {contact.icon}
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">{contact.title}</h3>
              <p className="text-sm sm:text-base text-primary">{contact.value}</p>
            </div>
          </a>
        ))}
      </div>
      
      <div className="mt-8 sm:mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7538444837074!2d32.59870661475345!3d0.4273799997172747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0ffffffff%3A0x71c987e30d4f55f!2sSpot%20Complex!5e0!3m2!1sen!2sus!4v1647887291251!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-md"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfo;