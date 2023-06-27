import React from 'react';

// import navigation data
import { navigation } from '../data';

// import Link
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Nav = () => {
   const [t, i18n] = useTranslation("global");
  return (
    <nav>
      <ul className='flex space-x-8 capitalize text-[15px]'>
        
            <li
              className='text-white hover:text-accent cursor-pointer'
            >
              <Link
                to={t('nav.href-home')}
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className='transition-all duration-300'
              >
                {t('nav.home')}
              </Link>
            </li>

            <li
              className='text-white hover:text-accent cursor-pointer'
            >
              <Link
                to={t('nav.href-about')}
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className='transition-all duration-300'
              >
                {t('nav.about')}
              </Link>
            </li>

            <li
              className='text-white hover:text-accent cursor-pointer'
            >
              <Link
                to={t('nav.href-portfolio')}
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className='transition-all duration-300'
              >
                {t('nav.portfolio')}
              </Link>
            </li>

            <li
              className='text-white hover:text-accent cursor-pointer'
            >
              <Link
                to={t('nav.href-services')}
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className='transition-all duration-300'
              >
                {t('nav.services')}
              </Link>
            </li>

            <li
              className='text-white hover:text-accent cursor-pointer'
            >
              <Link
                to={t('nav.href-contact')}
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className='transition-all duration-300'
              >
                {t('nav.contact')}
              </Link>
            </li>

      </ul>
              <button className='border rounded-md p-2' onClick={() => i18n.changeLanguage("es")}>ES</button>
              <button className='border rounded-md p-2' onClick={() => i18n.changeLanguage("en")}>EN</button>
    </nav>
  );
};

export default Nav;
