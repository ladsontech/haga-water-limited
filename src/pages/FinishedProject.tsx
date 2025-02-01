import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const FinishedProject = () => {
  const { projectName } = useParams();
  const navigate = useNavigate();

  const projectDetails: { [key: string]: { description: string; image: string; location?: string } } = {
    "Hotel Lafesa": {
      description: "Complete water treatment and management system installation for Hotel Lafesa, ensuring clean and sustainable water supply for guests and operations.",
      image: "/lovable-uploads/d13dd86d-f07a-4a88-b2f7-ad15fbfb0adf.png",
      location: "Kampala"
    },
    "Fishing Plant": {
      description: "State-of-the-art water management and treatment facility for a commercial fishing plant, maintaining optimal water quality for fish processing and sustainability.",
      image: "/lovable-uploads/da3b8d8f-dde2-4b5b-b750-086568fd0f06.png",
      location: "Lake Victoria Region"
    },
    "LBA Labs - Kampala": {
      description: "Advanced laboratory facility in Kampala equipped with cutting-edge water testing and analysis capabilities, serving the greater Kampala metropolitan area.",
      image: "/lovable-uploads/0718387f-8600-4cfd-93ac-6d8b9ba96d09.png",
      location: "Central Kampala"
    },
    "LBA Labs - Jinja": {
      description: "Specialized water quality testing facility serving the Jinja region with modern analytical equipment and comprehensive water quality assessments.",
      image: "/lovable-uploads/1fa88823-0c19-4d22-86f9-c74f9500b04f.png",
      location: "Jinja City"
    },
    "LBA Labs - Mbarara": {
      description: "State-of-the-art laboratory in Mbarara providing comprehensive water analysis services for the western region of Uganda.",
      image: "/lovable-uploads/ab9259ef-3a05-4ff1-bec2-79c2fa4ecbb7.png",
      location: "Mbarara City"
    },
    "LBA Labs - Mbale": {
      description: "Modern water testing facility equipped with the latest technology to serve the eastern region, ensuring water quality standards are met.",
      image: "/lovable-uploads/0718387f-8600-4cfd-93ac-6d8b9ba96d09.png",
      location: "Mbale City"
    }
  };

  const project = projectDetails[projectName as string];

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-red-600">Project not found</h1>
        <Button onClick={() => navigate(-1)} className="mt-4">
          Go Back
        </Button>
      </div>
    );
  }

  const allProjects = Object.entries(projectDetails);

  return (
    <div className="container mx-auto px-4 py-8 bg-water-gradient min-h-screen">
      <div className="max-w-7xl mx-auto">
        {projectName ? (
          // Single Project View
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-primary mb-6">{projectName}</h1>
            <Card className="overflow-hidden bg-white/80 backdrop-blur-sm">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={projectName}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <span className="text-sm font-medium text-primary-dark">Location: </span>
                  <span className="text-sm text-gray-600">{project.location}</span>
                </div>
                <p className="text-gray-700 text-lg mb-6">{project.description}</p>
                <div className="flex justify-between items-center">
                  <Button onClick={() => navigate(-1)} variant="outline">
                    Go Back
                  </Button>
                  <Button onClick={() => navigate("/contact")}>
                    Contact Us About This Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          // Projects Grid View
          <div>
            <h1 className="text-3xl font-bold text-primary mb-8 text-center">Our Finished Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProjects.map(([name, details]) => (
                <Card 
                  key={name}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
                  onClick={() => navigate(`/project/${encodeURIComponent(name)}`)}
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={details.image}
                      alt={name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold text-primary-dark mb-2">{name}</h3>
                    <div className="mb-2">
                      <span className="text-sm font-medium text-primary-dark">Location: </span>
                      <span className="text-sm text-gray-600">{details.location}</span>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2">{details.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinishedProject;