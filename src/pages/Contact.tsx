import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8 md:py-12">
      <ContactInfo />
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;