import React from "react";

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project summary">
      <div className="card-content grey-text text-darkedn-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by Justin</p>
        <p className="grey-text">November 31st 11:00am</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
