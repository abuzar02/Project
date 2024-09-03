import React from 'react';
import Image from 'next/image'; // Import Image from next/image
import '../../style/header.css';
import logo from '../../../../public/images/logo.png'; // Ensure the path is correct
import azadi_logo from '../../../../public/images/azadi-logo.png'
import { FaLock } from "react-icons/fa";

const Page = () => {
  return (
    <>
      <div className='bg-color'></div>
      <header>
      <div className='container'>
        <div className='d-flex'>
        <div>
          <Image src={logo}  alt="logo" priority/>
          <Image src={azadi_logo}  alt="logo" priority/>
        </div>

        <div className='left-side'>
        <div className='flex'>
        <ul>
            <li className='tue'>Tuesday</li>
            <li>August 27, 2024</li>
            <li>13:00 PM</li>
          </ul>
          <ul>
            <li>English</li>
            <li>A-</li>
            <li>A</li>
            <li>A+</li>
          </ul>
        </div>
          <div className='btn-login'>
          <a href='#' className='btn'><FaLock /> Login for PMMY Portal</a>
         </div>
        </div>
       
         </div>
      </div>
      </header>
    </>
  );
};

export default Page;
