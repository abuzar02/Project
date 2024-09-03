import React from 'react';
import '../style/section.css';
import { FaAnglesRight } from "react-icons/fa6";

const Service = () => {
  return (
    <div className='main-section'>
      <div className='container'>
        <div className='flexs'>
        <div className='card-box'>
          <h2 className='quick'>QUICK LINKS</h2>
          <ul className='main-ul'>
            <li><a href='#'>SIDBI <FaAnglesRight /></a></li>
            <li><a href='#'>Stand Up India <FaAnglesRight /></a></li>
            <li><a href='#'>DFS <FaAnglesRight /></a></li>
            <li><a href='#'>MFIN <FaAnglesRight /></a></li>
            <li><a href='#'>SA-DHAN <FaAnglesRight /></a></li>
            <li><a href='#'>NABARD <FaAnglesRight /></a></li>
            <li><a href='#'>Mahila E Haat <FaAnglesRight /></a></li>
            <li><a href='#'>UdyamiMitra <FaAnglesRight /></a></li>
        
          </ul>
          <button className='view'> VIEW ALL</button>
        </div>

        <div className='card-box'>
          <h2 className='quick'>PMMY Reports</h2>
          <ul className='main-ul'>
            <li><a href='#'>PMMY Performance: 2023-24 <FaAnglesRight /></a></li>
            <li><a href='#'> Overall Performance <FaAnglesRight /></a></li>
            <li><a href='#'> State wise Performance <FaAnglesRight /></a></li>
            <li><a href='#'>Bank wise Performance <FaAnglesRight /></a></li>
          </ul>
          <button className='view'> VIEW ALL</button>
        </div>

        <div className='card-box'>
          <h2 className='quick'>Documents</h2>
          <ul className='main-ul'>
            <li><a href='#'>Coffee Table Book - MUDRA <FaAnglesRight /></a> </li>
            <li><a href='#'>Success Stories <FaAnglesRight /></a></li>
            <li><a href='#'>Success Stories-II <FaAnglesRight /></a></li>
            <li><a href='#'>Success Stories-III <FaAnglesRight /></a></li>
            <li><a href='#'>Profile of MUDRA Udyamis <FaAnglesRight /></a></li>
          </ul>
          <button className='view'> VIEW ALL</button>
        </div>

        <div className='card-box'>
          <h2 className='quick'>Events Gallery</h2>
          <ul className='main-ul'>
            <li><a href='#'> MUDRA Inauguration <FaAnglesRight /></a></li>
            <li><a href='#'>Awards <FaAnglesRight /></a></li>
            <li><a href='#'> Conferences <FaAnglesRight /></a></li>
            <li><a href='#'>Programmes <FaAnglesRight /></a></li>
          </ul>
          <button className='view'> VIEW ALL</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
