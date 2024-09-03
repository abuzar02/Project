import React from 'react';
import ProgramMain from './programmain';

const Program = () => {
  const images = [
    'https://www.mudra.org.in/images/gallery/4th/Handing.JPG',
    'https://www.mudra.org.in/images/gallery/4th/Launch.JPG',
    'https://www.mudra.org.in/images/gallery/4th/Launch-of-Succes-thumb.jpg', 
  ];

  return (
    <div>
      <ProgramMain images={images} />
    </div>  
  );
};

export default Program 
