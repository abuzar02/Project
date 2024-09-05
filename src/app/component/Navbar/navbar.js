// "use client"; 
// import Link from 'next/link';
// import React, { useState } from 'react';
// import { FaSearch } from "react-icons/fa";
// import '../../style/navbar.css';
// import { GoPlus } from "react-icons/go";
// import { FaBars } from "react-icons/fa6";
// import { FaXmark } from "react-icons/fa6";

// const Navbar = () => {
//   const [searchVisible, setSearchVisible] = useState(false);

//   return (
//     <div className='bg-color1'>
//       <div className='container-nav'>
//         <div className='display'>
//           <ul className='main-unorder'>
//             <div className='x-mark-icon'>
//             <FaXmark />
//             </div>
//             <li><Link href="/">Home</Link></li>
//               <li className="dropdown">
//                 <Link href="#">About Us <GoPlus /></Link>
//                 <ul className="dropdown-content">
//                   <li><Link className="atre" href="#">Vision</Link></li>
//                   <li><Link className="atre" href="#">Genesis and Role of MUDRA</Link></li>
//                   <li><Link className="atre" href="#">Board Of Directors</Link></li>
//                   <li><Link className="atre" href="#">Management Team</Link></li>
//                 </ul>
//               </li>


//             <li className='dropdown'><Link href="/about">Offerings <GoPlus /></Link>
//             <ul className="dropdown-content">
//                   <li><Link className="atre" href="#">Vision</Link></li>
//                   <li><Link className="atre" href="#">Genesis and Role of MUDRA</Link></li>
//                   <li><Link className="atre" href="#">Board Of Directors</Link></li>
//                   <li><Link className="atre" href="#">Management Team</Link></li>
//                 </ul>
//             </li>
//             <li className='dropdown'><Link href="/about">Financials <GoPlus /></Link>
//             <ul className="dropdown-content">
//                   <li><Link className="atre" href="#">Vision</Link></li>
//                   <li><Link className="atre" href="#">Genesis and Role of MUDRA</Link></li>
//                   <li><Link className="atre" href="#">Board Of Directors</Link></li>
//                   <li><Link className="atre" href="#">Management Team</Link></li>
//                 </ul>
//             </li>
//             <li><Link href="/faq">FAQ</Link></li> 
//             <li><Link href="/gallery">Gallery</Link></li>
//             <li><Link href="/about">Corporate Governance</Link></li>
//             <li><Link href="/about">Success stories</Link></li>
//             <li><Link href="/about">Tenders</Link></li>
//             <li><Link href="/about">Careers</Link></li>
//             <li><Link href="/about">Contact us</Link></li>
//           </ul>
//           <div className="bar-icon">
//           <FaBars />
//           </div>
          
//           <div className='main-input-field'>
//             <button className='search' onClick={() => setSearchVisible(!searchVisible)}>
//               <FaSearch />
//             </button>

//             {searchVisible && (
//               <div className='input-field'>
//                 <input type="text" placeholder="Search..." />
//                 <button className='main-search'>SEARCH</button>
//               </div>
//             )}
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

"use client"; 
import Link from 'next/link';
import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import '../../style/navbar.css';
import { GoPlus } from "react-icons/go";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false); // Define searchVisible state

  return (
    <div className='bg-color1'>
      <div className='container-nav'>
        <div className={`display ${menuVisible ? 'active' : ''}`}>
          <ul className={`main-unorder ${menuVisible ? 'active' : ''}`}>
            <div className='x-mark-icon' onClick={() => setMenuVisible(false)}>
              <FaXmark />
            </div>
            <li><Link href="/">Home</Link></li>
            <li className="dropdown">
              <Link href="#">About Us <GoPlus /></Link>
              <ul className="dropdown-content">
                <li><Link className="atre" href="/vision">Vision</Link></li>
                <li><Link className="atre" href="/gnesis">Genesis and Role of MUDRA</Link></li>
                <li><Link className="atre" href="/board">Board Of Directors</Link></li>
                <li><Link className="atre" href="#">Management Team</Link></li>
              </ul>
            </li>
            <li className='dropdown'><Link href="/about">Offerings <GoPlus /></Link>
              <ul className="dropdown-content">
                <li><Link className="atre" href="#">Vision</Link></li>
                <li><Link className="atre" href="#">Genesis and Role of MUDRA</Link></li>
                <li><Link className="atre" href="#">Board Of Directors</Link></li>
                <li><Link className="atre" href="#">Management Team</Link></li>
              </ul>
            </li>
            <li className='dropdown'><Link href="/about">Financials <GoPlus /></Link>
              <ul className="dropdown-content">
                <li><Link className="atre" href="#">Vision</Link></li>
                <li><Link className="atre" href="#">Genesis and Role of MUDRA</Link></li>
                <li><Link className="atre" href="#">Board Of Directors</Link></li>
                <li><Link className="atre" href="#">Management Team</Link></li>
              </ul>
            </li>
            <li><Link href="/faq">FAQ</Link></li> 
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/about">Corporate Governance</Link></li>
            <li><Link href="/about">Success stories</Link></li>
            <li><Link href="/about">Tenders</Link></li>
            <li><Link href="/about">Careers</Link></li>
            <li><Link href="/about">Contact us</Link></li>
          </ul>
          
          <div className="bar-icon" onClick={() => setMenuVisible(true)}>
            <FaBars />
          </div>

          <div className='main-input-field'>
            <button className='search' onClick={() => setSearchVisible(!searchVisible)}>
              <FaSearch />
            </button>

            {searchVisible && (
              <div className='input-field'>
                <input type="text" placeholder="Search..." />
                <button className='main-search'>SEARCH</button>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


