import React from 'react';
import ProjectItem from './ProjectItem';
import projectItems from '../projectItems.js';

function Projects() {
  return (
    <div id="projects">
      {projectItems.map(({name, description, image_urls}) => <ProjectItem name={name} description={description} images={image_urls}/>)}
    </div>
  );
}

export default Projects;
