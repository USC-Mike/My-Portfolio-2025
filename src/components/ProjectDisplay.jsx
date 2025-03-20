import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

export const ProjectsDisplay = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: 1,
      image: "/vite.svg",
      altText: "hopPhile Android App",
      tags: "A comprehensive shopping companion application built for Android devices.",
      title: "ShopPhile Android App",
    },
    {
      id: 2,
      image: "/vite.svg",
      altText: "File Sharing",
      tags: "An intuitive web-based platform for tracking CES points and achievements.",
      title: "CES Points Tracker Web Application",
    },
    {
      id: 3,
      image: "/vite.svg",
      altText: "DCISM OJT Tracker",
      tags: "The DCISM Internship Tracker is a web-based application designed to streamline the internship tracking process for the DCISM.",
      title: "DCISM OJT Tracker",
    },
    {
      id: 4,
      image: "src/components/t1.jpg",
      altText: "File Sharing",
      tags: "mobile, ui design",
      title: "File Sharing Concept",
    },
  ];

  return (
    <div>
      <h2 className="gap-4 p-4 flex flex-col mb-1 w-full text-m font-bold text-neutral-800 max-md:text-lg max-sm:text-m">
        Recent Works
      </h2>

      {/* Project Cards */}
      <section className="grid grid-cols-2 gap-6 w-full max-sm:grid-cols-1 max-sm:gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            altText={project.altText}
            tags={project.tags}
            title={project.title}
            onClick={() => setSelectedImage(project.image)}
          />
        ))}
      </section>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
          onClick={() => setSelectedImage(null)} // Close when clicking outside
        >
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-black text-s p-1"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Popup"
              className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            />
          </div>
        </div>
      )}
    </div>
  );
};
