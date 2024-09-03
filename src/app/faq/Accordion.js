"use client";

import { FaPlus, FaMinus } from 'react-icons/fa';
import { useRef, useEffect, useState } from 'react';

const Accordion = ({ title, isOpen, onToggle, children, common }) => {
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  // Convert `common` object to a list of JSX elements
  const commonList = common ? (
    <ul style={{ margin: '0', paddingLeft: '20px' }}>
      {Object.values(common).map((item, index) => (
        <li key={index} style={{ marginBottom: '5px' }}>{item}</li>
      ))}
    </ul>
  ) : null;

  return (
    <div style={{ border: '1px solid #ccc', marginBottom: '10px', overflow: 'hidden' }}>
      <div
        onClick={onToggle}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          cursor: 'pointer',
          padding: '10px',
          backgroundColor: '#f9f9f9',
          fontSize: "14px",
          fontWeight: "600",
          lineHeight: '22px',
        }}
      >
        <span>{title}</span>
        <span>{isOpen ? <FaMinus /> : <FaPlus />}</span>
      </div>
      <div
        ref={contentRef}
        style={{
          maxHeight: `${height}px`,
          overflow: 'hidden',
          transition: 'max-height 0.3s ease-out',
          padding: isOpen ? '10px' : '0',
          backgroundColor: '#fff',
          color: 'rgb(151, 151, 151)',
          fontSize: '14px',
          lineHeight: '22px',
        }}
      >
        {children}
        {commonList} {/* Render `commonList` */}
      </div>
    </div>
  );
};

export default Accordion;
