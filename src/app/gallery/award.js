import React from 'react';
import LightMain from './awardmain';

const Award = () => {
  const images = [
    'https://www.mudra.org.in/images/gallery/2nd/ADFIAP-Award-thumb.jpg',
    'https://www.mudra.org.in/images/gallery/2nd/Jiji-Mammen-thumb.jpg',
    'https://www.mudra.org.in/images/gallery/2nd/Jij-thumb.jpg',
    'https://www.mudra.org.in/images/gallery/1st/mudra-01.jpg', 
  ];

  return (
    <div>
      <LightMain images={images} />
    </div>
  );
};

export default Award;
