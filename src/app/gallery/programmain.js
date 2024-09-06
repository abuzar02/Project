// "use client";
// import React, { useState } from 'react';
// import 'react-image-lightbox/style.css';
// import Lightbox from 'react-image-lightbox';
// import '../style/gallery.css';
// import { IoSearchSharp } from "react-icons/io5";

// const ProgramMain = ({ images }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [photoIndex, setPhotoIndex] = useState(0);

//   const handleViewLargerClick = (index) => {
//     setPhotoIndex(index);
//     setIsOpen(true);
//   };

//   const handleMovePrev = () => {
//     setPhotoIndex((photoIndex + images.length - 1) % images.length);
//   };

//   const handleMoveNext = () => {
//     setPhotoIndex((photoIndex + 1) % images.length);
//   };

//   return (
//     <div className='galleryWrapper'>
//         <div className='photoGallery'><h2>Launch of E- Rickshaw</h2></div>
//       <div className='imageGroup'>
//         {images.slice(0, 2).map((src, index) => (
//           <div
//             key={index}
//             className='mainImage'
//             onClick={() => handleViewLargerClick(index)}
//           >
//             <img
//               src={src}
//               alt={`Image ${index}`}
//             />
//             <div className='overlay'>
//               <IoSearchSharp />
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className='photoGallery'><h2>Success stories</h2></div>
//       <div className='imageGroup'>
//         {images.slice(2, 4).map((src, index) => (
//           <div
//             key={index + 2} // Adjust the key to be unique
//             className='mainImage'
//             onClick={() => handleViewLargerClick(index + 2)}
//           >
//             <img
//               src={src}
//               alt={`Image ${index + 2}`}
//             />
//             <div className='overlay'>
//               <IoSearchSharp />
//             </div>
//           </div>
//         ))}
//       </div>

//       {isOpen && (
//         <Lightbox
//           mainSrc={images[photoIndex]}
//           nextSrc={images[(photoIndex + 1) % images.length]}
//           prevSrc={images[(photoIndex + images.length - 1) % images.length]}
//           onCloseRequest={() => setIsOpen(false)}
//           onMovePrevRequest={handleMovePrev}
//           onMoveNextRequest={handleMoveNext}
//         />
//       )}
//     </div>
//   );
// };

// export default ProgramMain;

"use client";
import React, { useState } from 'react';
import'yet-another-react-lightbox/styles.css'
import Lightbox from 'yet-another-react-lightbox';
import '../style/gallery.css';
import { IoSearchSharp } from "react-icons/io5";

const ProgramMain = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleViewLargerClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const handleMovePrev = () => {
    setPhotoIndex((photoIndex + images.length - 1) % images.length);
  };

  const handleMoveNext = () => {
    setPhotoIndex((photoIndex + 1) % images.length);
  };

  return (
    <div className='galleryWrapper'>
      <div className='photoGallery'><h2>Launch of E- Rickshaw</h2></div>
      <div className='imageGroup'>
        {images.slice(0, 2).map((src, index) => (
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
      </div>

      <div className='photoGallery'><h2>Success stories</h2></div>
      <div className='imageGroup'>
        {images.slice(2, 4).map((src, index) => (
          <div
            key={index + 2} // Adjust the key to be unique
            className='mainImage'
            onClick={() => handleViewLargerClick(index + 2)}
          >
            <img
              src={src}
              alt={`Image ${index + 2}`}
            />
            <div className='overlay'>
              <IoSearchSharp />
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          index={photoIndex}
          images={images}
          onClose={() => setIsOpen(false)}
          onPrev={() => handleMovePrev()}
          onNext={() => handleMoveNext()}
        />
      )}
    </div>
  );
};

export default ProgramMain;
