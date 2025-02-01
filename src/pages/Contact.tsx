const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 md:mb-8 text-primary">Contact Us</h1>
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
          <div className="grid gap-4 sm:gap-6">
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-semibold text-primary">WhatsApp</h2>
              <a href="tel:+256755694693" className="text-sm sm:text-base text-gray-700 hover:text-primary block">
                +256 755 694 693
              </a>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-semibold text-primary">Customer Care</h2>
              <a href="tel:+256787556897" className="text-sm sm:text-base text-gray-700 hover:text-primary block">
                +256 787 556 897
              </a>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-semibold text-primary">Managing Director</h2>
              <a href="tel:+256780498580" className="text-sm sm:text-base text-gray-700 hover:text-primary block">
                +256 780 498 580
              </a>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-semibold text-primary">Email</h2>
              <a href="mailto:hagawater11@gmail.com" className="text-sm sm:text-base text-gray-700 hover:text-primary block break-all">
                hagawater11@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;