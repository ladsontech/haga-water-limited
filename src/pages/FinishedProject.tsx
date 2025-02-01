import { Card, CardContent } from "@/components/ui/card";

const FinishedProject = () => {
  const projects = [
    {
      name: "Hotel Lafesa",
      location: "Kampala",
      description: "Complete water treatment and management system installation for Hotel Lafesa, ensuring clean and sustainable water supply for guests and operations.",
      image: "/lovable-uploads/a7171d6f-4375-4e3b-9f9c-bedf69b413ed.png",
      category: "Bio Digester Installation"
    },
    {
      name: "Fishing Plant",
      location: "Lake Victoria Region",
      description: "State-of-the-art water management and treatment facility for a commercial fishing plant, maintaining optimal water quality for fish processing and sustainability.",
      image: "/lovable-uploads/5ae8cefa-229f-4d58-a73a-56db43e9f1b1.png",
      category: "Domestic Home Installation"
    },
    {
      name: "LBA Labs - Kampala",
      location: "Central Kampala",
      description: "Advanced laboratory facility in Kampala equipped with cutting-edge water testing and analysis capabilities, serving the greater Kampala metropolitan area.",
      image: "/lovable-uploads/fe9d00f9-1c8e-4adc-b1f3-9973f453190a.png",
      category: "Maintenance Work"
    },
    {
      name: "LBA Labs - Jinja",
      location: "Jinja City",
      description: "Specialized water quality testing facility serving the Jinja region with modern analytical equipment and comprehensive water quality assessments."
    },
    {
      name: "LBA Labs - Mbarara",
      location: "Mbarara City",
      description: "State-of-the-art laboratory in Mbarara providing comprehensive water analysis services for the western region of Uganda."
    },
    {
      name: "LBA Labs - Mbale",
      location: "Mbale City",
      description: "Modern water testing facility equipped with the latest technology to serve the eastern region, ensuring water quality standards are met."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-water-gradient min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-8 text-center">Our Finished Projects</h1>
        <div className="space-y-6">
          {projects.map((project) => (
            <Card 
              key={project.name}
              className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {project.image && (
                    <div className="w-full md:w-1/3">
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="rounded-lg object-cover w-full h-48 hover:opacity-90 transition-opacity"
                      />
                      {project.category && (
                        <p className="text-sm text-primary mt-2 font-medium">{project.category}</p>
                      )}
                    </div>
                  )}
                  <div className={project.image ? "w-full md:w-2/3" : "w-full"}>
                    <h3 className="text-xl font-semibold text-primary-dark mb-2">{project.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{project.location}</p>
                    <p className="text-gray-700">{project.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinishedProject;