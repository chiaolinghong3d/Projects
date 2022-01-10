import React from 'react';
import ProjectItem from './ProjectItem';
import projectItems from '../projectItems.js';

function Projects() {
  return (
    <div className='content-item-container project-item' id="projects">
      <h2 className='text-uppercase'>projects</h2>
      {projectItems.map(({name, description, image_urls}) => <ProjectItem name={name} description={description} images={image_urls}/>)}
    </div>
  );
}

export default Projects;
