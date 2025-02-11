
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";

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
      src: "/images/biodigesterman.png",
      category: "Bio Digester Installation",
      alt: "Bio Digester Installation Project"
    },
    {
      src: "/images/Haga water installtion team.png",
      category: "Installing domestic sanitary appliances",
      alt: "Domestic Home Installation Project"
    },
    {
      src: "/images/faultypiperepair.png",
      category: "Pipe line Maintenances",
      alt: "Pipe line Repair"
    },
    {
      src: "/images/lady_watertank.jpg",
      category: "water tank installation",
      alt: "Installing water reservoir"
    },

    {
      src: "/images/biodigester1.jpg",
      category: "domestic solid and waste water management",
      alt: "biodigester"
    }


  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-water-gradient min-h-screen">
      <Helmet>
        <title>Our Finished Projects - Haga Water Limited</title>
        <meta name="description" content="Explore our portfolio of completed plumbing and water treatment projects across Uganda, including installations at Hotel Lafesa and various MBN Labs locations." />
        <meta name="keywords" content="completed projects, water treatment installations, plumbing projects, Uganda plumbing projects" />
        <meta property="og:title" content="Completed Projects - Haga Water Limited" />
        <meta property="og:description" content="View our successful plumbing and water treatment installations across Uganda." />
      </Helmet>

      <div className="max-w-6xl mx-auto">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectImages.map((image) => (
              <div key={image.category} className="flex flex-col items-center">
                <div className="w-full aspect-square max-h-[600px] overflow-hidden rounded-lg bg-white shadow-lg">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="text-lg text-primary font-medium mt-4">{image.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishedProject;
