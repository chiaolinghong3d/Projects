import React from "react";
import { BsGithub, BsGlobe2 } from "react-icons/bs";

function ProjectLinks({ github, site }) {
  return (
    <div className='row project-links-container'>
      <div className='col-sm-6 col-md-4 d-flex align-items-center'>
        <BsGithub className='mx-2'/>
        <a href={github} className='blue'>
          Github Repository
        </a>
      </div>
      <div className='col-sm-3 col-md-4 d-flex align-items-center'>
        <BsGlobe2 className='mx-2'/>
        <a href={site} className='blue'>
          Visit Site
        </a>
      </div>
    </div>
  );
}

export default ProjectLinks;
