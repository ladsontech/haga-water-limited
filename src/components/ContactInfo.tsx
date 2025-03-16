
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
      link: "https://www.google.com/maps/dir/Banda,+Kampala/spot+complex,+kasangati,+Kampala/@0.3932949,32.5784064,13z/data=!4m13!4m12!1m5!1m1!1s0x177db985b5f6b027:0x241b1da96f270722!2m2!1d32.6368481!2d0.3539163!1m5!1m1!1s0x177db113c526e2eb:0xd3aedc206e11d58c!2m2!1d32.603325!2d0.4384537?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
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
      
      <div className="mt-8 sm:mt-12 text-center">
        <p className="text-gray-600">
          Visit us at Spot Complex, Kasangati, Kampala or check our location on <a href="https://www.google.com/maps/dir/Banda,+Kampala/spot+complex,+kasangati,+Kampala/@0.3932949,32.5784064,13z/data=!4m13!4m12!1m5!1m1!1s0x177db985b5f6b027:0x241b1da96f270722!2m2!1d32.6368481!2d0.3539163!1m5!1m1!1s0x177db113c526e2eb:0xd3aedc206e11d58c!2m2!1d32.603325!2d0.4384537?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Maps</a>.
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
