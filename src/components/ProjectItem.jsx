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
    <div className='project-item py-3'>
      <h2 className='text-uppercase text-decoration-underline'>{name}</h2>
      <p className='px-3'>{description}</p>
      <ProjectLinks github={github_url} site={site_url} />
      <h3 className='text-uppercase pt-3'>Tech Stack</h3>
      <p className='px-3'>{techstack}</p>
      {components.map((component) => {
        return (
          <div className='project-item-border row flex-nowrap-md space-evenly align-items-center gx-0'>
            <img
              src={component.image_url}
              alt={`demo of ${component.name}`}
              className='img-fluid col-lg-7 px-0'
            />
            <div className="project-bullet-points col-lg-4 pt-2">
              <h3 className='text-uppercase text-decoration-underline pb-3'>{component.name}</h3>
              <ul>
                {component.bullet_points.map((bp) => {
                  return (
                    <li>
                      <p>{bp}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectItem;
