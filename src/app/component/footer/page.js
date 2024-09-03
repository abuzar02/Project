"use client";
import React, { useState } from 'react';
import '../../style/footer.css'
import Image from 'next/image';
import { BsListUl } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
import Link from 'next/link';
import sidbieng from '../../../../public/images/sidbieng.png'
import chstlogo from '../../../../public/images/CGTMSELOGO.png'
import udyamimitra from '../../../../public/images/udyamimitra.png'
import udyogaadhar from '../../../../public/images/udyogaadhar-msme.jpg'
import msmelogo from '../../../../public/images/msmelogo.jpg'
import bottom from '../../../../public/images/bottom-logo.png'
import { IoIosSettings } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [isListOpen, setIsListOpen] = useState(false);

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };
  return (
    <>
      <div className='headlinSection'>
        <div className='container'>
          <div className='headlineflex'>
            <div className='headlinetext'>
              <p> "MUDRA is a refinancing Institution. MUDRA does not lend directly to the micro entrepreneurs / individuals.
                Mudra loans under Pradhan Mantri Mudra Yojana (PMMY) can be availed of from nearby branch office of a bank, NBFC, MFIs etc.
                Borrowers can also now file online application for MUDRA loans on Udyamimitra portal (www.udyamimitra.in). </p>
              <h5><strong><i>
                Note: There are no agents or middleman engaged by MUDRA for availing of Mudra Loans. The borrowers are advised to keep away from
                persons posing as Agents/ facilitators of
                MUDRA/PMMY."
              </i></strong></h5>
            </div>
            <div className='headlineright'>
              <button className='skill-btn' onClick={toggleList}>
                <BsListUl /> Skill Trained - PMMY <RiArrowDownSLine />
              </button>
              {isListOpen && (
                <ul className='dropdown-list'>
                  <li><Link href="#">Skill Devp.Program</Link> </li>
                  <li><Link href="#">PMEGP</Link> </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
      <div className='mainrelate'>
      <div>
            <p>Related Link :</p>
        </div>
        <div className='relatflex'>
          <Link href="#"><Image className='relatimage' src={sidbieng} alt="sidbieng"/></Link>
          <Link href="#"><Image className='relatimage' src={chstlogo} alt="CGTMSELOGO"/></Link>
          <Link href="#"><Image className='relatimage' src={udyamimitra} alt="udyamimitra"/></Link>
          <Link href="#"><Image className='relatimage' src={udyogaadhar} alt="udyogaadhar"/></Link>
          <Link href="#"><Image className='relatimage' src={msmelogo} alt="msmelogo"/></Link>
        </div>
      </div>
      </div>


      <div className='footer-bg'>
        <div className='container'>
            <div className='footer-flex'>
              <div className='first-footer'>
                <h3>The Purpose of MUDRA loan</h3>
                <div className='extend'>
                  <Image src={bottom} alt='bottom-logo'/>
                  <p>Mudra loan is extended for a variety of purposes which provides income generation and employment creation in Manufacturing, Services, Retail and Agri. Allied Activities.</p>
                </div>
              </div>

              <div className='quick-menu'>
                <h3> <IoIosSettings /> Quick menu</h3>
                <ul>
                  <li><Link href="#">OFFERINGS</Link></li>
                  <li><Link href="#">PMMY REPORT</Link></li>
                  <li><Link href="#">FAQ</Link></li>
                  <li><Link href="#">TENDERS</Link></li>
                  <li><Link href="#">CAREERS</Link></li>
                  <li><Link href="#">CONTACT US</Link></li>
                </ul>
              </div>

              <div className='office'>
                <h3>CIN: U65100MH2015PLC274695</h3>
                <h3><CiLocationOn /> REGISTERED OFFICE</h3>
                <p>SWAVALAMBAN BHAVAN, C-11, G-BLOCK, BANDRA KURLA COMPLEX, BANDRA EAST, MUMBAI – 400 051</p>
              </div>
            </div>
        </div>
      </div>

      <div className='copyright'>
        <div className='container'>
          <div className='copy-flex'>
          <div className='copy-text'>
              <p>Made in India – Designed, Developed and Hosted by  <Link href="#">ESDS Software Solution Ltd.</Link></p>
              <p>© Copyright 2024 mudra.org.in | Contact us: help[at]mudra[dot]org[dot]in |</p>
              </div>
              <div className='icon-box'>
                <Link href="#"><FaFacebook /></Link>
                <Link href="#"><FaLinkedin /></Link>
              Visitor's Count: 25800646
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer