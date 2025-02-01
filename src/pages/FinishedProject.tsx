import { Card, CardContent } from "@/components/ui/card";

const FinishedProject = () => {
  const projects = [
    {
      name: "Hotel Lafesa",
      location: "Kampala",
      description: "Complete water treatment and management system installation for Hotel Lafesa, ensuring clean and sustainable water supply for guests and operations."
    },
    {
      name: "Fishing Plant",
      location: "Lake Victoria Region",
      description: "State-of-the-art water management and treatment facility for a commercial fishing plant, maintaining optimal water quality for fish processing and sustainability."
    },
    {
      name: "LBA Labs - Kampala",
      location: "Central Kampala",
      description: "Advanced laboratory facility in Kampala equipped with cutting-edge water testing and analysis capabilities, serving the greater Kampala metropolitan area."
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
        <div className="space-y-4">
          {projects.map((project) => (
            <Card 
              key={project.name}
              className="bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary-dark">{project.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{project.location}</p>
                  <p className="text-gray-700 mt-2">{project.description}</p>
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