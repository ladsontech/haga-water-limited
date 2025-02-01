const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 md:mb-8 text-primary">About Haga Water Limited</h1>
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
          <div>
            <p className="text-sm sm:text-base text-gray-700">
              Haga Water Limited is a service-oriented company established by Ugandan Water Engineers with a vision to become the most reliable, creative, and transparent service provider in the plumbing and water solutions industry. Founded two years ago, we specialize in delivering high-quality plumbing services, water treatment solutions, and civil works for general, domestic, commercial, and industrial projects.
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-primary mb-3">Award Recognition</h2>
            <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
              <img 
                src="/lovable-uploads/43ac2193-72a0-4845-9b32-b5f509c58f50.png" 
                alt="Haga Water Limited receiving Maji Preneur award" 
                className="rounded-lg shadow-md w-full md:w-2/5 object-cover"
              />
              <p className="text-sm sm:text-base text-gray-700">
                We are proud recipients of the prestigious Maji Preneur award, recognizing our excellence and innovation in water filtration solutions. This award acknowledges our commitment to providing sustainable and efficient water treatment technologies to our communities.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">Our Vision</h2>
            <p className="text-sm sm:text-base text-gray-700">
              To be recognized as the most trusted and valuable plumbing service provider in East Africa, delivering innovative and sustainable water solutions.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">Our Mission</h2>
            <p className="text-sm sm:text-base text-gray-700">
              To provide exceptional plumbing services that exceed our customers' expectations in terms of quality, efficiency, and value. We are driven by our motto, "Water Knows Us," which reflects our deep expertise and commitment to solving water-related challenges.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">Our Expertise</h2>
            <p className="text-sm sm:text-base text-gray-700">
              With a dedicated team of experts, state-of-the-art technology, and strategic partnerships with reputable civil engineering companies, we ensure that our clients receive the best plumbing services and materials. Our team is certified and experienced, with qualifications from reputable institutions such as the Directorate of Industrial Training (DIT), Uganda Business and Technical Examinations Board (UBTEB), and Kyambogo University.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">Environmental Commitment</h2>
            <p className="text-sm sm:text-base text-gray-700">
              We are committed to promoting environmental sustainability through collaborations with NGOs and non-NGOs. Our initiatives include tree planting, proper sanitation, waste disposal, and water storage to reduce the spread of diseases like malaria and diarrhea.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;