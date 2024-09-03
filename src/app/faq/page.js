"use client";

import { useState } from 'react';
import Accordion from './Accordion';
import accordionData from './accordionData';
import '../style/accordion.css';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <>
  
    
    <div className='containeraa'>
      <h1>FAQ</h1>
     
      {accordionData.map((item, index) => (
   
  
        
        <Accordion
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
          common={item.common}
        >
          {item.content}
        
        </Accordion>
        
      ))}
    </div>
    </>
  );
};

export default FAQPage;
