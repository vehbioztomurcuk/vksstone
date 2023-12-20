// src/ProjectsGallery.js
import React from 'react';

const ProjectsGallery = () => {
  // Example content - replace with actual image paths and descriptions
  const projectImages = [
    {
      src: require('/home/user1/github-projects/vksstone-website/src/images/hq-marble-2.jpg'),
      description: 'Project Image 1 Description',
    },
    // ... more images
  ];

  return (
    <div className="block-gallery">
      {projectImages.map((image, index) => (
        <div key={index} className="block-gallery-item">
          <img src={image.src} alt={`Project item ${index + 1}`} />
          <p>{image.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGallery;
