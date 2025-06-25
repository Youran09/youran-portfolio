import React from "react";
import WorkExperience from "./WorkExperience";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <WorkExperience />
          </div>
          <div className="hidden md:block w-px bg-cyan-400/30 mx-2" />
          <div className="flex-1">
            {/* Education removed to be a standalone section */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
