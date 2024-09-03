import React from 'react';
import LightboxComponent from './allmain'; 

const Parent = () => {
  const images = [
    'https://www.mudra.org.in/images/gallery/1st/mudra-01.jpg',
    'https://www.mudra.org.in/images/gallery/1st/mudra-02.jpg',
    'https://www.mudra.org.in/images/gallery/1st/mudra-03.jpg',
    'https://www.mudra.org.in/images/gallery/1st/mudra-04.jpg',
    "https://www.mudra.org.in/images/gallery/1st/mudra-05.jpg",
    "https://www.mudra.org.in/images/gallery/1st/mudra-06.jpg",
    "https://www.mudra.org.in/images/gallery/1st/mudra-06.jpg",
    "https://www.mudra.org.in/images/gallery/1st/mudra-06.jpg"
  ];

  return (
    <div>
      <LightboxComponent images={images} />
    </div>
  );
};

export default Parent;
