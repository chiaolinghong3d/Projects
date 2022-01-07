import React from 'react';

function ProjectItem({name, description, images}) {
  return (
    <div className='content-item-container project-item'>
      <h2>{name}</h2>
      <p>
        {description}
      </p>
      <div className='project-gallery'>
        {images.map(url => <img src={url} alt={`demo from ${name}`} className='img-project' />)}
      </div>
    </div>
  );
}

export default ProjectItem;
