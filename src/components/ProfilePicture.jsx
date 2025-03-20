import React from "react";

export const ProfilePicture = () => {
  return (
    <div className="relative w-[110px] h-[110px] sm:w-[90px] sm:h-[90px]">
      {/* Border Circle */}
      <div className="absolute inset-0 rounded-full border-4 border-yellow-400"></div>
      
      {/* Profile Image */}
      <img
        src="/vite.svg"  // <-- Replace with your image URL or local path
        alt="John Doe"
        className="w-full h-full rounded-full object-cover"
      />
    </div>
  );
};
