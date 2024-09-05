// components/Card.js
import Image from 'next/image';
import PropTypes from 'prop-types';
import '../style/card.css';

const Card = ({ imageSrc, name, description }) => {
  return (
    <div className="card">
     <div className='Image-box'>
     <Image 
        src={imageSrc} 
        alt={name} 
        width={250} 
        height={250} 
        />
     </div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
