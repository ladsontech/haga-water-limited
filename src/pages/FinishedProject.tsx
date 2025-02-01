import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FinishedProject = () => {
  const { projectName } = useParams();
  const navigate = useNavigate();

  const projectDetails: { [key: string]: { description: string; image: string } } = {
    "Water Treatment Plant": {
      description: "State-of-the-art water treatment facility implementing advanced filtration technologies for clean and safe drinking water.",
      image: "/lovable-uploads/d13dd86d-f07a-4a88-b2f7-ad15fbfb0adf.png"
    },
    "Fishing Plant": {
      description: "Modern fishing plant with comprehensive water management systems ensuring sustainable aquaculture practices.",
      image: "/lovable-uploads/da3b8d8f-dde2-4b5b-b750-086568fd0f06.png"
    },
    "LBA Labs - Kampala": {
      description: "Advanced laboratory facility in Kampala equipped with cutting-edge water testing and analysis capabilities.",
      image: "/lovable-uploads/0718387f-8600-4cfd-93ac-6d8b9ba96d09.png"
    },
    "LBA Labs - Jinja": {
      description: "Specialized water quality testing facility serving the Jinja region with modern analytical equipment.",
      image: "/lovable-uploads/1fa88823-0c19-4d22-86f9-c74f9500b04f.png"
    },
    "LBA Labs - Mbarara": {
      description: "State-of-the-art laboratory in Mbarara providing comprehensive water analysis services.",
      image: "/lovable-uploads/ab9259ef-3a05-4ff1-bec2-79c2fa4ecbb7.png"
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-6">{projectName}</h1>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={project.image}
            alt={projectName}
            className="w-full h-[400px] object-cover"
          />
          <div className="p-6">
            <p className="text-gray-700 text-lg mb-6">{project.description}</p>
            <div className="flex justify-between items-center">
              <Button onClick={() => navigate(-1)} variant="outline">
                Go Back
              </Button>
              <Button onClick={() => navigate("/contact")}>
                Contact Us About This Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishedProject;