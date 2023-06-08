import Link from 'next/link';
import { FaHome, FaUser, FaCode, FaFolderOpen, FaEnvelope } from 'react-icons/fa';
import { CiMenuBurger, CiCircleChevRight } from "react-icons/ci";
import React, { useState } from 'react';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
      setIsActive(!isActive);
  };

  return (
    <div className={isActive ? 'NavBar_project' : 'NavBar_project desplace'}>
      <div className='icon-hamburger' onClick={handleClick}>
        <CiMenuBurger style= {{width: '50px', height: '50px',display: isActive ? 'none' : ' ' }} />
        <CiCircleChevRight style={{ width: '50px', height: '50px', display: isActive ? ' ' : 'none'}} />
        </div>
    <nav>
      <ul>
        <li>
          <div className="bubble"></div>
          <Link href="#Hero">
          <FaHome style={{ width: '50px', height: '50px' }} />
            Home
          </Link>
        </li>
        <li>
        <div className="bubble"></div>
          <Link href="#About">
          <FaUser style={{ width: '50px', height: '50px' }} />
            About
          </Link>
        </li>
        <li>
        <div className="bubble"></div>
          <Link href="#Skills">
          <FaCode style={{ width: '50px', height: '50px' }} />
            Skills
          </Link>
        </li>
        <li>
        <div className="bubble"></div>
          <Link href="#Projects">
          <FaFolderOpen style={{ width: '50px', height: '50px' }} />
            Projects
          </Link>
        </li>
        <li>
          <div className="bubble"></div>
          <Link href="#Contact">
          <FaEnvelope style={{ width: '50px', height: '50px' }} />
            Contact
          </Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;