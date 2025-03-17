// Default project data with image and link
const DEFAULT_PROJECTS = [
    {
      id: 1,
      title: "ShopPhile Android App",
      description: "A comprehensive shopping companion application built for Android devices.",
      image: "https://via.placeholder.com/300", // Replace with actual image URL
      link: "https://example.com/shopphile",   // Replace with the actual link
    },
    {
      id: 2,
      title: "CES Points Tracker Web Application",
      description: "An intuitive web-based platform for tracking CES points and achievements.",
      image: "https://via.placeholder.com/300", // Replace with actual image URL
      link: "https://example.com/ces-tracker",  // Replace with the actual link
    },
    {
      id: 3,
      title: "DCISM OJT Tracker",
      description: "The DCISM Internship Tracker is a web-based application designed to streamline the internship tracking process for the Department of Computer, Information Sciences, and Mathematics (DCISM). This tool is tailored for coordinators and students, enabling seamless management of internship records, progress, and evaluations.",
      image: "https://via.placeholder.com/300", // Replace with actual image URL
      link: "https://example.com/ces-tracker",  // Replace with the actual link
    }
  ];
  
// Main component
const Blogs = ({ projects = DEFAULT_PROJECTS }) => {
    return (
      <div className="flex flex-col gap-4 bg-dark-900 rounded-lg shadow-lg p-6">
        {/* Header section */}
        <div className='p-6 flex flex-col gap-4'>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-black shadow-[0px_0px_10px] shadow-white" />
          <h2 className="text-2xl font-bold">Recent Projects</h2>
        </div>
  
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer rounded-lg overflow-hidden bg-white"
            >
              <div className="relative">
                {/* Project image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold mb-2">{project.title}</h3>
                {project.description && (
                  <p className="text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>
                )}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded-lg text-center"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    );
  };
  
  export default Blogs;
  