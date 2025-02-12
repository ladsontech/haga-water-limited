
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";

const FinishedProject = () => {
  const projects = [
    {
      name: "Hotel Lafresa",
      location: "Kampala",
      description: "One of Uganda's premier five-star hotels where we completed comprehensive plumbing installations including septic tank construction, manhole building with covers, and installation of sanitary appliances throughout all rooms.",
    },
    {
      name: "MBN Labs Network",
      location: "Multiple Locations",
      description: "Comprehensive drainage system management and installation of specialized laboratory facilities across multiple branches including Kampala (Main Branch), Jinja, Gulu, Lira, Mukono, Luwero, Mbarara, Mbale, and Nebbi. Installations included laboratory sinks, specialized lab taps, and complete drainage systems.",
    },
    {
      name: "African Bio Labs",
      location: "Kampala",
      description: "Collaborated on a comprehensive water management project including water tank installation for storage reserves, rainwater harvesting systems implementation, and water treatment solutions.",
    },
    {
      name: "Single Life Apartments - Komamboga",
      location: "Komamboga",
      description: "Complete plumbing infrastructure project including washroom water supply pipework, drainage systems, septic tank construction, and water tank installation with elevated stand construction for apartment-wide water supply.",
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
      category: "Water Tank Installation",
      alt: "Installing water reservoir"
    },
    {
      src: "/images/ladybio.jpg",
      category: "Domestic Solid and Waste Water Management",
      alt: "Biodigester Installation"
    }
  ];

  const biodigesterImages = [
    {
      src: "/images/bio1.jpg",
      alt: "Biodigester System Installation"
    },
    {
      src: "/images/bio3.jpg",
      alt: "Biodigester Construction Process"
    },
    {
      src: "/images/bio4.jpg",
      alt: "Complete Biodigester Setup"
    },
    {
      src: "/images/bioman.jpg",
      alt: "Biodigester Installation Team at Work"
    },
   
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-water-gradient min-h-screen">
      <Helmet>
        <title>Our Finished Projects - Haga Water Limited</title>
        <meta name="description" content="Explore our portfolio of completed plumbing and water treatment projects across Uganda, including installations at Hotel Lafesa and various MBN Labs locations." />
        <meta name="keywords" content="completed projects, water treatment installations, plumbing projects, Uganda plumbing projects, biodigester installation" />
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

        {/* Biodigester Installations Section */}
        <div className="mt-16 mb-12">
          <h2 className="text-2xl font-semibold text-primary-dark mb-8 text-center">Biodigester Installations</h2>
          <Card className="bg-white/80 backdrop-blur-sm p-6">
            <p className="text-gray-700 mb-6">
              Our specialized biodigester installation services provide environmentally friendly waste management solutions. We offer complete installation, maintenance, and support services for both residential and commercial properties.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {biodigesterImages.map((image, index) => (
                <div key={index} className="aspect-square w-full rounded-lg overflow-hidden shadow-lg bg-white">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* General Project Images Section */}
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
