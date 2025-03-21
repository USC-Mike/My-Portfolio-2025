import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

export const ProjectsDisplay = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Utility function to handle postimg.cc URLs
  const getDirectImageUrl = (postImgUrl) => {
    return postImgUrl.replace(/\/v\d+/, '/i');
  };

  const projects = [
    {
      id: 1,
      image: "https://i.postimg.cc/XvJ2WKHq/sp.png",
      altText: "SpendInsight",
      tags: "SpendInsight is a smart expense tracker and bill management app designed to help you maintain your monthly bill payments efficiently.",
      title: "SpendInsight",
      link: "",
    },
    {
      id: 2,
      image: "https://i.postimg.cc/8PRXmzfp/internship-tracker.png",
      altText: "Internship Tracker",
      tags: "The DCISM Internship Tracker is a web-based application designed to streamline the internship tracking process for the DCISM.",
      title: "DCISM Internship Tracker",
      link: "",
    },
  ];

  return (
    <div>
      <h2 className="gap-4 p-4 flex flex-col mb-1 w-full text-m font-bold text-neutral-800 max-md:text-lg max-sm:text-m">
        Recent Works
      </h2>

      {/* Project Cards Grid */}
      <section className="grid grid-cols-2 gap-6 w-full max-sm:grid-cols-1 max-sm:gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={getDirectImageUrl(project.image)}
            altText={project.altText}
            tags={project.tags}
            title={
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline text-neutral-800"
              >
                {project.title}
              </a>
            }
            onClick={() => setSelectedImage(getDirectImageUrl(project.image))}
          />
        ))}
      </section>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-white text-xl p-2 rounded-full hover:bg-white hover:text-black transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Popup"
              className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};