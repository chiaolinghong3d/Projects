import React from "react";
import { BsGithub, BsGlobe2 } from "react-icons/bs";

function ProjectLinks({ github, site }) {
  return (
    <div className='project-links-container'>
      <a href={github}>
        <BsGithub />
        <h4>Github Repository</h4>
      </a>
      <a href={site}>
        <BsGlobe2 />
        <h4>Visit Site</h4>
      </a>
    </div>
  );
}

export default ProjectLinks;
