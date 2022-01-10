import React from "react";
import ProjectLinks from "./ProjectLinks";

function ProjectItem({
  name,
  description,
  techstack,
  github_url,
  site_url,
  components,
}) {
  return (
    <div className='project-item'>
      <h2>{name}</h2>
      <p>{description}</p>
      <ProjectLinks github={github_url} site={site_url} />
      <h3>Tech Stack</h3>
      <p>{techstack}</p>
      {components.map((component) => {
        return (
          <div className='project-item-border'>
            <img
              src={component.image_url}
              alt={`demo of ${component.name}`}
              className='img-project'
            />
            <h3>{component.name}</h3>
            <ul>
              {component.bullet_points.map((bp) => {
                return (
                  <li>
                    <h4>{bp}</h4>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectItem;
