"use client";
import React from "react";

function ProjectCard({ image, altText, tags, title, onClick }) {
  const tagList = tags.split(",").map((tag) => tag.trim());

  return (
    <article className="flex flex-col items-center w-[304px] max-md:min-w-[280px] max-md:w-[45%] max-sm:w-full">
      <figure
        className="flex overflow-hidden flex-col gap-2 items-start w-full rounded-2xl h-[220px] max-sm:h-[180px] cursor-pointer"
        onClick={onClick} // Click event for popup
      >
        <img src={image} alt={altText} className="object-cover size-full" />
      </figure>
      <div className="flex flex-col items-start w-full">
        <p className="w-full m-0 p-0 text-xs text-neutral-600">{tags}</p>
        <h3 className="flex-1 w-full h-7 m-1 p-0 text-lg font-medium text-gray-900 max-sm:text-base">
          {title}
        </h3>
      </div>
    </article>
  );
}

export default ProjectCard;
