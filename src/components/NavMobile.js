import React, { useState } from 'react';

// import icons
import { XIcon } from '@heroicons/react/outline';
import { MenuAlt3Icon } from '@heroicons/react/outline';

// import navigation data
// import { navigation } from '../data';

// import components
import Socials from './Socials';

// import framer
import { motion } from 'framer-motion';

// import Link
import { Link } from 'react-scroll';

import { useTranslation } from 'react-i18next';

const NavMobile = () => {
  const [t, i18n] = useTranslation("global");
  const [isOpen, setIsOpen] = useState(false);

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  const closeNav = () => {
  setIsOpen(false);
};


  return (
    <nav className='relative'>
      <div
        onClick={() => setIsOpen(true)}
        className='cursor-pointer text-white'
      >
        <MenuAlt3Icon className='w-8 h-8' />
      </div>

      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : 'hidden'}
        className='w-4 h-4 rounded-full bg-accent fixed top-0 right-0'
      ></motion.div>

      <motion.ul
        variants={ulVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : ''}
        className={`${
          isOpen ? 'right-0' : '-right-full'
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className='cursor-pointer absolute top-8 right-8'
        >
          <XIcon className='w-8 h-8' />
        </div>
        
            <li className='mb-8'>
              <Link
                to={t('nav.href-home')}
                smooth={true}
                duration={500}
                offset={-70}
                className='text-xl cursor-pointer capitalize'
                onClick={closeNav}
              >
                {t('nav.home')}
              </Link>
            </li>

            <li className='mb-8'>
              <Link
                to={t('nav.href-about')}
                smooth={true}
                duration={500}
                offset={-70}
                className='text-xl cursor-pointer capitalize'
                onClick={closeNav}
              >
                {t('nav.about')}
              </Link>
            </li>

             <li className='mb-8'>
              <Link
                to={t('nav.href-portfolio')}
                smooth={true}
                duration={500}
                offset={-70}
                className='text-xl cursor-pointer capitalize'
                onClick={closeNav}
              >
                {t('nav.portfolio')}
              </Link>
            </li>

            <li className='mb-8'>
              <Link
                to={t('nav.href-services')}
                smooth={true}
                duration={500}
                offset={-70}
                className='text-xl cursor-pointer capitalize'
                onClick={closeNav}
              >
                {t('nav.services')}
              </Link>
            </li>

            <li className='mb-8'>
              <Link
                to={t('nav.href-contact')}
                smooth={true}
                duration={500}
                offset={-70}
                className='text-xl cursor-pointer capitalize'
                onClick={closeNav}
              >
                {t('nav.contact')}
              </Link>
            </li>
            <div className='flex'>
            <button className='border rounded-md p-2' onClick={() => i18n.changeLanguage("es")}>ES</button>
              <button className='border rounded-md p-2' onClick={() => i18n.changeLanguage("en")}>EN</button>
              </div>
        
        <Socials />
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
