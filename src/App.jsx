import React from "react";
import { ProfilePicture } from "./components/ProfilePicture";
import SocialIcons from "./components/SocialIcons";
import { HardSkills } from "./components/HardSkills";
import { ProjectsDisplay } from "./components/ProjectsDisplay";
import { AboutMe } from "./components/AboutMe";

export const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
        <section className="pl-4 flex gap-6 justify-center items-center max-w-[800px] max-md:px-4 max-md:py-0 max-sm:flex-col max-sm:gap-4 max-sm:text-center">
          <div>
            <ProfilePicture />
          </div>
          <div className="flex flex-col flex-1 justify-center items-start max-sm:items-center">
            <h1 className="mb-1 w-full text-3xl font-bold text-neutral-800 max-md:text-3xl max-sm:text-2xl">
              Hi! I'm Kurt Mike Pino
            </h1>
            <p className="mb-2 w-full text-base m-0 p-0 text-neutral-600 max-md:text-sm max-sm:text-sm">
              Front-End Developer & UI Designer
            </p>
            <div className="flex gap-6 items-center m-0 p-0 px-0 py-2 max-sm:justify-center">
              <SocialIcons
                type="linkedin"
                link="www.linkedin.com/in/kurt-mike-pino-7a6185182"
              />
              <SocialIcons
                type="github"
                link="https://github.com/USC-Mike"
              />
              <SocialIcons type="email" link="mailto:your-kurtmpino@gmail.com" />
            </div>
          </div>
        </section>

        <AboutMe />
        <HardSkills />
        <ProjectsDisplay />
      </div>
    </div>
  );
};

export default App;
