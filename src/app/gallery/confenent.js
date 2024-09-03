import React from 'react';
import Confidentmain from './confedentmain';

const Confident = () => {
  const images = [
    'https://www.mudra.org.in/images/gallery/3rd/ASSOCHAM.JPG',
    'https://www.mudra.org.in/images/gallery/3rd/Dr%20Kshatrapati.JPG',
    'https://www.mudra.org.in/images/gallery/3rd/Incusive-Finance.JPG',
    'https://www.mudra.org.in/images/gallery/3rd/Jiji-Mammen-CEO.JPG',
  ];

  return (
    <div>
      <Confidentmain images={images} />
    </div>
  );
};

export default Confident;
