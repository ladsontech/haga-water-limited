import { Card, CardContent } from "@/components/ui/card";

const FinishedProject = () => {
  const projects = [
    {
      name: "Hotel Lafesa",
      location: "Kampala",
      description: "Complete water treatment and management system installation for Hotel Lafesa, ensuring clean and sustainable water supply for guests and operations.",
    },
    {
      name: "Healing Way Diagnostic Special",
      location: "Bugolobi",
      description: "water treatment plant.",
    },
    {
      name: "MBN Labs - Kampala",
      location: "Central Kampala",
      description: "Advanced laboratory facility in Kampala equipped with cutting-edge water testing and analysis capabilities, serving the greater Kampala metropolitan area.",
    },
    {
      name: "MBN Labs - Jinja",
      location: "Jinja City",
      description: "Specialized water quality testing facility serving the Jinja region with modern analytical equipment and comprehensive water quality assessments."
    },
    {
      name: "African Bio Labs",
      location: "Jinja City",
      description: "Specialized water quality testing facility serving the Jinja region with modern analytical equipment and comprehensive water quality assessments."
    },
    {
      name: "MBN Labs - Mbarara",
      location: "Mbarara City",
      description: "State-of-the-art laboratory in Mbarara providing comprehensive water analysis services for the western region of Uganda."
    },
    {
      name: "MBN Labs - Mbale",
      location: "Mbale City",
      description: "Modern water testing facility equipped with the latest technology to serve the eastern region, ensuring water quality standards are met."
    }
  ];

  const projectImages = [
    {
      src: "/images/biodigester.png",
      category: "Bio Digester Installation",
      alt: "Bio Digester Installation Project"
    },
    {
      src: "/images/domestictoilet.png",
      category: "Installing Sanitary appliances in domestic applicances",
      alt: "Domestic Home Installation Project"
    },
    {
      src: "/images/fultypiperepair.png",
      category: "Pipe line Maintenances",
      alt: "Pipe line Repair"
    },

    {
      src: "/images/lady_watertank.jpg",
      category: "water tank installation",
      alt: "Installing water reservoir"
    }


    

  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-water-gradient min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-8 text-center">Our Finished Projects</h1>
        
        {/* Project List */}
        <div className="space-y-6 mb-12">
          {projects.map((project) => (
            <Card 
              key={project.name}
              className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary-dark mb-2">{project.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{project.location}</p>
                <p className="text-gray-700">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Images Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-primary-dark mb-8 text-center">Plumbers at Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectImages.map((image) => (
              <div key={image.category} className="flex flex-col items-center">
                <div className="w-full h-48 overflow-hidden rounded-lg">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm text-primary font-medium mt-2">{image.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishedProject;