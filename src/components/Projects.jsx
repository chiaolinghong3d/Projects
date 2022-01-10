import React from "react";
import ProjectItem from "./ProjectItem";
import projectItems from "../projectItems.js";

function Projects() {
  return (
    <div className='content-item-container project-item' id='projects'>
      <h2 className='text-uppercase pb-3'>projects</h2>
      <div className='content-item-border'>
        {projectItems.map(({ name, description, techstack, components, github_url, site_url }) => (
          <ProjectItem
            name={name}
            description={description}
            techstack={techstack}
            components={components}
            github_url={github_url}
            site_url={site_url}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
