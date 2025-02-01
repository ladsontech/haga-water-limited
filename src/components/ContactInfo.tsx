import { Phone, Mail, MessageCircle, UserCircle } from "lucide-react";

const ContactInfo = () => {
  const contacts = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      value: "+256755694693",
      link: "https://wa.me/256755694693"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Customer Care",
      value: "+256787556897",
      link: "tel:+256787556897"
    },
    {
      icon: <UserCircle className="w-6 h-6" />,
      title: "Managing Director",
      value: "+256780498580",
      link: "tel:+256780498580"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "hagawater11@gmail.com",
      link: "mailto:hagawater11@gmail.com"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">Contact Us</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            className="flex items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
              {contact.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{contact.title}</h3>
              <p className="text-primary">{contact.value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;