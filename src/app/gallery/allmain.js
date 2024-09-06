

"use client";
import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox'; 
import '../style/gallery.css'; 
import { IoSearchSharp } from "react-icons/io5"; 
import'yet-another-react-lightbox/styles.css'
const LightboxComponent = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleViewLargerClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <div className='photoGallery'>
        <h2>Photo Gallery</h2>
      </div>
      <div className='thumbnail'>
        {images.map((src, index) => (
          <div 
            key={index} 
            className='mainImage'
            onClick={() => handleViewLargerClick(index)}
          >
            <img
              src={src}
              alt={`Image ${index}`}
            />
            <div className='overlay'>
              <IoSearchSharp />
            </div>
          </div>
        ))}

        {isOpen && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            slides={images.map(src => ({ src }))} // Pass images array as slides
            index={photoIndex}
            onIndexChange={setPhotoIndex}
          />
        )}
      </div>
    </>
  );
};

export default LightboxComponent;
