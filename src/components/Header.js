import React, { useEffect, useState } from 'react';
import "../styles/Header.css";
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';
import Socials from './Socials';


const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? 'bg-tertiary h-20' : 'h-24'
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>
        <div className='container mx-auto h-full flex items-center justify-between'>
        {/* logo */}
        <div className='text-logo'>
        { "</>" }
        </div>
        {/* signature */}
        <div><p className="text-3xl font-signature bg secondary ">Patricio Uskaer</p></div>
        {/* nav */}
        <div className='hidden lg:block'>
          <Nav />
        </div>
        {/* Socials */}
        <div className='hidden lg:block'>
          <Socials />
        </div>
        {/* nav mobile*/}
        <div className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
