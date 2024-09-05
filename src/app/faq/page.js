"use client";

import { useState } from 'react';
import Accordion from './Accordion';
import accordionData from './accordionData';
import '../style/accordion.css';
import Link from 'next/link';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <>
    <div className='bgheimage'>
      <div className='container'>
        <div className='gallery-flex'>
          <h2>Gallery</h2>
          <ul>
            <li><Link href='/'>Home</Link></li>
            /
            <li><Link className='color-active' href='#'>Faq</Link></li>
          </ul>
        </div>
      </div>
    </div>
    
    <div className='containeraa'>
     
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
