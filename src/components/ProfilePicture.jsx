import React from "react";

export const ProfilePicture = () => {
  return (
    <div className="relative w-[110px] h-[110px] sm:w-[90px] sm:h-[90px]">
      {/* Border Circle */}
      <div className="absolute inset-0 rounded-full border-1 border-black"></div>
      
      {/* Profile Image */}
      <img
        src="src/assets/profile.jpg"  // <-- Replace with your image URL or local path
        alt="Mike Pino"
        className="w-full h-full rounded-full object-cover"
      />
    </div>
  );
};
