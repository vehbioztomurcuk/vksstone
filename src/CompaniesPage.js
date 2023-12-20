// src/pages/CompaniesPage.js
import React from 'react';
import PhotoAlbum from 'react-photo-album';

const photos = [
  // ... your photos here ...
];

const CompaniesPage = () => {
  return (
    <div>
      <h1>Companies</h1>
      <PhotoAlbum photos={photos} />
    </div>
  );
};

export default CompaniesPage;
